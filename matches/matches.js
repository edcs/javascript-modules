/**
 * Returns true if element matches selector.
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
