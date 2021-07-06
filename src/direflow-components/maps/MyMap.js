import React, { useEffect } from 'react';

const MyMap = ({ mapSdkKey, coords, handleClick, multipleMarkers, radius }) => {
    let map;
    let marker;
    let currentDiameter;
    let L = window.L;
    let markers = [];
    let latitudeArr = [];
    let longitudeArr = [];

    useEffect(() => {
        if (window.MapmyIndia) {
            const mapElement = document.getElementById('myMap');
            if (mapElement) mapElement.innerHTML = '';
            mapElement.innerHTML = '<div id="map"></div>';
            initMap();
            if (multipleMarkers && multipleMarkers.length) {
                markMultipleMarkers();
            }
        }
    }, [mapSdkKey, coords, radius, multipleMarkers])


    const initMap = () => {
        map = new window.MapmyIndia.Map('map', {
            center: [coords.lat, coords.lng], zoomControl: true, zoom: 8, /* zoom level 4 to 19*/
            hybrid: false
        });
        var icon = L.divIcon({
            className: 'as-marker-container',
            html: "<img class='map_marker map_marker_ur_here'  src=" + "'https://storage.googleapis.com/ihxcheck-public-content/u_r_here.png'>",
            iconSize: [10, 10],
            popupAnchor: [12, -10]
        });
        marker = L.marker([coords.lat, coords.lng], { icon: icon, draggable: true, title: 'title' }).addTo(map);
        marker.on('click', (e) => {
            marker.bindPopup(coords.title ? coords.title : 'You are here!').openPopup()
        })
        map.on('click', (e) => {
            var title = "Map my india markers!";

            // markers.push(addMarker(e.coords, '', title, true));
        })
        showCircle(radius)
    }

    const markMultipleMarkers = () => {
        onMarkerRemove()
        multipleMarkers.forEach((x) => {
            latitudeArr.push(+x.latitude);
            longitudeArr.push(+x.longitude);
            const position = new L.LatLng(+x.latitude, +x.longitude); /*WGS location object*/
            markers.push(addMarker(position, `${x.name}, ${x.address}`));
        })
        fitMarkersIntoBound();
        map.setZoom(13)
    }

    const onMarkerRemove = () => {
        var markerlength = markers.length;
        if (markerlength > 0) {
            for (var i = 0; i < markerlength; i++) {
                map.removeLayer(markers[i]); /* deletion of marker object from the map */
            }
        }
    }

    function addMarker(position, title, draggable) {
        var icon = L.divIcon({
            className: 'as-marker-container',
            html: "<img class='map_marker'  src=" + "'https://maps.mapmyindia.com/images/6.png'>" + '<span class="my-div-span">' + 'H' + '</span>',
            iconSize: [10, 10],
            popupAnchor: [12, -10]
        });
        var mk = new L.Marker(position, { icon, draggable: draggable, title: title });
        mk.bindPopup(title);
        map.addLayer(mk);
        mk.on('click', (e) => {
            handleClick({ type: 'mapData', value: e.latlng })
            // console.log('clicked data', e.latlng);
        })
        return mk;
    }

    const fitMarkersIntoBound = () => {
        if ((latitudeArr && latitudeArr.length) && (longitudeArr && longitudeArr.length)) {
            const maxlat = Math.max.apply(null, latitudeArr);
            const maxlon = Math.max.apply(null, longitudeArr);
            const minlat = Math.min.apply(null, latitudeArr);
            const minlon = Math.min.apply(null, longitudeArr);
            const southWest = L.latLng(maxlat, maxlon); /*south-west WGS location object*/
            const northEast = L.latLng(minlat, minlon); /*north-east WGS location object*/
            const bounds = L.latLngBounds(southWest, northEast); /*This class represents bounds on the Earth sphere, defined by south-west and north-east corners*/
            map.fitBounds(bounds);
            // map.panTo(coords)
            map.setZoom(13)
        }/*Sets the center map position and level so that all markers is the area of the map that is displayed in the map area*/
    }

    const showCircle = (radius) => {
        const { lat, lng } = coords;
        if (currentDiameter) {
            map.removeLayer(currentDiameter);
        }
        currentDiameter = L.circle([lat, lng],
            {
                color: 'pink',
                fillColor: '#FFC0CB',
                fillOpacity: 0.5,
                radius: radius
            });

        currentDiameter.addTo(map);
        map.fitBounds(currentDiameter.getBounds());
    }

    return (
        <div id="myMap">
            <div id="map"></div>
        </div>
    )
}

export default MyMap;