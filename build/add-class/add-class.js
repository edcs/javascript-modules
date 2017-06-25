'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodesToArray = require('../nodes-to-array');

var _nodesToArray2 = _interopRequireDefault(_nodesToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adds the class to the element.
 *
 * @param element
 * @param className
 */
var addClass = function addClass(element, className) {
  (0, _nodesToArray2.default)(element).forEach(function (node) {
    return node.classList.add(className);
  });
};

exports.default = addClass;