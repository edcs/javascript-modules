/*
    DOM module handler, compatible with @pod-point/module-loader

    All modules export `init` methods.

    DOM modules:
        - Can be initialised multiple times per page.
        - Can optionally export a `destory` method.
        - Are destroyed between page transitions.
        - Initialised by adding the imported module name to an element's
            `data-js-module` attribute. Multiple names can be added and are
            space-delimited.
*/
import { select, nodesToArray } from '@pod-point/dom-ops';

const DATA_TAG = 'data-js-module';

var activeModules = [];
var domModules = {};
var definedDataTag = '';

function init() {
    var moduleElements = nodesToArray(select(`[${definedDataTag}]`));

    activeModules = [];

    if (moduleElements) {
        moduleElements.forEach(element => {
            let modulesToLoad = element.getAttribute(definedDataTag).split(' ');

            modulesToLoad.forEach(name => {
                let module = domModules[name];

                if (module && module.init) {
                    module.init(element);
                    activeModules.push(module);
                }
            });
        });
    }
}

function refresh() {
    activeModules.forEach((module) => {
        if (module.hasOwnProperty('destroy')) {
            module.destroy();
        }
    });

    init();
}

export default function (modules, dataTag = DATA_TAG) {
    domModules = modules;
    definedDataTag = dataTag;
    return { init, refresh }
}