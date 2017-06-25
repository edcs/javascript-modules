/**
 * Finds an item by a selector in the element.
 *
 * @param element
 * @param selector
 * @returns {NodeList}
 */
const child = (element, selector) => element.querySelectorAll(selector);

export default child;
