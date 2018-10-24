let screws = []

function loadMp3Sounds() {

  let soundMp3s = [
      //'mp3s/rti.mp3',
      //'mp3s/wkup.mp3',
      //'mp3s/celine.mp3',
      'mp3s/syntaxerror.mov',
      'mp3s/undefine.mov'

    //'mp3s/syntaxerror.mp3'

  ]
    //how do i call the mp3 files in an array? also want to add ellipse function
    //...after the array so it draws while cycling through sound files

  for (let i = 0; i < soundMp3s.length; i++) {
      // find sound equivalent to img since img also a function in javascript if not title it whatev?
      let mp3 = loadSound(soundMp3s[i])
      // add sound data to the sounds array
      screws.push( mp3 )
      //what is the push function doing here?

  }

}

function djScrewBrush(x, y){
  push()
  let ran = random(0, screws.length)
  ran = floor(ran)

  //maybe do ellipse function or image drawing function for soundbrush idk which.
  //function myBrush( x, y, size ){
  let i = 0
  let d = Date.now()
  let a = d % 100
  let c = 0
  let s = 0.5

    //triangle(x1, y1, x2, y2, x3, y3)
    //ellipse( x1, y1, size )
    //ellipse( x2, y2, size )


    //ellipse(x +140,y +200, 300, 400)



    //mouth
    if(d % 2 == 0){
    	c = 255 - c

    }
    fill(c)

  	ellipse(x + 145 * s  ,y + 325 * s  , (130 + a) * s, (65 - a) * s)

   // arc(50, 50, 50, 200, 0, PI/2)
   // arc(100, 50, 50, 200, PI/2, PI)
    //arc(100, 250, 50, 200, PI, PI * 3/2)
    //arc(50, 250, 50, 200, PI * 3/2, 2 * PI)
    // or we could just have a function that takes i as a variable that outputs these 				     values...

   //for(i=0; i < 4; i++){
    //	if(i%3 == 0)
   			//xpos = 50
    	//else
    		//xpos = 100

  		//if(i == 2 || i == 3)
    		//ypos = 250
    	//else
    		//ypos = 50

   	//arc(xpos + 32, ypos, 50, 200, i*PI/2, (i+1)* PI/2)
    //arc(xpos + 100, ypos, 50, 200, i*PI/2, (i+1)* PI/2)for(i=0; i < 4; i++){

    fill(255)
  	for(i=0; i < 4; i++){
      if(i%3 == 0){
 			    xpos = 50
      } else {
  		    xpos = 100
      }

  		if(i == 2 || i == 3){
    		ypos = 250
      } else {
    		ypos = 50
      }
      //draws left and right icp diamonds
 	    arc(xpos * s + x, ypos * s + y, 50 * s, 200 * s, i*PI/2, (i+1)* PI/2)
      arc(xpos * s + 100 * s + x, ypos *s + y, 50 * s, 200 * s, i*PI/2, (i+1)* PI/2)



    }
    screws[ran].play()
    //pupils
    ellipse(x + 75 * s, y + 150 * s, 30 * s, 22 * s)
    ellipse(x + 174* s, y + 150 * s, 30 * s, 22 * s)

   pop()
}
