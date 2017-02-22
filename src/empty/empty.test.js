import empty from './empty';

describe('empty()', () => {

    it('can empty out an element', () => {
        const element = document.createElement('div');

        for (let i = 1; i <= 5; i++) {
            element.appendChild(document.createElement(`h${i}`))
        }

        expect(element.childElementCount).toEqual(5);
        empty(element);
        expect(element.childElementCount).toEqual(0);
    });

});
