import { hasClass, addClass } from '../';

describe('hasClass()', () => {

    it('can determine if element has a class', () => {
        const element = document.createElement('div');

        expect(hasClass(element, 'new-class')).toEqual(false);
        addClass(element, 'new-class');
        expect(hasClass(element, 'new-class')).toEqual(true);
    });

});
