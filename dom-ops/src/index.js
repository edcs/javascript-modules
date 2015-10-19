export function nodesToArray(nodes) {
    return nodes.length ? [].slice.call(nodes) : [nodes];
}

export function select(selector, root = document) {
    var elements = root.querySelectorAll(selector);

    return elements.length ? nodesToArray(elements) : false;
}

export function addClass(element, className) {
    nodesToArray(element).forEach((node) => node.classList.add(className));
}

export function removeClass(element, className) {
    nodesToArray(element).forEach((node) => node.classList.remove(className));
}

export function hasClass(element, className) {
    var hasClass = true;
    nodesToArray(element).forEach((node) => {
        if (!node.classList.contains(className)) {
            hasClass = false;
        }
    });
    return hasClass;
}

export function nextElement(element) {
    return element.nextElementSibling;
}

export function parent(element) {
    return element.parentNode;
}

export function child(element, selector) {
    return element.querySelectorAll(selector);
}

export function empty(element) {
    nodesToArray(element).forEach((node) => {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    });
}

export function appendChild(host, element) {
    host.appendChild(element);
}

export function removeChild(host, element) {
    host.removeChild(element);
}