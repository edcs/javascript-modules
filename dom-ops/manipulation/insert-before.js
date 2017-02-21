/**
 * Inserts the html before the element.
 *
 * @param element
 * @param html
 */
const insertBefore = (element, html) => {
    element.insertAdjacentHTML('beforebegin', html);
};

export default insertBefore;
