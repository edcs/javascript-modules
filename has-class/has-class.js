import nodesToArray from '../nodes-to-array';

/**
 * Returns true if the element contains the class.
 *
 * @param element
 * @param className
 * @returns {boolean}
 */
const hasClass = (element, className) => {
    let result = true;

    nodesToArray(element).forEach((node) => {
        if (!node.classList.contains(className)) {
            result = false;
        }
    });

    return result;
};

export default hasClass;
