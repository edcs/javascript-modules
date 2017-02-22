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
    let closest;

    while (!closest) {
        if (matches(element, selector)) {
            closest = element;
        }

        element = parent(element);

        if (!element || element === document) {
            break;
        }
    }

    return closest;
};

export default closest;
