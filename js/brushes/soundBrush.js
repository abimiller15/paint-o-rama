

var musicTrack;
var amplitude;
var img;
var rotation = 3;

function loadSoundBrush(){
	img = loadImage("images/catball.png"); //add to main.js ???
	musicTrack = loadSound("audio/baths-animals.mp3");
}


function setupSoundBrush() { //get rid of and add to main.js??
	musicTrack.play(); // start the music
	amplitude = new p5.Amplitude();

	musicTrack.jump(30);
}

function musicEnd(){
    musicTrack.stop();
}

function soundBrush(x,y) {
		// getting the volume of the track
		var level = amplitude.getLevel(); // between 0 and 1
		var c = map(level, 0, 1, 10, 200);
		var radius = map(level, 0, 1, 10, 250);//how the sound is affecting the size


		// catball version
		rotation += 4; //better way to control this
		push();
			translate(mouseX, mouseY);
			rotate(rotation);
			imageMode(CENTER);
			image(img, 0, 0, radius, radius);
		if (!musicTrack.isPlaying()){
	      musicTrack.play();
	}
		pop();
	}
}
