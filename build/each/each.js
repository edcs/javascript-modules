"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterates over the props.
 *
 * @param props
 * @param callback
 */
var each = function each(props, callback) {
    if (!props) {
        return;
    }

    var keys = (0, _keys2.default)(props);
    var numKeys = keys.length;

    for (var i = 0; i < numKeys; i++) {
        var key = keys[i];
        var prop = props[key];

        if (callback(prop, key, props) === false) {
            break;
        }
    }
};

exports.default = each;