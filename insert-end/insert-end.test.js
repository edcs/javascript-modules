import { insertEnd, nodesToArray } from '../';

describe('insertEnd()', () => {

    it('can insert text text at the end of a group of elements', () => {
        const parent = document.createElement('div');

        parent.appendChild(document.createElement('div'));
        parent.appendChild(document.createElement('div'));
        parent.appendChild(document.createElement('div'));

        insertEnd(parent, '<div id="inserted-at-end"></div>');

        expect(nodesToArray(parent.childNodes)[3].id).toBe('inserted-at-end');
    });

});
