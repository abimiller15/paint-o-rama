//returns an array of size 2 with the closest and second closest rgb values from a choice of values 0, 127, 255
function returnClosest(rgb) {
    let closest = [0 ,0 ]
    if (rgb < 128) {
        if (rgb < 64) {
          closest[0] = 0
          closest[1] = 127
        } else {
          closest[0] = 127
          closest[1] = 0
        }
    } else {
        if (rgb < 192) {
          closest[0] = 127
          closest[1] = 255
        } else {
          closest[0] = 255
          closest[1] = 127
        }
    }
  // the same but in case i want to test out quantizing to 0 and 255 only
  // if(rgb < 128) {
  //   closest[0] = 0
  //   closest[1] = 255
  // } else {
  //   closest[0] = 255
  //   closest[1] = 0
  // }
  return closest
}

function bayer(){
    //choose between bayer matrices of size 8x8, 4x4, 2x2
    //let bayermatrix = [[ 0, 32, 8,  40, 2,  34, 10, 42 ],[ 48, 16, 56, 24, 50, 18, 58, 26 ],[ 12, 44, 4,  36, 14, 46, 6, 38 ],[ 60, 28, 52, 20, 62, 30, 54, 22 ],[ 3, 35, 11, 43, 1, 33, 9, 41 ],[ 51, 19, 59, 27, 49, 17, 57, 25 ],[ 15, 47, 7, 39, 13, 45, 5, 37 ],[ 63, 31, 55, 23, 61, 29, 53, 21 ]]
    // let bayermatrix = [[ 0, 8, 2, 10 ],[ 12, 14, 4, 6 ],[ 3, 11, 1, 9 ],[ 15, 7, 13, 5 ]]
    let bayermatrix = [[ 0, 2 ],[ 3, 1 ]]

    push() // save current drawing settings
    loadPixels() // load all pixel data into the "pixels" array
    // loop as many times as there are pixel values in the pixels array, taking pixelDensity into account
    let d = pixelDensity()
    for( let i=0; i<d; i++){
        for( let j=0; j<d; j++){
            for( let y=0; y<height; y++){
                for (let x=0; x<width; x++) {

                //set index for current pixel given x and y in pixels[]
                let idx = 4 * ((y * d + j) * width * d + (x * d + i))

                //load red value (between 0 and 255)
                let oldR = pixels[idx]
                //find closest and second closest colours in palette to our current pixel
                let closeR = returnClosest(oldR)
                //calculate normalized distance between closest colour and current pixel
                let distance = abs((oldR-closeR[0])/255)
                //find relevant threshold value in appropriate bayer index matrix
                //let threshold = bayermatrix[x%8][y%8]/16
                //let threshold = bayermatrix[x%4][y%4]/8
                let threshold = bayermatrix[x%2][y%2]/4
                //compare distance to threshold value and use this to pick between closest and second closest colour
                if (distance < threshold) {
                  newR = closeR[0]
                } else {
                  newR = closeR[1]
                }

                //repeat for Green
                let oldG = pixels[idx+1]
                let closeG = returnClosest(oldG)
                distance = abs((oldG-closeG[0])/255)
                //threshold = bayermatrix[x%8][y%8]/16
                //threshold = bayermatrix[x%4][y%4]/8
                threshold = bayermatrix[x%2][y%2]/4
                if (distance < threshold) {
                  newG = closeG[0]
                } else {
                  newG = closeG[1]
                }

                //repeat for Blue
                let oldB = pixels[idx+2]
                let closeB = returnClosest(oldB)
                distance = abs((oldB-closeB[0])/255)
                //threshold = bayermatrix[x%8][y%8]/16
                //threshold = bayermatrix[x%4][y%4]/8
                threshold = bayermatrix[x%2][y%2]/4
                if (distance < threshold) {
                  newB = closeB[0]
                } else {
                  newB = closeB[1]
                }

                //update pixels array
                pixels[idx] = newR
                pixels[idx+1] = newG
                pixels[idx+2] = newB
                pixels[idx+3] = 255

                }
            }
        }
    }
    updatePixels() // update canvas from modified "pixels" array
    pop() // restore original drawing settings
}
