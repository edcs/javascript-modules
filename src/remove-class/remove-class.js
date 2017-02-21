/**
 * Removes the class from the element.
 *
 * @param element
 * @param className
 */
const removeClass = (element, className) => {
    nodesToArray(element).forEach((node) => node.classList.remove(className));
};

export default removeClass;
