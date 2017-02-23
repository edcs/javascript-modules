"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Finds an item by a selector in the element.
 *
 * @param element
 * @param selector
 * @returns {NodeList}
 */
var child = function child(element, selector) {
  return element.querySelectorAll(selector);
};

exports.default = child;