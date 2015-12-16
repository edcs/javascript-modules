# Redux utils

## bindSelectors

### Bind state selectors to specific Redux store

```javascript
const selectors = bindSelectors(unboundSelectors, store.getState);
```

A selector is a function that takes a state, and returns a specific part of that state. Eg: 

```javascript
export const getLoggedInUser = state => state.loggedInUser;
```

`bindSelectors` is provided the `store.getState` function - the Redux state getter. So by binding the selectors to the state with `bindSelectors` we can run `getLoggedInUser()` without an explicit `state` argument.

## createSubscriber

### Create a subscriber that runs when the selected state changes

```javascript
const onStateChange = createSubscriber(store.subscribe);

onStateChange(boundSelector, (selectedState) => console.log("Current state is: ", selectedState));
```

`createSubscriber` takes the `store.subscribe` functions and returns a new function that can be provided with a subscriber bound to that `state` (see: `bindSelectors`) and a callback.

`callback` will run **only when the portion of the state returned by the selector changes**.

## bindComponentToState

### Binds Redux state to React Component state

```javascript
const store = createStore(reducers);

export default class ExampleApp extends Component {
    constructor() {
        super(props);
        bindComponentToState(this, store);
    }
}
```

`bindComponentToState` takes a reference to the highest-level React Component and a Redux store and creates a subscriber that updates the Component state when the store's state changes.
