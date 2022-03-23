import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpdDE0IiwiYSI6ImNsMDd1ZmQ1cDA1czczamxmeWNxYWFwOHIifQ.LuqfdsSH3xezh8VVcDcptQ";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }
    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if ((props.pickupCoordinates, props.dropoffCoordinates)) {
      map.fitBounds([props.pickupCoordinates, props.dropoffCoordinates], {
        padding: 80,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
    flex-1 h-1/2
`;
