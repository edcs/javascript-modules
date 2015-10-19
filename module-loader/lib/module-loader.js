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
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _podPointDomOps = require('@pod-point/dom-ops');

var _podPointUtils = require('@pod-point/utils');

var DATA_TAG = 'data-js-module';

var pageActive = false;

var activeDOMModules = [];

var persistentModules;
var domModules;

function loadDOMModules() {
    var elementsWithModules = (0, _podPointDomOps.select)('[' + DATA_TAG + ']');

    activeDOMModules = [];

    if (elementsWithModules) {
        elementsWithModules.forEach(function (element) {
            var modulesToLoad = element.getAttribute(DATA_TAG).split(' ');

            modulesToLoad.forEach(function (name) {
                var module = domModules[name];

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

    (0, _podPointUtils.each)(persistentModules, function (module) {
        if (module.init) {
            module.init();
        }
    });

    loadDOMModules();

    pageActive = true;
}

function reload() {
    (0, _podPointUtils.each)(persistentModules, function (module) {
        if (module.hasOwnProperty('refresh')) {
            module.refresh();
        }
    });

    activeDOMModules.forEach(function (module) {
        if (module.hasOwnProperty('destroy')) {
            module.destroy();
        }
    });

    loadDOMModules();
}

exports['default'] = function (modules) {
    if (pageActive) {
        reload();
    } else {
        init(modules.dom, modules.persistent);
    }
};

module.exports = exports['default'];