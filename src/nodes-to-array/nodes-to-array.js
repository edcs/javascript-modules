/**
 * Converts a node list to an array.
 *
 * @param nodes
 * @returns {*}
 */
const nodesToArray = (nodes) => {
    if (!nodes || nodes.length === 0) {
        return false;
    }

    return nodes.length ? [].slice.call(nodes) : [nodes];
};

export default nodesToArray;
