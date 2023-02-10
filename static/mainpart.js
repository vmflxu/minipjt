// -------- 나라 버튼
$(".vietnamButton").click(function () {
    $("#vietnam").toggle("slow");
});

$(".vietnamButton").click(function () {
    $(".mainbar__detail").hide("slow");
});
$(".vietnamButton").click(function () {
    $("#thailand, #malaysia, #singapore").hide("slow");
});
$(".thailandButton").click(function () {
    $("#thailand").toggle("slow");
});
$(".thailandButton").click(function () {
    $(".mainbar__detail").hide("slow");
});
$(".thailandButton").click(function () {
    $("#vietnam, #malaysia, #singapore").hide("slow");
});
$(".malaysiaButton").click(function () {
    $("#malaysia").toggle("slow");
});
$(".malaysiaButton").click(function () {
    $(".mainbar__detail").hide("slow");
});
$(".malaysiaButton").click(function () {
    $("#vietnam, #thailand, #singapore").hide("slow");
});
$(".singaporeButton").click(function () {
    $("#singapore").toggle("slow");
});

$(".singaporeButton").click(function () {
    $(".mainbar__detail").hide("slow");
});

$(".singaporeButton").click(function () {
    $("#vietnam, #thailand, #malaysia").hide("slow");
});

// -------- 나라 버튼 끝

// -------- 베트남 토글 버튼
$(".openDetailHanoi").click(function () {
    $("#detailHanoi").toggle("slow");
});
$(".closeDetailHanoi").click(function () {
    $("#detailHanoi").hide("slow");
});
// 테스트
$(".openDetailHanoi").click(function () {
    $("#detailNhatrang, #detailSapa, #detailHalong").hide("slow");
});
$(".openDetailNhatrang").click(function () {
    $("#detailHanoi, #detailSapa, #detailHalong").hide("slow");
});
$(".openDetailSapa").click(function () {
    $("#detailNhatrang, #detailHanoi, #detailHalong").hide("slow");
});
$(".openDetailHalong").click(function () {
    $("#detailNhatrang, #detailSapa, #detailHanoi").hide("slow");
});
// 테스트

$(".openDetailNhatrang").click(function () {
    $("#detailNhatrang").toggle("slow");
});
$(".closeDetailNhatrang").click(function () {
    $("#detailNhatrang").hide("slow");
});

$(".openDetailSapa").click(function () {
    $("#detailSapa").toggle("slow");
});
$(".closeDetailSapa").click(function () {
    $("#detailSapa").hide("slow");
});

$(".openDetailHalong").click(function () {
    $("#detailHalong").toggle("slow");
});
$(".closeDetailHalong").click(function () {
    $("#detailHalong").hide("slow");
});
// -------- 베트남 토글 버튼 끝

// -------- 태국 토글 버튼
$(".openDetailBangkok").click(function () {
    $("#detailBangkok").toggle("slow");
});
$(".closeDetailBangkok").click(function () {
    $("#detailBangkok").hide("slow");
});

$(".openDetailChiang").click(function () {
    $("#detailChiang").toggle("slow");
});
$(".closeDetailChiang").click(function () {
    $("#detailChiang").hide("slow");
});

$(".openDetailPattaya").click(function () {
    $("#detailPattaya").toggle("slow");
});
$(".closeDetailPattaya").click(function () {
    $("#detailPattaya").hide("slow");
});

$(".openDetailPhuket").click(function () {
    $("#detailPhuket").toggle("slow");
});
$(".closeDetailPhuket").click(function () {
    $("#detailPhuket").hide("slow");
});
// detailBangkok detailChiang detailPattaya detailPhuket
$(".openDetailBangkok").click(function () {
    $("#detailChiang, #detailPattaya, #detailPhuket").hide("slow");
});
$(".openDetailChiang").click(function () {
    $("#detailBangkok, #detailPattaya, #detailPhuket").hide("slow");
});
$(".openDetailPattaya").click(function () {
    $("#detailBangkok, #detailChiang, #detailPhuket").hide("slow");
});
$(".openDetailPhuket").click(function () {
    $("#detailBangkok, #detailChiang, #detailPattaya").hide("slow");
});
// -------- 태국 토글 버튼 끝

// -------- 말레이시아 토글 버튼
$(".openDetailMalaysia1").click(function () {
    $("#detailMalaysia1").toggle("slow");
});
$(".closeDetailMalaysia1").click(function () {
    $("#detailMalaysia1").hide("slow");
});

