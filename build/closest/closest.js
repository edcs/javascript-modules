'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _matches = require('../matches');

var _matches2 = _interopRequireDefault(_matches);

var _parent = require('../parent');

var _parent2 = _interopRequireDefault(_parent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Finds the closest item within the element.
 *
 * @param element
 * @param selector
 * @returns {*}
 */
var closest = function closest(element, selector) {
    var closestElement = void 0;
    var currentElement = element;

    while (!closestElement) {
        if ((0, _matches2.default)(currentElement, selector)) {
            closestElement = currentElement;
        }

        currentElement = (0, _parent2.default)(currentElement);

        if (!currentElement || currentElement === document) {
            break;
        }
    }

    return closestElement;
};

exports.default = closest;