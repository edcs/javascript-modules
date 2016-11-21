'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (callback) {
    if (!window.google || !window.google.maps) {
        var script = document.createElement('script');
        mapCallback = callback;

        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_MAPS_KEY + '&callback=_initalizeGoogleMaps';

        document.body.appendChild(script);
    } else {
        callback();
    }
};

/*
    Google Maps Async loader
    ====================================================
*/

/*
    State
*/
var mapCallback = function mapCallback() {}; // [function] Callback to run when maps load

/*
    Initialize Google Maps

    Has to be loaded as a global variable (boooo!) as we pass
    through the function name as a string parameter to Google
*/
window._initalizeGoogleMaps = function () {
    mapCallback();
};

var GOOGLE_MAPS_KEY = 'AIzaSyBO50t7QR4sgaLwfO3XPEYSQea4scuDjdc';

/*
    Export initialisation method
*/
;