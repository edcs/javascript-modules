/**
 * Allows the callback to be fired only if it hasn't been called within the timeout limit.
 *
 * @param callback
 * @param timeout
 * @returns {Function}
 */
const whenCalm = (callback, timeout = 250) => {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback();
        }, timeout);
    }
};

export default whenCalm;
