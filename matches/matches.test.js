import { matches } from '../';

describe('matches()', () => {

    it('can match an element by class', () => {
        const element = document.createElement('div');

        element.className = 'test-element';

        expect(matches(element, '.test-element')).toBe(true);
    });

    it('can match an element by id', () => {
        const element = document.createElement('div');

        element.id = 'test-element';

        expect(matches(element, '#test-element')).toBe(true);
    });

});
