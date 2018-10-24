

var catAudio;
var amplitude;
var img;
var rotation = 2;

function loadSoundBrush(){
	img = loadImage("images/catball.png"); //add to main.js ???
	catAudio = loadSound("audio/catsong.mp3");
}


function setupSoundBrush() { //get rid of and add to main.js??
	// catAudio.play(); // start the music
	amplitude = new p5.Amplitude();
	// catAudio.jump(15);
}

function catEnd(){
    catAudio.stop();
}

function soundBrush(x,y) {
		// getting the volume of the track
		var level = amplitude.getLevel(); // between 0 and 1
		var c = map(level, 0, 1, 20, 500);
		var radius = map(level, 0, 1, 30, 450);//how the sound is affecting the size


		// catball version
		rotation += .3; //better way to control this ??
		push(); //save
			translate(mouseX, mouseY);
			rotate(rotation);
			imageMode(CENTER);
			image(img, 0, 0, radius, radius);
		if (!catAudio.isPlaying()){
	      catAudio.play();
		  catAudio.jump(15);
	}

		pop();

}
