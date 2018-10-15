import r16 from './data/MGRS_100kmSQ_ID_16R.json'
import r17 from './data/MGRS_100kmSQ_ID_17R.json'

const usng = require('./libs/usng.js/dist/usng.js')
let map = null;
let polygons = [];

document.addEventListener("DOMContentLoaded", function() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 29.69722182370533, lng: -83.97016015625002}
  });

  let cellIds =
   ['16RFV', '16RGV', '17RKQ', '17RLQ',
    '16RFU', '16RGU', '17RKP', '17RLP',
    '16RFT', '16RGT', '17RKN', '17RLN',
    '16RFS', '16RGS', '17RKM', '17RLM'];

  const converter = new usng.Converter();

  cellIds.forEach(cellId => {
    const bbox = converter.USNGtoLL(cellId);

    const vertices = [
      {lat: bbox.north, lng: bbox.west},
      {lat: bbox.north, lng: bbox.east},
      {lat: bbox.south, lng: bbox.east},
      {lat: bbox.south, lng: bbox.west}
    ];

    const bounds = new google.maps.LatLngBounds();
    vertices.forEach(vertex => {
      bounds.extend(vertex);
    });

    new MapLabel({
      text: cellId,
      position: bounds.getCenter(),
      map: map
    })

    const polygon = new google.maps.Polygon({
      paths: vertices,
      map: map,
      fillOpacity: 0.1,
      fillColor: 'red'
    });
    polygons.push(polygon);
  });

  // mgrs grid reference, exported from shp
  map.data.setStyle({
    fillOpacity: 0.1,
    fillColor: 'green'
  })
  map.data.addGeoJson(r16);
  map.data.addGeoJson(r17);
});