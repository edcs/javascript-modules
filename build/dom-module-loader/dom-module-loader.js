'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _nodesToArray = require('../nodes-to-array');

var _nodesToArray2 = _interopRequireDefault(_nodesToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domModules = {};
var activeModules = [];
var definedDataTag = '';

var init = function init() {
    var moduleElements = (0, _nodesToArray2.default)((0, _select2.default)('[' + definedDataTag + ']'));

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
};

var refresh = function refresh() {
    activeModules.forEach(function (module) {
        if (module.hasOwnProperty('destroy')) {
            module.destroy();
        }
    });

    init();
};

exports.default = function (modules) {
    var dataTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data-js-module';

    domModules = modules;
    definedDataTag = dataTag;
    return { init: init, refresh: refresh };
};