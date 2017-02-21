/**
 * Returns true if the element contains the class.
 *
 * @param element
 * @param className
 * @returns {boolean}
 */
const hasClass = (element, className) => {
    let hasClass = true;

    nodesToArray(element).forEach((node) => {
        if (!node.classList.contains(className)) {
            hasClass = false;
        }
    });

    return hasClass;
};

export default hasClass;
