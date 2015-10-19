# DOM operations

Replacement functions for common jQuery DOM operations.

## Import

    import  { functionName } from '@pod-point/dom-ops';

## Functions

### select

    select(selector, root = document);

Creates an array from selected elements, `false` if none found.

### addClass

    addClass(elements, className);

Adds a class to one or multiple elements.

### removeClass

    removeClass(element, className);

Removes a class from one or multiple elements.

### hasClass

    hasClass(element, className);

Returns `true` if **all** provided elements contain the provided `className`.

### nextElement

    nextElement(element);

Returns the next sibling element to `element`.

### parent

    parent(element);

Returns the parent element to `element`.

### empty

    empty(element);

Removes all nodes from the provided `element`.

### appendChild

    appendChild(parent, element);

Appends `element` after all children of `parent`.

### removeChild

    removeChild(parent, element);

Removes `element` from `parent`.

### whenReady

    whenReady(callback);

Fires `callback` when document is ready.