/**
 * Attempts to select the item from the element (document by default). Returns null if the element
 * is not found.
 *
 * @param selector
 * @param root
 * @returns {*}
 */
const select = (selector, root = document) => {
    const selection = root.querySelectorAll(selector);

    return selection.length ? selection : null;
};

export default select;
