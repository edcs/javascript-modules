'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodesToArray = require('../nodes-to-array');

var _nodesToArray2 = _interopRequireDefault(_nodesToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all children from the element.
 *
 * @param element
 */
var empty = function empty(element) {
    (0, _nodesToArray2.default)(element).forEach(function (node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    });
};

exports.default = empty;