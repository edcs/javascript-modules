"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Selects an element by it's id.
 *
 * @param id
 * @returns {Element}
 */
var selectById = function selectById(id) {
  return document.getElementById(id);
};

exports.default = selectById;