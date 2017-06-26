import { throttle } from '../';

describe('throttle()', () => {

    it('can throttle calls to a callback', () => {
        let count = 0;
        const throttled = throttle(() => {
            count = count + 1;
        }, 1000);

        for (let i = 0; i < 5; i++) {
            throttled();
        }

        expect(count).toBe(1);
    });

});
