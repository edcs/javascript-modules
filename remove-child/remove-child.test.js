import { removeChild } from '../';

describe('removeChild()', () => {

    it('can remove element from parent', () => {
        const parent = document.createElement('div');
        const child = document.createElement('div');

        parent.appendChild(child);

        expect(parent.childElementCount).toBe(1);

        removeChild(parent, child);

        expect(parent.childElementCount).toBe(0);
    });

});
