'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Inserts the html at the end of the element.
 *
 * @param element
 * @param html
 */
var insertEnd = function insertEnd(element, html) {
  element.insertAdjacentHTML('beforeend', html);
};

exports.default = insertEnd;