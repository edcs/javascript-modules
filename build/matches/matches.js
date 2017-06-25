"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns the item which matches the selector in the element.
 *
 * @param element
 * @param selector
 * @returns {*}
 */
var matches = function matches(element, selector) {
  return (element.matches || element.matchesSelector || element.msMatchesSelector).call(element, selector);
};

exports.default = matches;