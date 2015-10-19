/*
    Build SVG
    ======================================================

    Class that can define and manipulate SVG and 
    build up an image by creating children BuildSVG elements

    new BuildSVG('tag', attrs)
*/
function getterSetter(opts, prop, getter, setter) {
    var typeOfOpts = typeof opts;

    // Set single, if this is a string and we have a property
    if (typeOfOpts == 'string' && prop) {
        setter.call(this, opts, prop);

    // Set multi, if we have an object
    } else if (typeOfOpts == 'object') {
        for (var key in opts) {
            if (opts.hasOwnProperty(key)) {
                setter.call(this, key, opts[key]);
            }
        }

    // Or get, if we have a string and no props
    } else {
        return getter.call(this, opts);
    }

    return this;
};

class BuildSVG {

    /*
        Create new instance of SVG

        @param [string] (optional): SVG element to create. Defaults to SVG
        @param [object] (optional): Properties to set as tag attrs
    */
    constructor(tag = 'svg', props = {}) {
        this.tag = tag;
        this.element = document.createElementNS("http://www.w3.org/2000/svg", this.tag);
        this.attr(props);
    }

    /*
        Get/set attribute based on present args

        @param [string || data]: Name of data to get/set, or object of data to set
        @param [string || number] (optional): Attribute to set
    */
    attr(opts, prop) {
        return getterSetter.call(this, opts, prop, this.getAttr, this.setAttr);
    }

    /*
        Get SVG attribute

        @param [string]: Name of attribute
        @return: Attribute
    */
    getAttr(name) {
        return this.element.getAttribute(name);
    }

    /*
        Set SVG attribute

        @param [string]: Name of attribute to set
        @param [string || number]: Property to set
    */
    setAttr(name, prop) {
        this.element.setAttribute(name, prop);
        return this;
    }

    /*
        Get/set SVG dimensions

        @param [number] (optional): Width
        @param [number] (optional): Height
        @return [number || BuildSVG]
    */
    dimensions(width, height) {
        return (width !== undefined) ? this.setDimensions(width, height) : this.getDimensions();
    }

    /*
        Set element dimensions

        @param [number]: Width
        @param [number]: Height
    */
    setDimensions(width, height) {
        this.setWidth(width)
            .setHeight(height);

        return this;
    }

    /*
        Return element dimensions

        @return [object]: Width/height
    */
    getDimensions() {
        return {
            width: this.width,
            height: this.height
        };
    }

    /*
        Set element width

        @param [number]: Width
    */
    setWidth(width) {
        this.width = width;
        this.attr('width', width);

        return this;
    }

    /*
        Set element height

        @param [number]: Height
    */
    setHeight(height) {
        this.height = height;
        this.attr('height', height);

        return this;
    }

    /*
        Get/set element offset relative to parent

        @param [number]: X offset
        @param [number]: Y offset
        @return [number || BuildSVG]
    */
    offset(x, y) {
        return (x !== undefined) ? this.setOffset(x, y) : this.getOffset();
    }

    /*
        Set element offset relative to parent

        @param [number]: X
        @param [number]: Y
    */
    setOffset(x, y) {
        this.x = x;
        this.y = y;
        this.setAttr('transform', `translate(${x}, ${y})`);
        return this;
    }

    /*
        Get element offset relative to parent

        @return [object]: X/Y offset
    */
    getOffset() {
        return {
            x: this.x,
            y: this.y
        };
    }

    /*
        Append a BuildSVG tag
    */
    append(buildSVG) {
        this.element.appendChild(buildSVG.element);
    }

    /*
        Prepend a buildSVG tag
    */
    prepend(buildSVG) {
        this.element.insertBefore(buildSVG.element, this.element.firstChild);
    }

    /*
        Create new child SVG element

        @return [BuildSVG]
    */
    create(tag, props) {
        var newElement = new BuildSVG(tag, props);
        this.append(newElement);
        return newElement;
    }

};

module.exports = BuildSVG;