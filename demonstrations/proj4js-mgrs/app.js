const mgrs = require('mgrs');

document.addEventListener("DOMContentLoaded", function() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 30.121, lng: -85.706}
  });

  console.log("16RGU", mgrs.inverse('16RGU'))
});