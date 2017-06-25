'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _each = require('../each/each');

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modules = {};
var pageActive = false;

var init = function init(newModules) {
    modules = newModules;

    (0, _each2.default)(modules, function (module) {
        if (module.init) {
            module.init();
        }
    });

    pageActive = true;
};

var reload = function reload() {
    (0, _each2.default)(modules, function (module) {
        if (module.hasOwnProperty('refresh')) {
            module.refresh();
        }
    });
};

exports.default = function (newModules) {
    if (pageActive) {
        reload();
    } else {
        init(newModules);
    }
};