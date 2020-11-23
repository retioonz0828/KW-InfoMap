var sidewrap=document.createElement("div");
sidewrap.className="sidebar-wrapper";
document.body.appendChild(sidewrap);

var placesList = document.createElement("div");
placesList.id = "placesList";
sidewrap.appendChild(placesList);

var ps = new kakao.maps.services.Places(map);