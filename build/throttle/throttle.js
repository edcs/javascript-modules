"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Prevents a function from being called within a timeout limit.
 *
 * @param callback
 * @param limit
 * @returns {Function}
 */
var throttle = function throttle(callback) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 35;

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
};

exports.default = throttle;