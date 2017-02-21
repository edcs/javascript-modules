/**
 * Prevents a function from being called within a timeout limit.
 *
 * @param callback
 * @param limit
 * @returns {Function}
 */
const throttle = (callback, limit = 35) => {
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
};

export default throttle;
