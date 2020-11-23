//학교 건물들 좌표
//학교건물 좌표
var kwpositions = [

    {   //화도
        title: "화도관",
        latlng: new kakao.maps.LatLng(37.620507, 127.059466)
    },
    {   //비마
        title: "비마관",
        latlng: new kakao.maps.LatLng(37.619640, 127.059890)
    },
    {   //새빛
        title: "새빛관",
        latlng: new kakao.maps.LatLng(37.619865, 127.060931)
    },
    {   //문화
        title: "동해문화예술관",
        latlng: new kakao.maps.LatLng(37.619883, 127.057685)
    },
    {   //옥의
        title: "옥의관",
        latlng: new kakao.maps.LatLng(37.618872, 127.059187)
    },
    {   //한울
        title: "한울관",
        latlng: new kakao.maps.LatLng(37.620839, 127.057020)
    },
    {   //누리
        title: "누리관",
        latlng: new kakao.maps.LatLng(37.620435, 127.054894)
    },
    {   //참빛
        title: "참빛관",
        latlng: new kakao.maps.LatLng(37.619227, 127.060960)
    },
    {   //80기념관(도서관)
        title: "80주년기념관(도서관)",
        latlng: new kakao.maps.LatLng(37.620084, 127.058764)
    },
    {   //복지관
        title: "복지관",
        latlng: new kakao.maps.LatLng(37.619427, 127.058333)
    },
    {   //기숙사
        title: "빛솔재(기숙사)",
        latlng: new kakao.maps.LatLng(37.621446, 127.056245)
    }
];


