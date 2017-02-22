import closest from './';
import addClass from '../add-class';

describe('closest()', () => {

    it('can find the closest item outside of an element', () => {
        const host = document.createElement('div');
        host.id = 'host';

        for (let i = 0; i < 3; i++) {
            let element = document.createElement('div');
            element.id = `item-${i}`;

            addClass(element, 'class-name');

            host.appendChild(element);
        }

        expect(closest(host, 'div').id).toEqual('host');
    });

});
