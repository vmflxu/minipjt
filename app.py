import requests
from flask import Flask, render_template, request, jsonify
from bs4 import BeautifulSoup
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.g6fmkt6.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta
app = Flask(__name__, static_folder='./static')


@app.route("/")
def home():
    return render_template('index.html')

@app.route("/bbs",methods=['POST'])
def bbs_post():
    print("run bbs_post")
    user_give = request.form['user_give']
    dest_give = request.form['dest_give']
    contents_give = request.form['contents_give']
    doc = {
        'user':user_give,
        'dest':dest_give,
        'contents':contents_give
    }
    db.bbs.insert_one(doc)
    return jsonify({'msg':'문의내용이 접수되었습니다.'})
    
@app.route("/bbs",methods=['GET'])
def bbs_get():
    bbs_list = list(db.bbs.find({},{'_id':False}))
    print(bbs_list)
    return jsonify({'bbs':bbs_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=False)
