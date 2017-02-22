import domModuleLoader from './';

describe('domModuleLoader()', () => {

    it('can init and refresh dom modules', () => {
        const element = document.createElement('div');
        element.id = 'banana-module';
        element.setAttribute('data-js-module', 'goBananas');

        document.body.appendChild(element);

        const goBananas = { init: jest.fn(), destroy: jest.fn() };
        const loader = domModuleLoader({ goBananas });

        loader.init();
        // First mock call -> first supplied argument
        expect(goBananas.init.mock.calls[0][0].id).toBe('banana-module');

        loader.refresh();
        // Ensure destroy method is called during refresh
        expect(goBananas.destroy.mock.calls.length).toBe(1);
    });

});
