let cats = []

function loadCatImages(){
    // array with paths to the different cat images
    let catURLs = [
        'images/grumpy-cat.png',
        'images/lil-bub.png',
        'images/surprise-cat.png',
        'images/unicorn-cat.png'
    ]
    // loop as many times as there are paths in the array
    for (let i = 0; i < catURLs.length; i++) {
        // load the next cat image, assign it to the image variable
        let img = loadImage( catURLs[i] )
        // add that img data to the cats array
        cats.push( img )
    }
}

function catsBrush(x,y){
    push() // save current drawing settings
    let ran = random( 0, cats.length-1 ) // pick a random index from cat array
    ran = floor( ran ) // make sure it is not a float by rounding down
    image( cats[ran], x, y, 50, 50 ) // draw a random cat
    pop() // restore original drawing settings
}
