'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.each = each;
exports.whenReady = whenReady;
exports.throttle = throttle;
exports.whenCalm = whenCalm;

function each(props, callback) {
    if (!props) {
        return;
    }

    var keys = Object.keys(props),
        numKeys = keys.length;

    for (var i = 0; i < numKeys; i++) {
        var key = keys[i],
            prop = props[key];

        if (callback(prop, key, props) === false) {
            break;
        }
    }
}

function whenReady(callback) {
    if (document.readyState != 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

function throttle(callback) {
    var limit = arguments.length <= 1 || arguments[1] === undefined ? 35 : arguments[1];

    var wait = false;

    return function () {
        if (!wait) {
            callback();
            wait = true;

            setTimeout(function () {
                wait = false;
            }, limit);
        }
    };
}

function whenCalm(callback) {
    var timeout = arguments.length <= 1 || arguments[1] === undefined ? 250 : arguments[1];

    var timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            callback();
        }, timeout);
    };
}