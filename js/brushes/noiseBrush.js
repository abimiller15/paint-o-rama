//slider variables
let slider
let slider2
let slider3
let slider4

// store all elements with the '.label-section' class in the 'labels' variable
let labels = document.querySelector('.label-section')

// hide each slider in the slidersArray
function hideSliders() {
    for (let i = 0; i < slidersArray.length; i++) {
        slidersArray[i].hide()
    }
}

// show each slider in the slidersArray
function showSliders() {
    for (let i = 0; i < slidersArray.length; i++) {
        slidersArray[i].show()
    }
}


function noiseBrush(x,y){

    push() // save current drawing settings
        colorMode(HSB)
        // map hue to mouse location on canvas
        let hue = map( x+y, 0, width+height, 0, 360 )
        noFill()
        stroke(hue, 100, slider4.value(), slider3.value()/10)
        strokeWeight(slider2.value())
        // if you want bezier position to be attached to mouse position, uncomment
        // let x1 = mouseX*2 * noise(t + 10000);
        // let x2 = mouseX*2 * noise(t + 20000);
        // let x3 = mouseX*2 * noise(t + 30000);
        // let x4 = mouseX*2 * noise(t + 40000);
        // let y1 =  mouseY*2 * noise(t + 50000);
        // let y2 =  mouseY*2 * noise(t + 60000);
        // let y3 =  mouseY*2 * noise(t + 70000);
        // let y4 =  mouseY*2 * noise(t + 80000);
        // but i think this is cooler anyway
        let x1 = windowWidth * noise(noiseSpeed + 10000)
        let x2 = windowWidth * noise(noiseSpeed + 20000)
        let x3 = windowWidth * noise(noiseSpeed + 30000)
        let x4 = windowWidth * noise(noiseSpeed + 40000)
        let y1 =  windowHeight * noise(noiseSpeed + 50000)
        let y2 =  windowHeight * noise(noiseSpeed + 60000)
        let y3 =  windowHeight * noise(noiseSpeed + 70000)
        let y4 =  windowHeight * noise(noiseSpeed + 80000)
        // changes noise speed
        noiseSpeed += slider.value()/1000
        bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    pop() // restore original drawing settings
}

function setupNoiseBrush() {
    noiseSpeed=0; // noise variable for noise brush
    //create & position sliders
    slider = createSlider(1,15,3)
    slider2 = createSlider(1,10,2)
    slider3 = createSlider(0,10,5)
    slider4 = createSlider(1,100,100)
    slider.position(90,200)
    slider2.position(90,240)
    slider3.position(90,280)
    slider4.position(90,320)
    //create slider labels
    slidersArray = [ slider, slider2, slider3, slider4 ]
    hideSliders()
    labels.style.display = "none"
}

function toggleNoiseBrushUI(x) {
    if (x=="noiseBrush") {
        showSliders()
        labels.style.display = "block"
    } else {
        hideSliders()
        labels.style.display = "none"
    }
}
