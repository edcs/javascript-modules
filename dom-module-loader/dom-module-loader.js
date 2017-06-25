import select from '../select/select';
import nodesToArray from '../nodes-to-array/nodes-to-array';

let domModules = {};
let activeModules = [];
let definedDataTag = '';

const init = () => {
    const moduleElements = nodesToArray(select(`[${definedDataTag}]`));

    activeModules = [];

    if (moduleElements) {
        moduleElements.forEach((element) => {
            const modulesToLoad = element.getAttribute(definedDataTag).split(' ');

            modulesToLoad.forEach((name) => {
                const module = domModules[name];

                if (module && module.init) {
                    module.init(element);
                    activeModules.push(module);
                }
            });
        });
    }
};

const refresh = () => {
    activeModules.forEach((module) => {
        if (module.hasOwnProperty('destroy')) {
            module.destroy();
        }
    });

    init();
};

export default (modules, dataTag = 'data-js-module') => {
    domModules = modules;
    definedDataTag = dataTag;
    return { init, refresh };
};
