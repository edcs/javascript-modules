import { each } from '@pod-point/utils';

/**
 * Bind state selector functions with the `store.getState` function
 *
 * @param [object]: Selector functions
 * @param [function]: Get latest state
 * @return [object]: Selector functions bound to get latest state function
 */
export const bindSelectors = (selectors, getState) => {
    let boundSelectors = {};

    each(selectors, (selector, name) => {
        boundSelectors[name] = () => selector(getState());
    });

    return boundSelectors;
}

/**
 * Generate store subscription function
 *
 * @param [function]: Subscription function
 * @return [function]: Bound subscription function that fires callback when selection changes
 *      @param [function]: Bound selector function
 *      @param [function]: Callback to fire
 */
export const createSubscriber = (subscribe) => (selector, callback) => {
    let currentState = selector();

    subscribe(() => {
        const previousState = currentState;
        currentState = selector();

        if (currentState !== previousState) {
            callback(currentState);
        }
    });
}

/**
 * Bind Redux state to React component
 *
 * @param [React.Component]
 * @param [Redux store]
 */
export const bindComponentToState = (component, store) => {
    const subscribe = createSubscriber(store.subscribe);

    component.state = store.getState();
    subscribe(store.getState, (state) => {
        component.setState(state);
    })
};
