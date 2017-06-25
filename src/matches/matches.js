/**
 * Returns the item which matches the selector in the element.
 *
 * @param element
 * @param selector
 * @returns {*}
 */
const matches = (element, selector) => (
    element.matches ||
    element.matchesSelector ||
    element.msMatchesSelector
).call(element, selector);

export default matches;
