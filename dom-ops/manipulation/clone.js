/**
 * Returns a clone of the element.
 *
 * @param element
 * @returns {Node}
 */
const clone = (element) => {
    return element.cloneNode(true);
};

export default clone;
