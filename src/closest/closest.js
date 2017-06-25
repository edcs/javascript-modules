import matches from '../matches';
import parent from '../parent';

/**
 * Finds the closest item within the element.
 *
 * @param element
 * @param selector
 * @returns {*}
 */
const closest = (element, selector) => {
    let closestElement;
    let currentElement = element;

    while (!closestElement) {
        if (matches(currentElement, selector)) {
            closestElement = currentElement;
        }

        currentElement = parent(currentElement);

        if (!currentElement || currentElement === document) {
            break;
        }
    }

    return closestElement;
};

export default closest;
