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

/*
    Export initialisation method
*/
export default function (callback) {
    if (!window.google || !window.google.maps) {
        let script = document.createElement('script');
        mapCallback = callback;

        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=false&callback=_initalizeGoogleMaps';
        
        document.body.appendChild(script);

    } else {
        callback();
    }
};