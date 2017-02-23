'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Fires the callback function when the DOM is ready.
 *
 * @param callback
 */
var whenReady = function whenReady(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
};

exports.default = whenReady;