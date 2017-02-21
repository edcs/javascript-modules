/**
 * Fires the callback function when the DOM is ready.
 *
 * @param callback
 */
const whenReady = (callback) => {
    if (document.readyState != 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
};

export default whenReady;
