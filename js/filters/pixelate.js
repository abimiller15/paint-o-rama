function pixelate(){
    push() // save current drawing settings
    noStroke()

    let pixelSize = 20

    for(let y=0; y<height; y+= pixelSize){
        for(let x=0; x<width; x+= pixelSize){
            let pixelColor = get(x + pixelSize/2, y + pixelSize/2 )
            fill(pixelColor[0], pixelColor[1], pixelColor[2])

            rect(x, y, pixelSize, pixelSize)
        }
    }


    pop() // restore original drawing settings
}
