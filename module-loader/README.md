# Module loader

The module loader is used for managing the lifecycle of JavaScript modules on traditional or dynamic-content websites.

## Init

    import loadModules from '@pod-point/module-loader';

    loadModules({
        dom: {},
        persistent: {}
    });

## Use

There are two types of module, `dom` and `persistent`. All modules export `init` methods.

#### DOM modules:
- Initialised by adding the imported module name to an element's `data-js-module` attribute.
- Multiple names can be added and are space-delimited.
- `init` is passed the element on which the module loader detected the `data-js-module` attribute.
- Can be initialised multiple times per page for different DOM modules.
- Can optionally export a `destroy` method, which is called on all active modules on subsequent `load`.
- Are destroyed between page transitions.

#### Persistent modules:
- Can be initialised once per page.
- Can optionally export a `refresh` method, which is called on all persistent modules on subsequent `load`.
- Are maintained between page transitions.

### Handling dynamic page transitions

    loadModules();

Rerunning `loadModules` (without arguments) will run through all active DOM modules, fire their `destory` method (if present) and drop reference to them. It will run through all active persistent modules and fire their `refresh` method (if present).
