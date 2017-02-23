import { create } from '../';

describe('create()', () => {

    it('can create an element', () => {
        const element = create('span');

        expect(element).toBeInstanceOf(HTMLSpanElement);
    });

});
