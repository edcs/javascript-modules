import addClass from './add-class';
import nodesToArray from '../nodes-to-array';

describe('addClass()', () => {

    it('can add a class to an element', () => {
        const element = document.createElement('div');

        addClass(element, 'new-class');

        expect(nodesToArray(element.classList)[0]).toEqual('new-class');
    });

});
