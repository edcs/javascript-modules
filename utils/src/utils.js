export function each(props, callback) {
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
}

export function throttle(callback, limit = 35) {
    let wait = false;

    return function () {
        if (!wait) {
            callback();
            wait = true;

            setTimeout(function () {
                wait = false;
            }, limit);
        }
    }
}

export function whenCalm(callback, timeout = 250) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback();
        }, timeout);
    }
}