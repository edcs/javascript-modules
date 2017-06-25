"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Converts a node list to an array.
 *
 * @param nodes
 * @returns {*}
 */
var nodesToArray = function nodesToArray(nodes) {
    if (!nodes || nodes.length === 0) {
        return false;
    }

    return nodes.length ? [].slice.call(nodes) : [nodes];
};

exports.default = nodesToArray;