"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Finds the item next to the element.
 *
 * @param element
 * @returns {Element}
 */
var nextElement = function nextElement(element) {
  return element.nextElementSibling;
};

exports.default = nextElement;