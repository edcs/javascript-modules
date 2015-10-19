"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nodesToArray = nodesToArray;
exports.select = select;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.hasClass = hasClass;
exports.nextElement = nextElement;
exports.parent = parent;
exports.child = child;
exports.empty = empty;
exports.appendChild = appendChild;
exports.removeChild = removeChild;

function nodesToArray(nodes) {
    return nodes.length ? [].slice.call(nodes) : [nodes];
}

function select(selector) {
    var root = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

    var elements = root.querySelectorAll(selector);

    return elements.length ? nodesToArray(elements) : false;
}

function addClass(element, className) {
    nodesToArray(element).forEach(function (node) {
        return node.classList.add(className);
    });
}

function removeClass(element, className) {
    nodesToArray(element).forEach(function (node) {
        return node.classList.remove(className);
    });
}

function hasClass(element, className) {
    var hasClass = true;
    nodesToArray(element).forEach(function (node) {
        if (!node.classList.contains(className)) {
            hasClass = false;
        }
    });
    return hasClass;
}

function nextElement(element) {
    return element.nextElementSibling;
}

function parent(element) {
    return element.parentNode;
}

function child(element, selector) {
    return element.querySelectorAll(selector);
}

function empty(element) {
    nodesToArray(element).forEach(function (node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    });
}

function appendChild(host, element) {
    host.appendChild(element);
}

function removeChild(host, element) {
    host.removeChild(element);
}