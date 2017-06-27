import nodesToArray from '../nodes-to-array/nodes-to-array';

/**
 * Removes a class from one or multiple elements.
 *
 * @param element
 * @param className
 */
const removeClass = (element, className) => {
    nodesToArray(element).forEach(node => node.classList.remove(className));
};

export default removeClass;
