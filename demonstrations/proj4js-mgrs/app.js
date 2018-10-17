const mgrs = require('mgrs');

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('output').innerHTML = `16RGU inverse: ${mgrs.inverse('16RGU')}`
});