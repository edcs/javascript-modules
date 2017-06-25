/**
 * Selects the first item from the element (document by default). Returns null if the element
 * is not found.
 *
 * @param selector
 * @param root
 * @returns {Element}
 */
const selectFirst = (selector, root = document) => root.querySelector(selector);

export default selectFirst;
