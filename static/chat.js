// BBS GET
$(document).ready(function () {
    getBBS()
})


const form = document.querySelector('.open-form')
const modalChat = document.querySelector('.modal-chat')
const whiteBox = document.querySelector('.form-chat')
const btnClose = document.querySelector('.close')

form.addEventListener('click', function () {
    modalChat.style.display = "block"
})

// 이벤트버블링 컨트롤
modalChat.addEventListener('click', function (e) {
    if (e.target != whiteBox && e.target == this) {
        modalChat.style.display = "none"
    }
})

btnClose.addEventListener('click', function () {
    modalChat.style.display = "none"
})

// BBS 문의 POST
const btnSubmit = document.getElementById('submit')
btnSubmit.addEventListener('click', function () {
    console.log("제출하기")
    let select = document.querySelector('#dest')
    let dest = select.options[select.selectedIndex].text
    let contents = document.querySelector('#contents').value
    let user = "temp_user"
    $.ajax({
        type: "POST",
        url: "/bbs",
        data: {
            user_give: user,
            dest_give: dest,
            contents_give: contents
        },
        success: function (response) {
            alert(response['msg'])
            modalChat.style.display = "none"
            window.location.reload()
        }
    })
})
function getBBS() {
    $.ajax({
        type: "GET",
        url: "/bbs",
        data: {},
        success: function (response) {
            console.log(response)
            for (var i =0 ; i<response['bbs'].length;i++){
                let temp_user = response['bbs'][i]['user']
                let temp_dest = response['bbs'][i]['dest']
                let temp_contents = response['bbs'][i]['contents']
                
                let temp_html = `<tr>
                    <td>${temp_user}</td>
                    <td>${temp_dest}</td>
                    <td>${temp_contents}</td>
                    </tr>`

                $('#bbs-box').append(temp_html)
            }
            
        }
    })
}

// 정은선님 파트

function onClick() {
    document.querySelector('.modal_login2').style.display = 'block';
}
function  offClick() {
    document.querySelector('.modal_login2').style.display = 'none';
}

function on_Click() {
    document.querySelector('.modal_login').style.display = 'block';
}
function off_Click() {
    document.querySelector('.modal_login').style.display = 'none';
}