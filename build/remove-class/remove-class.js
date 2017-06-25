'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodesToArray = require('../nodes-to-array');

var _nodesToArray2 = _interopRequireDefault(_nodesToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes the class from the element.
 *
 * @param element
 * @param className
 */
var removeClass = function removeClass(element, className) {
  (0, _nodesToArray2.default)(element).forEach(function (node) {
    return node.classList.remove(className);
  });
};

exports.default = removeClass;