import { removeClass, each, nodesToArray } from '../';

describe('removeClass()', () => {

    it('can remove a class from an element', () => {
        const element = document.createElement('div');

        element.className = 'class-name';

        expect(element.className).toBe('class-name');

        removeClass(element, 'class-name');

        expect(element.className).not.toBe('class-name');
    });

    it('can remove a class from multiple elements', () => {
        const parent = document.createElement('div');
        const child = document.createElement('div');
        child.className = 'class-name';

        parent.appendChild(child);
        parent.appendChild(child);
        parent.appendChild(child);
        parent.appendChild(child);

        each(nodesToArray(parent.childNodes), (item) => {
            expect(item.className).toBe('class-name');
        });

        removeClass(parent.childNodes, 'class-name');

        each(nodesToArray(parent.childNodes), (item) => {
            expect(item.className).not.toBe('class-name');
        });
    });

});
