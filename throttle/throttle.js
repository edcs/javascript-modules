/**
 * Prevents a function from being called within a timeout limit.
 *
 * @param callback
 * @param limit
 * @returns {Function}
 */
const throttle = (callback, limit = 35) => {
    let wait = false;

    return () => {
        if (wait === false) {
            callback();
            wait = true;

            setTimeout(() => {
                wait = false;
            }, limit);
        }
    };
};

export default throttle;
