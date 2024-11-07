<script setup></script>

<template>
  <MapboxMap
    map-id="{ID}"
    class="h-screen"
    :options="{
      style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
      center: [0.675957, 42.69082], // starting position [lng, lat]
      zoom: 8, // starting zoom
    }"
  >
  </MapboxMap>
</template>
