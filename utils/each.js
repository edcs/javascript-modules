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

    let keys = Object.keys(props),
        numKeys = keys.length;

    for (let i = 0; i < numKeys; i++) {
        let key = keys[i],
            prop = props[key];

        if (callback(prop, key, props) === false) {
            break;
        }
    }
};

export default each;
