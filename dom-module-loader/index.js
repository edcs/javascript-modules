import { select, nodesToArray } from '../dom-ops';

const DATA_TAG = 'data-js-module';

let activeModules = [];
let domModules = {};
let definedDataTag = '';

function init() {
    let moduleElements = nodesToArray(select(`[${definedDataTag}]`));

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