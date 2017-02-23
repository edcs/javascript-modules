"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Selects the first item from the element (document by default). Returns null if the element
 * is not found.
 *
 * @param selector
 * @param root
 * @returns {Element}
 */
var selectFirst = function selectFirst(selector) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return root.querySelector(selector);
};

exports.default = selectFirst;