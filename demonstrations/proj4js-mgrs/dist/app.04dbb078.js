parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"kAqR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.forward=h,exports.inverse=c,exports.toPoint=u;var t=6,e="AJSAJS",r="AFAFAF",a=65,n=73,o=79,i=86,s=90;function h(t,e){return e=e||5,g(M({lat:t[1],lon:t[0]}),e)}function c(t){var e=b(p(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat,e.lon,e.lat]:[e.left,e.bottom,e.right,e.top]}function u(t){var e=b(p(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat]:[(e.left+e.right)/2,(e.top+e.bottom)/2]}function f(t){return t*(Math.PI/180)}function l(t){return t/Math.PI*180}function M(t){var e,r,a,n,o,i,s=t.lat,h=t.lon,c=6378137,u=f(s),l=f(h);i=Math.floor((h+180)/6)+1,180===h&&(i=60),s>=56&&s<64&&h>=3&&h<12&&(i=32),s>=72&&s<84&&(h>=0&&h<9?i=31:h>=9&&h<21?i=33:h>=21&&h<33?i=35:h>=33&&h<42&&(i=37)),o=f(6*(i-1)-180+3),e=c/Math.sqrt(1-.00669438*Math.sin(u)*Math.sin(u)),r=Math.tan(u)*Math.tan(u),a=.006739496752268451*Math.cos(u)*Math.cos(u);var M=.9996*e*((n=Math.cos(u)*(l-o))+(1-r+a)*n*n*n/6+(5-18*r+r*r+72*a-.39089081163157013)*n*n*n*n*n/120)+5e5,b=.9996*(c*(.9983242984503243*u-.002514607064228144*Math.sin(2*u)+2639046602129982e-21*Math.sin(4*u)-3.418046101696858e-9*Math.sin(6*u))+e*Math.tan(u)*(n*n/2+(5-r+9*a+4*a*a)*n*n*n*n/24+(61-58*r+r*r+600*a-2.2240339282485886)*n*n*n*n*n*n/720));return s<0&&(b+=1e7),{northing:Math.trunc(b),easting:Math.trunc(M),zoneNumber:i,zoneLetter:v(s)}}function b(t){var e=t.northing,r=t.easting,a=t.zoneLetter,n=t.zoneNumber;if(n<0||n>60)return null;var o,i,s,h,c,u,f,M,v=6378137,g=(1-Math.sqrt(.99330562))/(1+Math.sqrt(.99330562)),d=r-5e5,k=e;a<"N"&&(k-=1e7),u=6*(n-1)-180+3,M=(f=k/.9996/6367449.145945056)+(3*g/2-27*g*g*g/32)*Math.sin(2*f)+(21*g*g/16-55*g*g*g*g/32)*Math.sin(4*f)+151*g*g*g/96*Math.sin(6*f),o=v/Math.sqrt(1-.00669438*Math.sin(M)*Math.sin(M)),i=Math.tan(M)*Math.tan(M),s=.006739496752268451*Math.cos(M)*Math.cos(M),h=.99330562*v/Math.pow(1-.00669438*Math.sin(M)*Math.sin(M),1.5),c=d/(.9996*o);var m=M-o*Math.tan(M)/h*(c*c/2-(5+3*i+10*s-4*s*s-.06065547077041606)*c*c*c*c/24+(61+90*i+298*s+45*i*i-1.6983531815716497-3*s*s)*c*c*c*c*c*c/720);m=l(m);var p,A=(c-(1+2*i+s)*c*c*c/6+(5-2*s+28*i-3*s*s+.05391597401814761+24*i*i)*c*c*c*c*c/120)/Math.cos(M);if(A=u+l(A),t.accuracy){var z=b({northing:t.northing+t.accuracy,easting:t.easting+t.accuracy,zoneLetter:t.zoneLetter,zoneNumber:t.zoneNumber});p={top:z.lat,right:z.lon,bottom:m,left:A}}else p={lat:m,lon:A};return p}function v(t){var e="Z";return 84>=t&&t>=72?e="X":72>t&&t>=64?e="W":64>t&&t>=56?e="V":56>t&&t>=48?e="U":48>t&&t>=40?e="T":40>t&&t>=32?e="S":32>t&&t>=24?e="R":24>t&&t>=16?e="Q":16>t&&t>=8?e="P":8>t&&t>=0?e="N":0>t&&t>=-8?e="M":-8>t&&t>=-16?e="L":-16>t&&t>=-24?e="K":-24>t&&t>=-32?e="J":-32>t&&t>=-40?e="H":-40>t&&t>=-48?e="G":-48>t&&t>=-56?e="F":-56>t&&t>=-64?e="E":-64>t&&t>=-72?e="D":-72>t&&t>=-80&&(e="C"),e}function g(t,e){var r="00000"+t.easting,a="00000"+t.northing;return t.zoneNumber+t.zoneLetter+d(t.easting,t.northing,t.zoneNumber)+r.substr(r.length-5,e)+a.substr(a.length-5,e)}function d(t,e,r){var a=k(r);return m(Math.floor(t/1e5),Math.floor(e/1e5)%20,a)}function k(e){var r=e%t;return 0===r&&(r=t),r}function m(t,h,c){var u=c-1,f=e.charCodeAt(u),l=r.charCodeAt(u),M=f+t-1,b=l+h,v=!1;return M>s&&(M=M-s+a-1,v=!0),(M===n||f<n&&M>n||(M>n||f<n)&&v)&&M++,(M===o||f<o&&M>o||(M>o||f<o)&&v)&&++M===n&&M++,M>s&&(M=M-s+a-1),b>i?(b=b-i+a-1,v=!0):v=!1,(b===n||l<n&&b>n||(b>n||l<n)&&v)&&b++,(b===o||l<o&&b>o||(b>o||l<o)&&v)&&++b===n&&b++,b>i&&(b=b-i+a-1),String.fromCharCode(M)+String.fromCharCode(b)}function p(t){if(t&&0===t.length)throw"MGRSPoint coverting from nothing";for(var e,r=t.length,a=null,n="",o=0;!/[A-Z]/.test(e=t.charAt(o));){if(o>=2)throw"MGRSPoint bad conversion from: "+t;n+=e,o++}var i=parseInt(n,10);if(0===o||o+3>r)throw"MGRSPoint bad conversion from: "+t;var s=t.charAt(o++);if(s<="A"||"B"===s||"Y"===s||s>="Z"||"I"===s||"O"===s)throw"MGRSPoint zone letter "+s+" not handled: "+t;a=t.substring(o,o+=2);for(var h=k(i),c=A(a.charAt(0),h),u=z(a.charAt(1),h);u<w(s);)u+=2e6;var f=r-o;if(f%2!=0)throw"MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters"+t;var l,M,b,v=f/2,g=0,d=0;return v>0&&(l=1e5/Math.pow(10,v),M=t.substring(o,o+v),g=parseFloat(M)*l,b=t.substring(o+v),d=parseFloat(b)*l),{easting:g+c,northing:d+u,zoneLetter:s,zoneNumber:i,accuracy:l}}function A(t,r){for(var i=e.charCodeAt(r-1),h=1e5,c=!1;i!==t.charCodeAt(0);){if(++i===n&&i++,i===o&&i++,i>s){if(c)throw"Bad character: "+t;i=a,c=!0}h+=1e5}return h}function z(t,e){if(t>"V")throw"MGRSPoint given invalid Northing "+t;for(var s=r.charCodeAt(e-1),h=0,c=!1;s!==t.charCodeAt(0);){if(++s===n&&s++,s===o&&s++,s>i){if(c)throw"Bad character: "+t;s=a,c=!0}h+=1e5}return h}function w(t){var e;switch(t){case"C":e=11e5;break;case"D":e=2e6;break;case"E":e=28e5;break;case"F":e=37e5;break;case"G":e=46e5;break;case"H":e=55e5;break;case"J":e=64e5;break;case"K":e=73e5;break;case"L":e=82e5;break;case"M":e=91e5;break;case"N":e=0;break;case"P":e=8e5;break;case"Q":e=17e5;break;case"R":e=26e5;break;case"S":e=35e5;break;case"T":e=44e5;break;case"U":e=53e5;break;case"V":e=62e5;break;case"W":e=7e6;break;case"X":e=79e5;break;default:e=-1}if(e>=0)return e;throw"Invalid zone letter: "+t}exports.default={forward:h,inverse:c,toPoint:u};
},{}],"A2T1":[function(require,module,exports) {
var e=require("mgrs");document.addEventListener("DOMContentLoaded",function(){document.getElementById("output").innerHTML="16RGU inverse: "+e.inverse("16RGU")});
},{"mgrs":"kAqR"}]},{},["A2T1"], null)
//# sourceMappingURL=https://gregsadetsky.github.io/mgrs-usng-js-libs-overlap/demonstrations/proj4js-mgrs/dist/app.04dbb078.map