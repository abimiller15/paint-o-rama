// merged with newest (oct 24 9:12am) version of netart paint-o-rama
let cowboy = []
let cowboyAudio

function loadCowboyImages(){
    // array with paths to the different cowboy images
    let cowboyURLs = [
        'images/cowboy_01.png',
        'images/cowboy_02.png',
        'images/cowboy_03.png',
        'images/cowboy_04.png',
        'images/cowboy_05.png',
        'images/cowboy_06.png',
        'images/cowboy_9.png'
    ]
    cowboyAudio = loadSound("audio/cowboyaudio.mp3")
    // loop as many times as there are paths in the array
    for (let i = 0; i < cowboyURLs.length; i++) {
        // load the next cat image, assign it to the image variable
        let img = loadImage( cowboyURLs[i] )
        // add that img data to the cowboy array
        cowboy.push( img )
    }
}

function cowboyEnd(){
    cowboyAudio.stop();
}
//cowboyEnd commands cowboyAudio to stop

function cowboyBrush(x,y){
    push() // save current drawing settings
    let ran = random( 0, cowboy.length ) // pick a random index from cowboy array
    ran = floor( ran ) // make sure it is not a float by rounding down
    image( cowboy[ran], x, y, 50, 50 ) // draw a random cowboy
    if (!cowboyAudio.isPlaying()){
      cowboyAudio.play(); //when the mouse is pressed while the cowboyBrush is selected, checking that: if cowboyAudio is NOT playing, play cowboyAudio
    }
    pop() // restore original drawing settings
}
