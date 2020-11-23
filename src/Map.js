//지도를 띄울 div생성
var mapwrap = document.createElement("div");
mapwrap.id = "map";
document.body.appendChild(mapwrap);

// 지도를 표시할 div
var mapOption = {
    center: new kakao.maps.LatLng(37.6208, 127.0593), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapwrap, mapOption);



//마커& 인포 윈도우
var infowindow = new kakao.maps.InfoWindow({
    zIndex: 1,
    removable: true
});
// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({ zIndex: 1, map: map, removable: true })

var markers = [], //마커를 담을 배열
    currCategory = ''; //현재 선택된 카테고리

// 장소 검색 객체 생성
var ps = new kakao.maps.services.Places(map);

//학교건물
//학교건물
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



// 카테고리 검색을 요청하는 함수입니다
function searchPlaces() {
    if (!currCategory) {
        return;
    }

    // 지도에 표시되고 있는 마커를 제거합니다
    removeMarker();
    removeOverlay()
    switch (currCategory) {
        case "CS2":
        case "FD6":
        case "CE7":
        case "BK9":
        case "HP8":
        case "PM9":
        case "":
            ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
            break;
        case "KW":
            kwplace(kwpositions);
    }
}



function kwplace(kwpositions) {
    for (var i = 0; i < kwpositions.length; i++) {
        var marker = addMarker(kwpositions[i].latlng);
        var content;
        if (i == 0) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            화도관' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_18.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
                '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 404-21</div>' +
                '                <div><a href="pages/화도관.html">안내 페이지</a></div>' +
                '                <div><a href="https://place.map.kakao.com/17563675" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }

        else if (i == 1) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            비마관' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_07.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
                '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-1</div>' +
                '                <div><a href="pages/비마관.html">안내 페이지</a></div>' +
                '                <div><a href="https://place.map.kakao.com/17561911" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }
        else if (i == 2) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            새빛관' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_07.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
                '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-1</div>' +
                '                <div><a href="pages/새빛관.html">안내 페이지</a></div>' +
                '                <div><a href="https://place.map.kakao.com/715015774" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }
        else if (i == 3) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            동해문화예술관' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_05.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로 21</div>' +
                '                <div class="jibun ellipsis">(우)01890 (지번) 월계동 466</div>' +
                '                <div><a href="pages/동해문화예술관.html">안내 페이지</a></div>' +
                '                <div><a href="https://place.map.kakao.com/17564275" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }
        else if (i == 4) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            옥의관' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_14.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로6길 31</div>' +
                '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-5</div>' +
                '                <div><a href="pages/옥의관.html">안내 페이지</a></div>' +
                '                <div><a href="https://place.map.kakao.com/17567827" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }
        else if (i == 5) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            한울관' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_16.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로 27-38</div>' +
                '                <div class="jibun ellipsis">(우) 01891 (지번) 월계동 465-41</div>' +
                '                <div><a href="pages/한울관.html">안내 페이지</a></div>' +
                '                <div><a href="https://place.map.kakao.com/17566581" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }
        else if (i == 6) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            누리관' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_03.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로1길 60</div>' +
                '                <div class="jibun ellipsis">(우) 01890 (지번) 월계동 505-2</div>' +
                '                <div><a href="pages/누리관.html">안내 페이지</a></div>' +
                '                <div><a href="https://place.map.kakao.com/12721052" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }
        else if (i == 7) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            참빛관' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_15.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
                '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-1</div>' +
                '                <div><a href="pages/참빛관.html">안내 페이지</a></div>' +
                '                <div><a href="https://place.map.kakao.com/27202326" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }
        else if (i == 8) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            80주년기념관(도서관)' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_24.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
                '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-1</div>' +
                '                <div><a href="pages/80주년기념관.html">안내 페이지</a></div>' +
                '                <div><a href="https://place.map.kakao.com/823736351" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }
        else if (i == 9) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            복지관' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_06.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로 20</div>' +
                '                <div class="jibun ellipsis">(우) 01897 (지번) 월계동 447-41</div>' +
                '                <div><a href="pages/복지관.html">안내 페이지</a></div>' +
                '                <div><a href="https://place.map.kakao.com/17565051" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }
        else if (i == 10) {
            content = '<div class="ovr">' +
                '    <div class="info">' +
                '        <div class="title">' +
                '            빛솔재(기숙사)' +
                '            <div class="close" onclick="removeOverlay()" title="닫기"></div>' +
                '        </div>' +
                '        <div class="body">' +
                '            <div class="img">' +
                '                <img src="https://www.kw.ac.kr/ko/img/tour01_26.jpg" width="73" height="70">' +
                '           </div>' +
                '            <div class="desc">' +
                '                <div class="ellipsis">서울 노원구 광운로 21</div>' +
                '                <div class="jibun ellipsis">(우) 01890 (지번) 월계동 500-40</div>' +
                '                <div><a href="https://place.map.kakao.com/614748387" target="_blank" class="link">오시는 길</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        }
        (function (marker, place, content) {
            kakao.maps.event.addListener(marker, 'click', function () {
                displayPlaceInfo(place);



                customOverlay.setContent(content);
                customOverlay.setMap(map);
            });
        })(marker, kwpositions[i].latlng, content);



    }
}


// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
        displayPlaces(data);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요

    } else if (status === kakao.maps.services.Status.ERROR) {
        // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요

    }
}

// 지도에 마커를 표출하는 함수입니다
function displayPlaces(places) {

    for (var i = 0; i < places.length; i++) {

        // 마커를 생성하고 지도에 표시합니다
        var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x));
        var position = new kakao.maps.LatLng(places[i].y, places[i].x);
        // 마커와 검색결과 항목을 클릭 했을 때
        // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
        (function (marker, place) {
            kakao.maps.event.addListener(marker, 'click', function () {
                // 인포윈도우
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.setPosition(position);
                infowindow.open(map, marker);
            });
        })(marker, places[i]);

    }
}

function addMarker(position) {
    var marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
    });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker);  // 배열에 생성된 마커를 추가합니다

    return marker;
}

function removeMarker() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function updatecode(category) {
    currCategory = category;
    searchPlaces();
}

function removeOverlay() {
    customOverlay.setMap(null);
}

// 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
function displayPlaceInfo(place) {
    customOverlay.setPosition(place);
    customOverlay.setMap(map);
}
