"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns a clone of the element.
 *
 * @param element
 * @returns {Node}
 */
var clone = function clone(element) {
  return element.cloneNode(true);
};

exports.default = clone;