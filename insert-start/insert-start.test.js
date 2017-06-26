import { insertStart, nodesToArray } from '../';

describe('insertStart()', () => {

    it('can insert text text at the start of a group of elements', () => {
        const parent = document.createElement('div');

        parent.appendChild(document.createElement('div'));
        parent.appendChild(document.createElement('div'));
        parent.appendChild(document.createElement('div'));

        insertStart(parent, '<div id="inserted-at-start"></div>');

        expect(nodesToArray(parent.childNodes)[0].id).toBe('inserted-at-start');
    });

});
