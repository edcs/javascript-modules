/*
    Module system

    All modules export `init` methods.

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

var _podPointUtils = require('@pod-point/utils');

var pageActive = false;
var modules = {};

function init(newModules) {
    modules = newModules;

    (0, _podPointUtils.each)(modules, function (module) {
        if (module.init) {
            module.init();
        }
    });

    pageActive = true;
}

function reload() {
    (0, _podPointUtils.each)(persistentModules, function (module) {
        if (module.hasOwnProperty('refresh')) {
            module.refresh();
        }
    });
}

exports['default'] = function (newModules) {
    if (pageActive) {
        reload();
    } else {
        init(newModules);
    }
};

module.exports = exports['default'];