'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a new DOM element.
 *
 * @param tag
 * @returns {Element}
 */
var create = function create() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  return document.createElement(tag);
};

exports.default = create;