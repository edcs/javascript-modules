/**
 * Creates a new DOM element.
 *
 * @param tag
 * @returns {Element}
 */
const create = (tag = 'div') => {
    return document.createElement(tag);
};

export default create;
