'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodesToArray = require('../nodes-to-array');

var _nodesToArray2 = _interopRequireDefault(_nodesToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the element contains the class.
 *
 * @param element
 * @param className
 * @returns {boolean}
 */
var hasClass = function hasClass(element, className) {
    var result = true;

    (0, _nodesToArray2.default)(element).forEach(function (node) {
        if (!node.classList.contains(className)) {
            result = false;
        }
    });

    return result;
};

exports.default = hasClass;