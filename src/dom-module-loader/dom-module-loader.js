import select from '../select';
import nodesToArray from '../nodes-to-array';

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

export default function (modules, dataTag = 'data-js-module') {
    domModules = modules;
    definedDataTag = dataTag;
    return { init, refresh }
}
