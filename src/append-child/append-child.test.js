import { appendChild, nodesToArray } from '../';

describe('appendChild()', () => {

    it('can append a child to an element', () => {
        const host = document.createElement('div');
        const element = document.createElement('h1');

        appendChild(element, host);

        expect(nodesToArray(host.childNodes)[0]).toBeInstanceOf(HTMLHeadingElement);
    });

});
