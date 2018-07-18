function startMap(id){
    let map = new window.google.maps.Map(document.getElementById(id), {
        center: { lat: 38.8688, lng: -27.2195 },
        zoom: 13,
        mapTypeId: 'roadmap',
    });

    let marker = new window.google.maps.Marker({
        position: {lat: 38.8688, lng: -27.2195},
        map: map,
        title: "Test",
        draggable:true

      });

      

};



module.exports = {startMap};
