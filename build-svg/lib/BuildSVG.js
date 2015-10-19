/*
    Build SVG
    ======================================================

    Class that can define and manipulate SVG and 
    build up an image by creating children BuildSVG elements

    new BuildSVG('tag', attrs)
*/
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

var BuildSVG = (function () {

    /*
        Create new instance of SVG
         @param [string] (optional): SVG element to create. Defaults to SVG
        @param [object] (optional): Properties to set as tag attrs
    */

    function BuildSVG() {
        var tag = arguments.length <= 0 || arguments[0] === undefined ? 'svg' : arguments[0];
        var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, BuildSVG);

        this.tag = tag;
        this.element = document.createElementNS("http://www.w3.org/2000/svg", this.tag);
        this.attr(props);
    }

    /*
        Get/set attribute based on present args
         @param [string || data]: Name of data to get/set, or object of data to set
        @param [string || number] (optional): Attribute to set
    */

    _createClass(BuildSVG, [{
        key: 'attr',
        value: function attr(opts, prop) {
            return getterSetter.call(this, opts, prop, this.getAttr, this.setAttr);
        }

        /*
            Get SVG attribute
             @param [string]: Name of attribute
            @return: Attribute
        */
    }, {
        key: 'getAttr',
        value: function getAttr(name) {
            return this.element.getAttribute(name);
        }

        /*
            Set SVG attribute
             @param [string]: Name of attribute to set
            @param [string || number]: Property to set
        */
    }, {
        key: 'setAttr',
        value: function setAttr(name, prop) {
            this.element.setAttribute(name, prop);
            return this;
        }

        /*
            Get/set SVG dimensions
             @param [number] (optional): Width
            @param [number] (optional): Height
            @return [number || BuildSVG]
        */
    }, {
        key: 'dimensions',
        value: function dimensions(width, height) {
            return width !== undefined ? this.setDimensions(width, height) : this.getDimensions();
        }

        /*
            Set element dimensions
             @param [number]: Width
            @param [number]: Height
        */
    }, {
        key: 'setDimensions',
        value: function setDimensions(width, height) {
            this.setWidth(width).setHeight(height);

            return this;
        }

        /*
            Return element dimensions
             @return [object]: Width/height
        */
    }, {
        key: 'getDimensions',
        value: function getDimensions() {
            return {
                width: this.width,
                height: this.height
            };
        }

        /*
            Set element width
             @param [number]: Width
        */
    }, {
        key: 'setWidth',
        value: function setWidth(width) {
            this.width = width;
            this.attr('width', width);

            return this;
        }

        /*
            Set element height
             @param [number]: Height
        */
    }, {
        key: 'setHeight',
        value: function setHeight(height) {
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
    }, {
        key: 'offset',
        value: function offset(x, y) {
            return x !== undefined ? this.setOffset(x, y) : this.getOffset();
        }

        /*
            Set element offset relative to parent
             @param [number]: X
            @param [number]: Y
        */
    }, {
        key: 'setOffset',
        value: function setOffset(x, y) {
            this.x = x;
            this.y = y;
            this.setAttr('transform', 'translate(' + x + ', ' + y + ')');
            return this;
        }

        /*
            Get element offset relative to parent
             @return [object]: X/Y offset
        */
    }, {
        key: 'getOffset',
        value: function getOffset() {
            return {
                x: this.x,
                y: this.y
            };
        }

        /*
            Append a BuildSVG tag
        */
    }, {
        key: 'append',
        value: function append(buildSVG) {
            this.element.appendChild(buildSVG.element);
        }

        /*
            Prepend a buildSVG tag
        */
    }, {
        key: 'prepend',
        value: function prepend(buildSVG) {
            this.element.insertBefore(buildSVG.element, this.element.firstChild);
        }

        /*
            Create new child SVG element
             @return [BuildSVG]
        */
    }, {
        key: 'create',
        value: function create(tag, props) {
            var newElement = new BuildSVG(tag, props);
            this.append(newElement);
            return newElement;
        }
    }]);

    return BuildSVG;
})();

;

module.exports = BuildSVG;