'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Inserts the html before the element.
 *
 * @param element
 * @param html
 */
var insertBefore = function insertBefore(element, html) {
  element.insertAdjacentHTML('beforebegin', html);
};

exports.default = insertBefore;