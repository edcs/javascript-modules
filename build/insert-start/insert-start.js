'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Inserts the html at the start of the element.
 *
 * @param element
 * @param html
 */
var insertStart = function insertStart(element, html) {
  element.insertAdjacentHTML('afterbegin', html);
};

exports.default = insertStart;