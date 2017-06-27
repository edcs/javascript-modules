import { nextElement, nodesToArray } from '../';

describe('nextElement()', () => {

    it('can return the next sibling element', () => {
        const parent = document.createElement('div');
        const sibling = document.createElement('div');

        sibling.id = 'sibling';

        parent.appendChild(document.createElement('div'));
        parent.appendChild(document.createElement('div'));
        parent.appendChild(sibling);

        expect(nextElement(nodesToArray(parent.childNodes)[1]).id).toBe('sibling');
    });

});
