import clone from './';

describe('clone()', () => {

    it('can clone an element', () => {
        const element = document.createElement('h1');
        const cloned = clone(element);

        expect(cloned).toBeInstanceOf(HTMLHeadingElement);
    });

});
