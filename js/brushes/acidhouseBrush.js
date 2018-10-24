let acidhouse = []

function loadacidhouseImages(){
    // array with paths to the different cat images
    let acidhouseURLs = [
        'acidhouseimages/dogcoins.png',
        'acidhouseimages/peace.png',
        'acidhouseimages/smiley-clipart-house-3.png',
        'acidhouseimages/smiley-1.png',
        'acidhouseimages/smiley-2.png',
        'acidhouseimages/simley-4.png',
        'acidhouseimages/smiley-5.png',


    ]

    // loop as many times as there are paths in the array
    for (let i = 0; i < acidhouseURLs.length; i++) {
        // load the next image, assign it to the image variable
        let img = loadImage( acidhouseURLs[i] )
        // add that img data to the acidhouse array
        acidhouse.push( img )
    }
}

function acidhouseBrush(x,y){

    push() // save current drawing settings

    colorMode(HSB)// sets the color mode to HSB

    // random numbers for hsb values between 0 and 255
    let value1 = random( 255 )
    let value2 = random( 255 )
    let value3 = random( 255 )

    // random numbers for the size (width) of the rectangle
    let randomsize = random( 40,70 )

    // the operation that applies the color of the rectangle
    fill( frameCount % 360, value1,value2 )
    stroke(value1,value2,value3)

    //draws a rectangle behind the image
    rect( x, y, randomsize,randomsize)

    let ran = random( 0, acidhouse.length-1 ) // pick a random index from the acidhouse array
    ran = floor( ran ) // make sure it is not a float by rounding down
    image( acidhouse[ran], x, y, randomsize, randomsize) // draw a random image from the
    pop() // restore original drawing settings
}
