import create from './create';

describe('create()', () => {

    it('can create an element', () => {
        const element = create('span');

        expect(element).toBeInstanceOf(HTMLSpanElement);
    });

});
