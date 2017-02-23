"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Allows the callback to be fired only if it hasn't been called within the timeout limit.
 *
 * @param callback
 * @param timeout
 * @returns {Function}
 */
var whenCalm = function whenCalm(callback) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;

    var timer = void 0;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            callback();
        }, timeout);
    };
};

exports.default = whenCalm;