//This filter pixelates the image when clicked. You can keep drawing over the pixelation clearly and then click pixelate again to re pixelate everything.


function pixelate(){
    push() // save current drawing settings
    noStroke()

    let pixelSize = random (2, 30) //This makes it so the more times you click the pixelate filter, the pixelation occurs at random sizes between 2 and 30. Try clicking the pixelate filter repeatadly to see different patterns.

    for(let y=0; y<height; y+= pixelSize){
        for(let x=0; x<width; x+= pixelSize){
            let pixelColor = get(x + pixelSize/2, y + pixelSize/2 )//this makes the color of the pixel the middle point of each pixelSize.
            fill(pixelColor[0], pixelColor[1], pixelColor[2])

            rect(x, y, pixelSize, pixelSize)
        }
    }


    pop() // restore original drawing settings
}
