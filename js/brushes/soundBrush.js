

let musicTrack
let amplitude
let img
let rotation = 3

function loadSoundBrush(){
	img = loadImage("images/catball.png") //add to main.js ???
	musicTrack = loadSound("audio/catsong.mp3")
	musicTrack.jump(10)
}


function setupSoundBrush() { //get rid of and add to main.js??
	// start the music
	amplitude = new p5.Amplitude()


}

function musicEnd(){
    musicTrack.stop()
}

function soundBrush(x,y) {
		// getting the volume of the track
		let level = amplitude.getLevel() // between 0 and 1
		let c = map(level, 0, 1, 10, 400)
		let radius = map(level, 0, 1, 10, 400)//how the sound is affecting the size


		// catball version
		rotation += .5 //better way to control this
		push() //save
			translate(mouseX, mouseY)
			rotate(rotation)
			imageMode(CENTER)
			image(img, 0, 0, radius, radius)
		if (!musicTrack.isPlaying()){
	      musicTrack.play()
		}
		pop()

}
