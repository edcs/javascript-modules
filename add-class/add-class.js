import nodesToArray from '../nodes-to-array/nodes-to-array';

/**
 * Adds the class to the element.
 *
 * @param element
 * @param className
 */
const addClass = (element, className) => {
    nodesToArray(element).forEach(node => node.classList.add(className));
};

export default addClass;
