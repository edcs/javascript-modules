import child from './child';
import appendChild from '../append-child';
import nodesToArray from '../nodes-to-array';

describe('child()', () => {

    it('can find a child in an element', () => {
        const host = document.createElement('div');
        const element = document.createElement('h1');

        appendChild(element, host);

        const found = child(host, 'h1');

        expect(nodesToArray(found)[0]).toBeInstanceOf(HTMLHeadingElement);
    });

});
