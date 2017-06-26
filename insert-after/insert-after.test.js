import { insertAfter, nodesToArray } from '../';

describe('insertAfter()', () => {

    it('can insert text after another element', () => {
        const parent = document.createElement('div');
        const element = document.createElement('div');

        parent.appendChild(element);

        insertAfter(element, '<div id="inserted-after"></div>');

        expect(nodesToArray(parent.childNodes)[1].id).toBe('inserted-after');
    });

});
