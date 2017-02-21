# DOM Module Loader

## Init

### With Module Loader

    import loadModules from '@edcs/js-toolkit/module-loader';
    import combineDomModules from '@edcs/js-toolkit/dom-module-loader';

    moduleLoader({
        domModules: combineDomModules({
            foo,
            bar
        })
    });

### Solo

    import combineDomModules from '@edcs/js-toolkit/dom-module-loader';

    combineDomModules({
        foo,
        bar
    }).init();

#### DOM modules:

- Export an `init` method
- Initialised by adding the imported module name to an element's `data-js-module` attribute.
- Multiple names can be added and are space-delimited.
- `init` is passed the element on which the module loader detected the `data-js-module` attribute.
- Can be initialised multiple times per page for different DOM modules.
- Can optionally export a `destroy` method, which is called on all active modules on subsequent `load`.
- Are destroyed between page transitions.

### Handling dynamic page transitions

    combineDomModules({
        foo,
        bar
    }).init();

    combineDomModules.refresh();
        