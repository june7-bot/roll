/*global kakao*/
import React, { Component } from 'react'

export default class MapContent extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=5331cd0c560f2e3dec363ad25179d252&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          center: new kakao.maps.LatLng(37.509439, 126.887783),
          level: 3
        };

        const map = new kakao.maps.Map(container, options);
        const markerPosition  = new kakao.maps.LatLng(37.509439, 126.887783);
	    	const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);
     
      });
    };
  }

  render() {
  
         return <div style = {{ width: '500px' , height: '400px'  }} id="Mymap"/>


  }
}
