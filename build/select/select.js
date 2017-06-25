"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Attempts to select the item from the element (document by default). Returns null if the element
 * is not found.
 *
 * @param selector
 * @param root
 * @returns {*}
 */
var select = function select(selector) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  var selection = root.querySelectorAll(selector);

  return selection.length ? selection : null;
};

exports.default = select;