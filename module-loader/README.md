# Module loader

The module loader is used for managing the lifecycle of JavaScript modules on traditional or dynamic-content websites.

## Init

    import loadModules from '@pod-point/module-loader';

    loadModules({
        foo,
        bar
    });

## Use

#### Modules:
- Export `init` methods.
- Can optionally export a `refresh` method, which is called on all persistent modules on subsequent `load`.
- Can be initialised once per page.
- Are maintained between page transitions.

### Handling dynamic page transitions

    loadModules();

Rerunning `loadModules` (without arguments) will run through all active persistent modules and fire their `refresh` method (if present).
