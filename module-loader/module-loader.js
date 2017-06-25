import each from '../each/each';

let modules = {};
let pageActive = false;

const init = (newModules) => {
    modules = newModules;

    each(modules, (module) => {
        if (module.init) {
            module.init();
        }
    });

    pageActive = true;
};

const reload = () => {
    each(modules, (module) => {
        if (module.hasOwnProperty('refresh')) {
            module.refresh();
        }
    });
};

export default (newModules) => {
    if (pageActive) {
        reload();
    } else {
        init(newModules);
    }
};
