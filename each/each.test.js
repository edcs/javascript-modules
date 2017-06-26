import { each } from '../';

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

    it("doesn't fail if array is empty", () => {
        each([], (value, key) => { });
    });

    it("doesn't fail if object is empty", () => {
        each({}, (value, key) => { });
    });

    it("doesn't fail if iterator is null", () => {
        each(null, (value, key) => { });
    });

    it('can cancel iteration', () => {
        const callback = jest.fn().mockReturnValue(false);

        each([0, 1, 2], callback);

        expect(callback.mock.calls.length).toEqual(1);
    });

});
