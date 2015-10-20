/*
    Module system

    All modules export `init` methods.

    DOM modules:
        - Can be initialised multiple times per page.
        - Can optionally export a `destory` method.
        - Are destroyed between page transitions.
        - Initialised by adding the imported module name to an element's
            `data-js-module` attribute. Multiple names can be added and are
            space-delimited.

    Persistent modules:
        - Can be initialised once per page.
        - Can optionally export a `refresh` method.
        - Are maintained between page transitions.
*/

// Other imports
import { select } from '@pod-point/dom-ops';
import { each } from '@pod-point/utils';

const DATA_TAG = 'data-js-module';

var pageActive = false;

var activeDOMModules = [];

var persistentModules;
var domModules;

function loadDOMModules() {
    var elementsWithModules = nodesToArray(select(`[${DATA_TAG}]`));

    activeDOMModules = [];

    if (elementsWithModules) {
        elementsWithModules.forEach((element) => {
            let modulesToLoad = element.getAttribute(DATA_TAG).split(' ');

            modulesToLoad.forEach((name) => {
                let module = domModules[name];

                if (module && module.init) {
                    module.init(element);
                    activeDOMModules.push(module);
                }
            });
        });
    }
}

function init(dom, persistent) {
    domModules = dom;
    persistentModules = persistent;

    each(persistentModules, (module) => {
        if (module.init) {
            module.init();
        }
    });

    loadDOMModules();

    pageActive = true;
}

function reload() {
    each(persistentModules, (module) => {
        if (module.hasOwnProperty('refresh')) {
            module.refresh();
        }
    });

    activeDOMModules.forEach((module) => {
        if (module.hasOwnProperty('destroy')) {
            module.destroy();
        }
    });

    loadDOMModules();
}

export default function(modules) {
    if (pageActive) {
        reload();
    } else {
        init(modules.dom, modules.persistent);
    }
}
