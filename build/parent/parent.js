"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Finds the parent of the supplied element.
 *
 * @param element
 * @returns {*|Node}
 */
var parent = function parent(element) {
  return element.parentNode;
};

exports.default = parent;