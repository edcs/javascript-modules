/**
 * Inserts the html after the element.
 *
 * @param element
 * @param html
 */
const insertAfter = (element, html) => {
    element.insertAdjacentHTML('afterend', html);
};

export default insertAfter;
