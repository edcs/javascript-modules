import { insertBefore, nodesToArray } from '../';

describe('insertBefore()', () => {

    it('can insert text before another element', () => {
        const parent = document.createElement('div');
        const element = document.createElement('div');

        parent.appendChild(element);

        insertBefore(element, '<div id="inserted-before"></div>');

        expect(nodesToArray(parent.childNodes)[0].id).toBe('inserted-before');
    });

});
