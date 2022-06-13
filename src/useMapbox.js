import { useLayoutEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";


export default function useMapbox(mapRef) {
  //const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmVpYmFjaHVyaW4iLCJhIjoiY2wzcjkwNGVjMGh3ZzNjcDdmOTV3YnlhaSJ9.LzhaJXZjkTn10--iuTAr2A";
  
  // container = 'map';
  // center = [37.61192, 55.76199];
  // zoom = 10;

  useLayoutEffect(() => {
    console.log(mapRef);
    const map = new mapboxgl.Map({
      container: mapRef.current.id,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [37.61192, 55.76199],
      zoom: 10
    })
  }, []);
}