$(".openDetailMalaysia2").click(function () {
    $("#detailMalaysia2").toggle("slow");
});
$(".closeDetailMalaysia2").click(function () {
    $("#detailMalaysia2").hide("slow");
});

$(".openDetailMalaysia3").click(function () {
    $("#detailMalaysia3").toggle("slow");
});
$(".closeDetailMalaysia3").click(function () {
    $("#detailMalaysia3").hide("slow");
});

$(".openDetailMalaysia4").click(function () {
    $("#detailMalaysia4").toggle("slow");
});
$(".closeDetailMalaysia4").click(function () {
    $("#detailMalaysia4").hide("slow");
});

// detailMalaysia1 detailMalaysia2 detailMalaysia3 detailMalaysia4
$(".openDetailMalaysia1").click(function () {
    $("#detailMalaysia2, #detailMalaysia3, #detailMalaysia4").hide("slow");
});
$(".openDetailMalaysia2").click(function () {
    $("#detailMalaysia1, #detailMalaysia3, #detailMalaysia4").hide("slow");
});
$(".openDetailMalaysia3").click(function () {
    $("#detailMalaysia1, #detailMalaysia2, #detailMalaysia4").hide("slow");
});
$(".openDetailMalaysia4").click(function () {
    $("#detailMalaysia1, #detailMalaysia2, #detailMalaysia3").hide("slow");
});
// -------- 말레이시아 토글 버튼 끝

// -------- 싱가포르 토글 버튼
$(".openDetailSingapore1").click(function () {
    $("#detailSingapore1").toggle("slow");
});
$(".closeDetailSingapore1").click(function () {
    $("#detailSingapore1").hide("slow");
});

$(".openDetailSingapore2").click(function () {
    $("#detailSingapore2").toggle("slow");
});
$(".closeDetailSingapore2").click(function () {
    $("#detailSingapore2").hide("slow");
});

$(".openDetailSingapore3").click(function () {
    $("#detailSingapore3").toggle("slow");
});
$(".closeDetailSingapore3").click(function () {
    $("#detailSingapore3").hide("slow");
});

$(".openDetailSingapore4").click(function () {
    $("#detailSingapore4").toggle("slow");
});
$(".closeDetailSingapore4").click(function () {
    $("#detailSingapore4").hide("slow");
});

// detailSingapore1 detailSingapore2 detailSingapore3 detailSingapore4
$(".openDetailSingapore1").click(function () {
    $("#detailSingapore2, #detailSingapore3, #detailSingapore4").hide("slow");
});
$(".openDetailSingapore2").click(function () {
    $("#detailSingapore1, #detailSingapore3, #detailSingapore4").hide("slow");
});
$(".openDetailSingapore3").click(function () {
    $("#detailSingapore1, #detailSingapore2, #detailSingapore4").hide("slow");
});
$(".openDetailSingapore4").click(function () {
    $("#detailSingapore1, #detailSingapore2, #detailSingapore3").hide("slow");
});
// -------- 싱가포르 토글 버튼 끝

// 날씨??
$(document).ready(function () {
    tempReady();
});

function tempReady() {
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=aeaa822cae12fe3c4d1637c72a2f36c7",
        data: {},
        success: function (response) {
            let temp = response["main"]["temp"] - 273;
            let temp1 = String(temp);
            let temp2 = temp1.substr(0, 5);

            let temp_html = `<p>수도 기온 : ${temp2}°</p>`;

            $("#vietnamButton11").append(temp_html);
        },
    });
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=aeaa822cae12fe3c4d1637c72a2f36c7",
        data: {},
        success: function (response) {
            let temp = response["main"]["temp"] - 273;
            let temp1 = String(temp);
            let temp2 = temp1.substr(0, 5);

            let temp_html = `<p>수도 기온 : ${temp2}°</p>`;

            $("#thailandButton11").append(temp_html);
        },
    });
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Kuala%20Lumpur&appid=aeaa822cae12fe3c4d1637c72a2f36c7",
        data: {},
        success: function (response) {
            let temp = response["main"]["temp"] - 273;
            let temp1 = String(temp);
            let temp2 = temp1.substr(0, 5);

            let temp_html = `<p>수도 기온 : ${temp2}°</p>`;

            $("#malaysiaButton11").append(temp_html);
        },
    });
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=aeaa822cae12fe3c4d1637c72a2f36c7",
        data: {},
        success: function (response) {
            let temp = response["main"]["temp"] - 273;
            let temp1 = String(temp);
            let temp2 = temp1.substr(0, 5);

            let temp_html = `<p>수도 기온 : ${temp2}°</p>`;

            $("#singaporeButton11").append(temp_html);
        },
    });
}