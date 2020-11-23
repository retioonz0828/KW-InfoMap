//지도를 띄울 div생성.
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

//학교 마커, 커스텀 오버레이 출력
function kwplace(kwpositions) {
    
    menuEl = document.getElementById('sidebar-wrapper');
    listStr = '';
    var listEl = document.getElementById('placesList'); 

    listEl.innerHTML = '';

    for (var i = 0; i < kwpositions.length; i++) {
        var marker = addMarker(kwpositions[i].latlng);
        var content=kwcontent[i].con;
        itemEl =kwSidebar(i);
        //마커 클릭 함수
        (function (marker, place, content) {
            kakao.maps.event.addListener(marker, 'click', function () {
                displayPlaceInfo(place);

                //마커 클릭시 커스텀 오버레이 출력
                customOverlay.setContent(content);
                customOverlay.setMap(map);
            });
            
            //사이드바 클릭
            itemEl.onclick=function () {
                displayPlaceInfo(place);
                customOverlay.setContent(content);
            };
        })(marker, kwpositions[i].latlng, content);
        listEl.appendChild(itemEl);
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

    menuEl = document.getElementById('sidebar-wrapper');
    listStr = '';
    var listEl = document.getElementById('placesList');

    listEl.innerHTML = '';
    for ( var i=0; i<places.length; i++ ) {

        // 마커를 생성하고 지도에 표시합니다
        var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x));
        itemEl = getListItem(i, places[i]);
        
        // 마커와 검색결과 항목을 클릭 했을 때
        // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div class="infowin">' + place.place_name+'</div>');
            infowindow.open(map, marker);
        });
        (function(marker, title) {
            kakao.maps.event.addListener(marker, 'mouseover', function() {
                displayInfowindow(marker, title);
            });
    
            kakao.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });
    
            itemEl.onmouseover =  function () {
                displayInfowindow(marker, title);
            };
    
            itemEl.onmouseout =  function () {
                infowindow.close();
            };
            // itemEl.onclick=function () {
            //     displayInfowindow(marker, title);
                
            // };
            
        })(marker, places[i].place_name);
    listEl.appendChild(itemEl);// 여기서 

    }
}

//마우스 오버함수
function displayInfowindow(marker, title) {
    infowindow.setContent('<div class="infowin">' + title+'</div>');
    infowindow.open(map, marker);
}

//마커 출력
function addMarker(position) {
    var marker = new kakao.maps.Marker({
        position: position // 마커의 위치
    });

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker);  // 배열에 생성된 마커를 추가합니다

    return marker;
}

//마커 삭제
function removeMarker() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

//code 변경
function updatecode(category) {
    currCategory = category;
    searchPlaces();
}

//커스텀 오버레이 삭제
function removeOverlay() {
    customOverlay.setMap(null);
}


// 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
function displayPlaceInfo(place) {
    customOverlay.setPosition(place);
    customOverlay.setMap(map);
}

//사이드바 구현
function getListItem(index, places) {

    var el = document.createElement('div'),
    itemStr = '<span' + (index+1) + '"></span>' +
                '<div class="infosidebar">' +
                '   <h3>' +'이름: '+ places.place_name + '</h3>';

    if (places.address_name) {
        itemStr += 
                '<span>' + '주소: '+ places.address_name  + '</span>'+'<br>';
    } else {
        
    }
    if(currCategory=='BK9'){
      itemStr += '<span>' + '번호: '+  places.phone  + '</span>'+'<br>' 
                +'</div>';
    }else{
        itemStr += '<span>' + '번호: '+  places.phone  + '</span>'+'<br>' +
                '<span style="font-size=5px;">' +  places.category_name  + '</span>'+'<br>'
                '</div>';
    }
    el.innerHTML = itemStr;
    el.className = 'item';

    return el;
}

//학교 사이드바 구현
function kwSidebar(innum) {

    var el = document.createElement('div');
    
    el.innerHTML = kwside[innum].scon;
    el.className = 'item';

    return el;
}