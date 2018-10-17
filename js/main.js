// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~
// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~ logic for our app menu
// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~

let currentBrush = "basicPen" // keep track of the last selected brush

// create array of objects for each img element on our index.html page
let imgs = document.querySelectorAll('img')
// loop as many times are there are image elements
for (let i = 0; i < imgs.length; i++) {
    // assign a function to each image's "click" event
    imgs[i].addEventListener('click',(e)=>{
        // set the value of currentBrush to this image's id value
        currentBrush = e.target.id
    })
}

// create array of objects for each span element on our index.html page
let spans = document.querySelectorAll('span')
// loop as many times are there are span elements
for (let i = 0; i < spans.length; i++) {
    // assign a function to each span's "click" event
    spans[i].addEventListener('click',(e)=>{
        // run the applyFilter funciton, passing along the id of the clicked span
        applyFilter( e.target.id )
    })
}


// this funciton will apply a different filter depending on the value we pass it
function applyFilter(filterName){

    if(filterName=="desaturate"){

        desaturate()

    } else if(filterName=="invert"){

        invert()

    }

}

// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~
// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~ our familiar p5.js structure
// _.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~._.~'~

function preload() {
    loadStarImage()
    loadCatImages()
}

function setup(){
    createCanvas(innerWidth,innerHeight)
}

function draw(){
    if(mouseIsPressed){

        if(currentBrush=="basicPen"){

            basicPen( mouseX, mouseY )

        } else if(currentBrush=="rainbowPen"){

            rainbowPen( mouseX, mouseY )

        } else if(currentBrush=="starBrush"){

            starBrush( mouseX, mouseY )

        } else if(currentBrush=="catsBrush"){

            catsBrush( mouseX, mouseY )

        } else if(currentBrush== "textBrush"){

             textBrush( mouseX, mouseY )
        }

    }
}
