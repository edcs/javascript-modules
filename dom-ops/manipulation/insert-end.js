/**
 * Inserts the html at the end of the element.
 *
 * @param element
 * @param html
 */
const insertEnd = (element, html) => {
    element.insertAdjacentHTML('beforeend', html);
};

export default insertEnd;
