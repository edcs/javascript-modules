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
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _podPointDomOps = require('@pod-point/dom-ops');

var DATA_TAG = 'data-js-module';

var activeModules = [];
var domModules = {};
var definedDataTag = '';

function init() {
    var moduleElements = (0, _podPointDomOps.nodesToArray)((0, _podPointDomOps.select)('[' + definedDataTag + ']'));

    activeModules = [];

    if (moduleElements) {
        moduleElements.forEach(function (element) {
            var modulesToLoad = element.getAttribute(definedDataTag).split(' ');

            modulesToLoad.forEach(function (name) {
                var module = domModules[name];

                if (module && module.init) {
                    module.init(element);
                    activeModules.push(module);
                }
            });
        });
    }
}

function refresh() {
    activeModules.forEach(function (module) {
        if (module.hasOwnProperty('destroy')) {
            module.destroy();
        }
    });

    init();
}

exports['default'] = function (modules) {
    var dataTag = arguments.length <= 1 || arguments[1] === undefined ? DATA_TAG : arguments[1];

    domModules = modules;
    definedDataTag = dataTag;
    return { init: init, refresh: refresh };
};

module.exports = exports['default'];