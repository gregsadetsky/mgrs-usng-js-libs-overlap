## Goal

Demonstrate that JavaScript libraries which are supposed to convert MGRS / USNG grid to latitude longitude coordinates are returning incorrect bounds, specifically for 100km grid cells. The overlap happens at zone boundaries (16R - 17R, for example).

As one specific example, 16RGV and 17RKQ's boundaries returned by the libraries below tend to overlap.

See the reference grid [here](usng-grid-reference.jpg).

### Tested

https://github.com/proj4js/mgrs

Conclusion: does not return bounding box for 100km regions. Instead, returns same lat,lng twice

Demonstration: (done, TODO run parcel build and pass correct final url)

---

https://github.com/codice/usng.js

Conclusion: Overlap. Example: 16RGV & 16RKQ

Demonstration: [here](https://gregsadetsky.github.io/mgrs-usng-js-libs-overlap/demonstrations/codice-usng/dist/).
- Red (overlapping) cells are coming from `usng.js` calculations.
- Green cells are coming from the [reference 16R / 17R shapefiles](http://earth-info.nga.mil/GandG/coordsys/grids/mgrs_100km_dloads.html) from the NGA.

### TODO

https://github.com/beatgammit/node-coordinator

https://www.movable-type.co.uk/scripts/geodesy/docs/index.html
https://www.movable-type.co.uk/scripts/latlong-utm-mgrs.html

### Building

All of the directories under `demonstrations/` are built using [Parcel](https://parceljs.org/).

`parcel index.html` should start a local development server
