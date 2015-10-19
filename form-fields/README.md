# Form fields

Provides the logic for `input` and `textarea` label and size behaviours.

## Use

    import formFields from '@pod-point/form-fields';

    formFields.init();

If you're using [Module Loader](https://github.com/Pod-Point/javascript-modules/tree/master/module-loader), you can pass this module to that as a `persistent` module:

    moduleLoader({
        persistent: {
            formFields
        }
    });