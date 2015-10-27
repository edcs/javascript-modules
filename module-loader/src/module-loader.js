/*
    Module system

    All modules export `init` methods.

    Persistent modules:
        - Can be initialised once per page.
        - Can optionally export a `refresh` method.
        - Are maintained between page transitions.
*/

// Other imports
import { each } from '@pod-point/utils';

var pageActive = false;
var modules = {};

function init(newModules) {
    modules = newModules;

    each(modules, (module) => {
        if (module.init) {
            module.init();
        }
    });

    pageActive = true;
}

function reload() {
    each(persistentModules, (module) => {
        if (module.hasOwnProperty('refresh')) {
            module.refresh();
        }
    });
}

export default function(newModules) {
    if (pageActive) {
        reload();
    } else {
        init(newModules);
    }
}
