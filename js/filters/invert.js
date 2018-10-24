function invert(){
    push() // save current drawing settings
    loadPixels() // load all pixel data into the "pixels" array
    // loop as many times as there are pixel values in the pixels array
    for( let i=0; i<pixels.length; i+=4){
        let r = pixels[i] // red value
        let g = pixels[i+1] // green value
        let b = pixels[i+2] // blue value
        pixels[i] = 255 - r // re-assign to invere of red value
        pixels[i+1] = 255 - g // re-assign to invere of green value
        pixels[i+2] = 255 - b // re-assign to invere of blue value
    }
    updatePixels() // update canvas from modified "pixels" array
  
    pop() // restore original drawing settings
}
