function pinkparty(){
    push() // save current drawing settings
    loadPixels() // load all pixel data into the "pixels" array
    // loop as many times as there are pixel values in the pixels array
    for( let i=0; i<pixels.length; i+=4 ){ // loop for making everything pink
        pixels[i] = 255 // keeps red value full
        pixels[i+1] = map(i,0,pixels.length,0,255)// adjusts green to keep pink
        pixels[i+2] = map(i,0,pixels.length, 99,255)// adjusts blue to keep pink
    }
    for( let i=0; i<pixels.length; i+=4){ // loop for making white noise
      if( Math.random()<0.3 ) { // creates the noise
        pixels[i] = 255 // makes red white
        pixels[i+1] = 255 // makes green white
        pixels[i+2] = 255 // makes blue white
      }
    }
  updatePixels() // update canvas from modified "pixels" array
  pop() // restore original drawing settings
}
// yee haw!
// woo hoo!
