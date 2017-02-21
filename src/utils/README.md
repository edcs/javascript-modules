# Common utilities

## Import

    import { functionName } from '@pod-point/utils';

## Functions

### each

    each(object, callback);

Performant object iteration. `callback` is provided `(value, key, object)`:

    each(object, (value) => console.log(value));

### throttle

    throttle(callback, limit = 35);

Prevent a function from firing more than once every `limit` milliseconds. `limit` defaults to `35` for roughly 30 frames per second.

### whenCalm
    
    whenCalm(callback, timeout = 250);

Fires a function **only** when it hasn't been requested for `timeout` milliseconds.