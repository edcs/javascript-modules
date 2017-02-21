/**
 * Inserts the html at the start of the element.
 *
 * @param element
 * @param html
 */
const insertStart = (element, html) => {
    element.insertAdjacentHTML('afterbegin', html);
};

export default insertStart;
