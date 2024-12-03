"use client";

import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Home = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoidHByYXQiLCJhIjoiY20xdnppNTRvMGVtZzJqczVuZHJmMHprMSJ9.4_Uzdt99VpX6ZtQhsreI-w";
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <>
      <div id="map-container" className="w-full h-screen" ref={mapContainerRef} />
    </>
  );
};

export default Home;
