import '../helpers/nodes-to-array';

/**
 * Removes all children from the element.
 *
 * @param element
 */
const empty = (element) => {
    nodesToArray(element).forEach((node) => {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    });
};

export default empty;
