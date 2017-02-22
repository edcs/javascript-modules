import each from './each';

describe('each()', () => {

    it('can iterate over arrays', () => {
        each([0, 1, 2], (value, key) => {
            expect(value).toEqual(parseInt(key));
        });
    });

    it('can iterate over objects', () => {
        each({ '0': '0', '1': '1', '2': '2' }, (value, key) => {
            expect(value).toEqual(key);
        });
    });

    it('can cancel iteration', () => {
        const callback = jest.fn().mockReturnValue(false);

        each([0, 1, 2], callback);

        expect(callback.mock.calls.length).toEqual(1);
    });

});
