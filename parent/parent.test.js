import { parent } from '../';

describe('parent()', () => {

    it('can return the parent element', () => {
        const parentElement = document.createElement('div');
        const childElement = document.createElement('div');

        parentElement.id = 'parent';
        parentElement.appendChild(childElement);

        expect(parent(childElement).id).toBe('parent');
    });

});
