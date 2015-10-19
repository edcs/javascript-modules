import ui from 'popmotion';
import BuildSVG from '../inc/BuildSVG';
import { appendChild, removeChild } from '../inc/dom';

const height = 2;
const width = 2000;

var body, bar, line, lineActor, pulse;
var barActive = false;

function createBar() {
    body = document.body;

    bar = new BuildSVG('svg', {
        height,
        width,
        viewBox: `0 0 ${width} 2`,
        id: 'activity-bar'
    });

    line = new BuildSVG('path', {
        d: `M0 1L${width} 1`,
        stroke: '#8CC63F'
    });

    line.attr('stroke-width', 2);

    bar.append(line);

    lineActor = new ui.Actor({
        element: line.element,
        values: {
            length: 30,
            spacing: 10
        }
    });

    pulse = new ui.Simulate({
        values: {
            offset: 5
        }
    });
}

export function hideActivityBar() {
    if (bar && barActive) {
        lineActor.stop();
        removeChild(body, bar.element);

        barActive = false;
    }
}

export function showActivityBar() {
    if (!bar) {
        createBar();
    }

    if (!barActive) {
        appendChild(body, bar.element);

        lineActor.start(pulse);

        barActive = true;
    }
}