document.write("<script type='text/javascript' src='/src/Map.js'><" + "/script>");

categorysel = document.createElement("div");
categorysel.className = "categorywrap";
document.body.appendChild(categorysel);

//현재 클릭 코드
var currclick = '';

var placelist = [
    { ko: "학교 건물", code: "KW" }, //학교용 코드 제작
    { ko: "편의점", code: "CS2" },
    { ko: "음식점", code: "FD6" },
    { ko: "카페", code: "CE7" },
    { ko: "은행", code: "BK9" },
    { ko: "병원", code: "HP8" },
    { ko: "약국", code: "PM9" }
];

//카테고리 버튼 클릭 이벤트
categorysel.addEventListener('click', function (e) {
    if (currclick == e.target.id) {
        currclick = '';
        removeMarker();
        updatecode("");
        infowindow.close();
    } else {
        currclick = e.target.id;
        updatecode(e.target.id);
        infowindow.close();
    }
});


//버튼 생성
for (var i = 0; i < placelist.length; i++) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = placelist[i].ko;
    btn.id = placelist[i].code;
    btn.className = "btn";


    categorysel.appendChild(btn);
}
