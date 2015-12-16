'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindComponentToState = exports.createSubscriber = exports.bindSelectors = undefined;

var _utils = require('@pod-point/utils');

/**
 * Bind state selector functions with the `store.getState` function
 *
 * @param [object]: Selector functions
 * @param [function]: Get latest state
 * @return [object]: Selector functions bound to get latest state function
 */
var bindSelectors = exports.bindSelectors = function bindSelectors(selectors, getState) {
    var boundSelectors = {};

    (0, _utils.each)(selectors, function (selector, name) {
        boundSelectors[name] = function () {
            return selector(getState());
        };
    });

    return boundSelectors;
};

/**
 * Generate store subscription function
 *
 * @param [function]: Subscription function
 * @return [function]: Bound subscription function that fires callback when selection changes
 *      @param [function]: Bound selector function
 *      @param [function]: Callback to fire
 */
var createSubscriber = exports.createSubscriber = function createSubscriber(subscribe) {
    return function (selector, callback) {
        var currentState = selector();

        subscribe(function () {
            var previousState = currentState;
            currentState = selector();

            if (currentState !== previousState) {
                callback(currentState);
            }
        });
    };
};

/**
 * Bind Redux state to React component
 *
 * @param [React.Component]
 * @param [Redux store]
 */
var bindComponentToState = exports.bindComponentToState = function bindComponentToState(component, store) {
    var subscribe = createSubscriber(store.subscribe);

    component.state = store.getState();
    subscribe(store.getState, function (state) {
        component.setState(state);
    });
};