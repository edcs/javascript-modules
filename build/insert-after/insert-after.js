'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Inserts the html after the element.
 *
 * @param element
 * @param html
 */
var insertAfter = function insertAfter(element, html) {
  element.insertAdjacentHTML('afterend', html);
};

exports.default = insertAfter;