import { nodesToArray } from '../';

describe('nodesToArray()', () => {

    it('can convert a nodelist to an array', () => {
        const parent = document.createElement('div');

        parent.appendChild(document.createElement('div'));
        parent.appendChild(document.createElement('div'));
        parent.appendChild(document.createElement('div'));

        expect(parent.childNodes).toBeInstanceOf(NodeList);
        expect(nodesToArray(parent.childNodes)).toBeInstanceOf(Array);
    });

    it('can handle an empty nodelist', () => {
        const parent = document.createElement('div');

        expect(nodesToArray(parent.childNodes)).toBe(false);
    });

});
