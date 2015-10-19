# BuildSVG

Class that can define and manipulate SVG elements. Build up an image by creating children BuildSVG elements.

## Import

    import BuildSVG from '@pod-point/build-svg';

## Use

### Create a new element

    var svg = new BuildSVG('svg', attrs);

    svg.element; // SVGElement

## Methods

### .attr()

    svg.attr('d'); // Get 'd'
    svg.attr('d', 'M100 200'); // Set 'd'
    svg.attr(attrs); // Set multiple

### .dimensions()
    
    svg.dimensions(width, height); // Set width and height

### .offset()

    svg.offset(); // Get { x, y }
    svg.offset(x, y); // Set { x, y } 

### .append()

    svg.append(new BuildSVG('path')); // Adds a path tag after all children

### .prepend()

    svg.prepend(new BuildSVG('path')); // Adds a path tag before all children

### .create()
    
    svg.create('path', attr); // Create and append child SVG path
