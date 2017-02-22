/**
 * Iterates over the props.
 *
 * @param props
 * @param callback
 */
const each = (props, callback) => {
    if (!props) {
        return;
    }

    const keys = Object.keys(props);
    const numKeys = keys.length;

    for (let i = 0; i < numKeys; i++) {
        const key = keys[i];
        const prop = props[key];

        if (callback(prop, key, props) === false) {
            break;
        }
    }
};

export default each;
