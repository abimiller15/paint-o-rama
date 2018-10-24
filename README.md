# paint-o-rama
collaborative class drawing app

## setup instructions

1. click on the green "clone or download" button && copy the URL to clone this project. in ur terminal enter:
```bash
git clone https://github.com/net-art-and-cultures/paint-o-rama.git
```

2. cd into the "paint-o-rama" folder && run a local server
```bash
cd paint-o-rama
```
```bash
python -m SimpleHTTPServer
```

3. request the page from ur browser
```
localhost:8000
```

## assignment

### option 1: create a brush

create a js file in the `js/brushes` folder for ur brush. in that file u must have at least one function named after ur brush which takes only 2 arguments, an **x** value && a **y** value, for example, the file `js/brushes/basicPen.js`
```js
function basicPen(x,y){
    push() // save current drawing settings
    ellipse(x,y,50)
    pop() // restore original drawing settings
}
```
notice that the first line in the funciton calls the `push()` function while the last line calls the `pop()` function, this will ensure than any changes made to the drawing style by the last brush (a change to the fill color for example) doesn't effect ur brush. u must start && end ur function with a call to these functions.

after creating ur brush, add an icon image for ur brush to the `images` foldre && then add an `img` tag to the `index.html` page in the `section#brush-menu` which follows this format:
```html
<img src="images/[ur-icon-file]" id="[urBrushFunctionName]" class="brush-icon">
```
see the other `img` elements on the `index.html` page for reference

lastly, u must modify the `draw` function in the `js/main.js` file by adding a conditional statement for ur brush, something like:
```js
// ...previous conditional statement...
else if(currentBrush=="urBrushFunctionName"){

    urBrushFunctionName( mouseX, mouseY )

}
```

### option 2: create a filter

create a js file in the `js/filters` folder for ur filter. in that file u must have at least one function named after ur filter effect. this function shouldn't take any arguments. for example, consider the file `js/filters/desaturate.js`
```js
function desaturate(){
    push() // save current drawing settings
    loadPixels() // load all pixel data into the "pixels" array
    // loop as many times as there are pixel values in the pixels array
    for( let i=0; i<pixels.length; i+=4){
        let r = pixels[i] // red value
        let g = pixels[i+1] // green value
        let b = pixels[i+2] // blue value
        let a = pixels[i+3] // alpha channel
        let grey = (r+g+b)/3 // create grey value
        pixels[i] = grey // re-assign red value
        pixels[i+1] = grey // re-assign green value
        pixels[i+2] = grey // re-assign blue value
    }
    updatePixels() // update canvas from modified "pixels" array
    pop() // restore original drawing settings
}
```

after creating ur filter, add a `span` tag to the `index.html` page in the `section#filters` which follows this format:
```html
<span class="filter-item" id="[filterFunctionName]"> filterFunctionName </span>
```
see the other `span` elements on the `index.html` page for reference

lastly, u must modify the `applyFilter` function in the `js/main.js` file by adding a conditional statement for ur filter, something like:
```js
// ...previous conditional statement...
else if(filterName=="filterFunctionName"){

    filterFunctionName()

}
```

### option 3: propose something else

do those tasks sound to basic to u? do u have another much more interesting idea for functionality u could add to our drawing app? if so propose an alternative feature (either in class or via email) && we can chat through what it would look like to implement it.
