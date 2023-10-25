const busStops = [
  [77.5231029881729,10.73828221665513],
  [77.44684327695782,10.849644108818076],
  [77.33095039184298,10.914118634586542],
  [ 77.28466788077685,10.995930845988696],
  [ 77.12861237062205,11.031052884109815]
  

];


// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';


// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [77.5231029881729,10.73828221665513],
  zoom: 12,
});


// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker= new mapboxgl.Marker()
            .setLngLat([77.5231029881729,10.73828221665513])
            .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(()=> {
    if (counter>=busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
    },1000);
}


// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}