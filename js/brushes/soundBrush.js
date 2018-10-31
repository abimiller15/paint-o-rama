

let musicTrack
let amplitude
let img
let rotation = 3

function loadSoundBrush(){
	img = loadImage("images/catball.png") //add to main.js ???
	musicTrack = loadSound("audio/catsong.mp3")
}


function setupSoundBrush() { //get rid of and add to main.js??
	amplitude = new p5.Amplitude()



}

function musicEnd(){
	musicTrack.jump(15)
    musicTrack.stop()
}

function soundBrush(x,y) {
		// getting the volume of the track
		let level = amplitude.getLevel() // between 0 and 1
		let c = map(level, 0, 1, 20, 400)
		let radius = map(level, 0, 1, 20, 400)//how the sound is affecting the size


		// catball version
		rotation += .45 //better way to control this
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
