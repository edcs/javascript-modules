/**
 * Loops over an iterable object.
 *
 * @param {Object} iterable
 * @param {Function} callback
 */
const each = (iterable, callback) => {
    if (!iterable) {
        return;
    }

    const keys = Object.keys(iterable);
    const numKeys = keys.length;

    for (let i = 0; i < numKeys; i++) {
        const key = keys[i];
        const item = iterable[key];

        if (callback(item, key, iterable) === false) {
            break;
        }
    }
};

export default each;
