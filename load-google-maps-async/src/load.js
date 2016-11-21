/*
    Google Maps Async loader
    ====================================================
*/

/*
    State
*/
let mapCallback = function () {}; // [function] Callback to run when maps load

/*
    Initialize Google Maps

    Has to be loaded as a global variable (boooo!) as we pass
    through the function name as a string parameter to Google
*/
window._initalizeGoogleMaps = function () {
    mapCallback();
};

const GOOGLE_MAPS_KEY = 'AIzaSyBO50t7QR4sgaLwfO3XPEYSQea4scuDjdc';

/*
    Export initialisation method
*/
export default function (callback) {
    if (!window.google || !window.google.maps) {
        let script = document.createElement('script');
        mapCallback = callback;

        script.type = 'text/javascript';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&callback=_initalizeGoogleMaps`;

        document.body.appendChild(script);

    } else {
        callback();
    }
};
