'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.hideActivityBar = hideActivityBar;
exports.showActivityBar = showActivityBar;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _popmotion = require('popmotion');

var _popmotion2 = _interopRequireDefault(_popmotion);

var _podPointBuildSvg = require('@pod-point/build-svg');

var _podPointBuildSvg2 = _interopRequireDefault(_podPointBuildSvg);

var _podPointDomOps = require('@pod-point/dom-ops');

var _podPointSettings = require('@pod-point/settings');

var height = 2;
var width = 2000;

var body, bar, line, lineActor, pulse;
var barActive = false;

function createBar() {
    body = document.body;

    bar = new _podPointBuildSvg2['default']('svg', {
        height: height,
        width: width,
        viewBox: '0 0 ' + width + ' 2',
        id: 'activity-bar'
    });

    line = new _podPointBuildSvg2['default']('path', {
        d: 'M0 1L' + width + ' 1',
        stroke: _podPointSettings.GREEN
    });

    line.attr('stroke-width', 2);

    bar.append(line);

    lineActor = new _popmotion2['default'].Actor({
        element: line.element,
        values: {
            length: 30,
            spacing: 10
        }
    });

    pulse = new _popmotion2['default'].Simulate({
        values: {
            offset: 5
        }
    });
}

function hideActivityBar() {
    if (bar && barActive) {
        lineActor.stop();
        (0, _podPointDomOps.removeChild)(body, bar.element);

        barActive = false;
    }
}

function showActivityBar() {
    if (!bar) {
        createBar();
    }

    if (!barActive) {
        (0, _podPointDomOps.appendChild)(body, bar.element);

        lineActor.start(pulse);

        barActive = true;
    }
}