import { each } from '@pod-point/utils';

let pageActive = false;
let modules = {};

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
    each(modules, (module) => {
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
