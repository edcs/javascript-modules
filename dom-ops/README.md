# DOM operations

Replacement functions for common jQuery DOM operations.

## Import

    import  { functionName } from '@pod-point/dom-ops';

## Functions

### Selection

#### select

    select(selector, root = document);

Returns selected elements, or `null` if none found.

#### selectFirst

    selectFirst(selector, root = document);

Returns first selected element, or `null` if none found.

#### selectById

    selectById(id);

Returns element with matching `id`, or `null` if none found.

### Traversal

#### closest

    closest(element, selector);

Returns the closest element up the node tree that matches `selector`.

#### nextElement

    nextElement(element);

Returns the next sibling element to `element`.

#### parent

    parent(element);

Returns the parent element to `element`.

### Manipulation

#### create

    create(tag);

Create a new element. If no tag name is given, it defaults to `'div'`.d

#### addClass

    addClass(elements, className);

Adds a class to one or multiple elements.

#### removeClass

    removeClass(element, className);

Removes a class from one or multiple elements.

#### appendChild

    appendChild(parent, element);

Appends `element` after all children of `parent`.

#### removeChild

    removeChild(parent, element);

Removes `element` from `parent`.

#### insertBefore

    insertBefore(element, htmlString);

Insert `htmlString` immedietly before `element`.

#### insertAfter

    insertAfter(element, htmlString);

Insert `htmlString` immedietly after `element`.

#### insertStart

    insertStart(element, htmlString);

Insert `htmlString` immedietly after `element`'s opening tag.

#### insertEnd

    insertEnd(element, htmlString);

Insert `htmlString` immedietly before `element`'s closing tag.

#### empty

    empty(element);

Removes all nodes from the provided `element`.

### Identification

#### hasClass

    hasClass(element, className);

Returns `true` if **all** provided elements contain the provided `className`.

#### matches

    matches(element, selector);

Returns `true` if `element` matches `selector`.

### Helpers

#### nodesToArray

    nodesToArray(elements);

Returns array of elements.

#### whenReady

    whenReady(callback);

Fires `callback` when document is ready.