//학교 커스텀 오버레이 정보
var kwcontent=[
    { 
        con: '<div class="ovr">' +
    '          <div class="info">' +
    '        <div class="title">' +
    '            화도관' +
    '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img">' +
    '                <img src="https://www.kw.ac.kr/ko/img/tour01_18.jpg" width="140" height="140">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="pur" style="font-weight: 700; font-size: 15px;">대학본부, 건축공학과</div>' +
    '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
    '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 404-21</div>' +
    '                <div><a href="pages/화도관.html" class="kwbtn" target="_blank">안내 페이지</a></div>' +
    '                <div><a href="https://place.map.kakao.com/17563675" class="kwbtn" target="_blank" class="link">오시는 길</a></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>'},
    {
        con: '<div class="ovr">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            비마관' +
        '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://www.kw.ac.kr/ko/img/tour01_07.jpg" width="140" height="140">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="pur" style="font-weight: 700; font-size: 14px;">전자정보공과대학, 공학대학</div>' +
        '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
        '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-1</div>' +
        '                <div><a href="pages/비마관.html"  class="kwbtn" target="_blank">안내 페이지</a></div>' +
        '                <div><a href="https://place.map.kakao.com/17561911" class="kwbtn" target="_blank" class="link">오시는 길</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    },
    {
        con: '<div class="ovr">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            새빛관' +
        '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://www.kw.ac.kr/ko/img/tour01_07.jpg" width="140" height="140">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="pur" style="font-weight: 700; font-size: 15px;">소프트웨어 융합 대학</div>' +
        '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
        '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-1</div>' +
        '                <div><a href="pages/새빛관.html" class="kwbtn" target="_blank">안내 페이지</a></div>' +
        '                <div><a href="https://place.map.kakao.com/715015774" class="kwbtn" target="_blank" class="link">오시는 길</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    },
    {
        con: '<div class="ovr">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            참빛관' +
        '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://www.kw.ac.kr/ko/img/tour01_15.jpg" width="140" height="140">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="pur" style="font-weight: 700; font-size: 14px;">전자정보공과대학,공학대학</div>' +
        '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
        '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-1</div>' +
        '                <div><a href="pages/참빛관.html" class="kwbtn" target="_blank">안내 페이지</a></div>' +
        '                <div><a href="https://place.map.kakao.com/27202326"  class="kwbtn"target="_blank" class="link">오시는 길</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    },
    {
        con: '<div class="ovr">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            한울관' +
        '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://www.kw.ac.kr/ko/img/tour01_16.jpg" width="140" height="140">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="pur" style="font-weight: 700; font-size: 15px;">인문대학 </div>' +
        '                <div class="ellipsis">서울 노원구 광운로 27-38</div>' +
        '                <div class="jibun ellipsis">(우) 01891 (지번) 월계동 465-41</div>' +
        '                <div><a href="pages/한울관.html" class="kwbtn" target="_blank">안내 페이지</a></div>' +
        '                <div><a href="https://place.map.kakao.com/17566581" class="kwbtn" target="_blank" class="link">오시는 길</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    },
    {
        con: '<div class="ovr">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            옥의관' +
        '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://www.kw.ac.kr/ko/img/tour01_14.jpg" width="140" height="140">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="pur" style="font-weight: 700; font-size: 15px;">자연과학대학</div>' +
        '                <div class="ellipsis">서울 노원구 광운로6길 31</div>' +
        '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-5</div>' +
        '                <div><a href="pages/옥의관.html" class="kwbtn" target="_blank">안내 페이지</a></div>' +
        '                <div><a href="https://place.map.kakao.com/17567827" class="kwbtn" target="_blank" class="link">오시는 길</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    },{
        con: '<div class="ovr">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            누리관' +
        '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://www.kw.ac.kr/ko/img/tour01_03.jpg" width="140" height="140">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="pur" style="font-weight: 700; font-size: 15px;">로봇학부, 경영학부</div>' +
        '                <div class="ellipsis">서울 노원구 광운로1길 60</div>' +
        '                <div class="jibun ellipsis">(우) 01890 (지번) 월계동 505-2</div>' +
        '                <div><a href="pages/누리관.html" class="kwbtn" target="_blank">안내 페이지</a></div>' +
        '                <div><a href="https://place.map.kakao.com/12721052" class="kwbtn" target="_blank" class="link">오시는 길</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    },
    {
        con: '<div class="ovr">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            80주년기념관(도서관)' +
        '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://www.kw.ac.kr/ko/img/tour01_24.jpg" width="140" height="140">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="pur" style="font-weight: 700; font-size: 15px;">도서관, 푸드코트</div>' +
        '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
        '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-1</div>' +
        '                <div><a href="pages/80주년기념관.html" class="kwbtn2" target="_blank">안내 페이지</a></div>' +
        '                <div><a href="pages/중앙도서관.html" class="kwbtn2" target="_blank">중앙 도서관 안내</a></div>' +
        '                <div><a href="https://place.map.kakao.com/823736351"class="kwbtn2" target="_blank" class="link">오시는 길</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    },
    {
        con: '<div class="ovr">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            복지관' +
        '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://www.kw.ac.kr/ko/img/tour01_06.jpg"width="140" height="140">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="pur" style="font-weight: 700; font-size: 15px;">동아리실, 함지마루(학식)</div>' +
        '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
        '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-41</div>' +
        '                <div><a href="pages/복지관.html"  class="kwbtn" target="_blank">안내 페이지</a></div>' +
        '                <div><a href="https://place.map.kakao.com/17565051" class="kwbtn" target="_blank" class="link">오시는 길</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    },
    {
        con: '<div class="ovr">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            동해문화예술관' +
        '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://www.kw.ac.kr/ko/img/tour01_05.jpg" width="140" height="140">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="pur" style="font-weight: 700; font-size: 15px;">강당</div>' +
        '                <div class="ellipsis">서울 노원구 광운로 21</div>' +
        '                <div class="jibun ellipsis">(우)01890 (지번) 월계동 466</div>' +
        '                <div><a href="pages/동해문화예술관.html" class="kwbtn" target="_blank">안내 페이지</a></div>' +
        '                <div><a href="https://place.map.kakao.com/17564275"class="kwbtn" target="_blank" class="link">오시는 길</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    },
    {
        con: '<div class="ovr">' +
        '    <div class="info">' +
        '        <div class="title">' +
        '            빛솔재' +
        '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://www.kw.ac.kr/ko/img/tour01_26.jpg" width="140" height="140">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="pur" style="font-weight: 700; font-size: 15px;">기숙사</div>' +
        '                <div class="ellipsis">서울 노원구 광운로 21</div>' +
        '                <div class="jibun ellipsis">(우) 01890 (지번) 월계동 500-40</div>' +
        '                <div><a href="https://dorm.kw.ac.kr/" class="kwbtn" target="_blank" class="link">기숙사 홈페이지</a></div>' +
        '                <div><a href="https://place.map.kakao.com/614748387" class="kwbtn" target="_blank" class="link">오시는 길</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>'
    }
]

var kwside=[
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 화도관'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로 20' + '</span>'+'<br>'+
                '<span>' + '대학본부, 건축공학과' + '</span>'+'<br>' +
                '</div>'
    },
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 비마관'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로 20' + '</span>'+'<br>'+
                '<span>' + '전자정보공과대학,공학대학' + '</span>'+'<br>' +
                '</div>'
    },
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 새빛관'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로 20' + '</span>'+'<br>'+
                '<span>' + '소프트웨어 융합대학' + '</span>'+'<br>' +
                '</div>'
    },
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 참빛관'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로 20' + '</span>'+'<br>'+
                '<span>' + '전자정보공과대학,공학대학' + '</span>'+'<br>' +
                '</div>'
    },
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 한울관'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로 27-38' + '</span>'+'<br>'+
                '<span>' + '인문대학' + '</span>'+'<br>' +
                '</div>'
    },
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 옥의관'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로6길 31' + '</span>'+'<br>'+
                '<span>' + '자연과학대학' + '</span>'+'<br>' +
                '</div>'
    },
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 누리관'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로1길 60' + '</span>'+'<br>'+
                '<span>' + '로봇학부, 경영학부' + '</span>'+'<br>' +
                '</div>'
    },
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 80주년기념관(도서관)'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로 20' + '</span>'+'<br>'+
                '<span>' + '도서관, 우체국, 푸드코트' + '</span>'+'<br>' +
                '</div>'
    },
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 복지관'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로 20' + '</span>'+'<br>'+
                '<span>' + '동아리실, 함지마루(학생식당)' + '</span>'+'<br>' +
                '</div>'
    },
    
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 동해문화예술관'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로 21' + '</span>'+'<br>'+
                '<span>' + '대강당' + '</span>'+'<br>' +
                '</div>'
    },
    {
        scon :  '<div class="infosidebar">' +
                '   <h3>' +'이름: 빛솔재'+ '</h3>'+
                '<span>' + '주소: 서울 노원구 광운로 21' + '</span>'+'<br>'+
                '<span>' + '기숙사' + '</span>'+'<br>' +
                '</div>'
    }
]