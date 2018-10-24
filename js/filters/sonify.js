let length = 30
let lengthcap = false
let sonifyloop = false


const actx = new (window.AudioContext || window.webkitAudioContext)()
const sonifycomp = actx.createDynamicsCompressor()
sonifycomp.connect(actx.destination)

let sonifyAlgo = "guitar"
let pitchslider = document.getElementById("pitchRange");
let slideroutput = document.getElementById("sonifymenu");
let pitch = 1; // initialize pitch value
pitchslider.oninput = function() {
  pitch = this.value;
  return pitch;
}


function toggleSonify(){
  let menu = document.querySelector("#sonifymenu")
  if(menu.style.display=="block"){
    menu.style.display="none"
  }else{
    menu.style.display="block"
  }
}

document.querySelector("#algo1").addEventListener("click",function(){
  sonifyAlgo = "guitar"
})

document.querySelector("#algo2").addEventListener("click",function(){
  sonifyAlgo = "long"
})

 document.querySelector("#algo3").addEventListener("click",function(){
   sonifyAlgo = "sunset"
})

document.querySelector("#sonifyplay").addEventListener("click",function(){
  sonify()
})

// document.querySelector("#sonifystop").addEventListener("click",function(){
//   console.log("hello")
// })

function sonify(){
  loadPixels()

  let buffer = actx.createBuffer(2, pixels.length, actx.sampleRate)
  for (let ch=0; ch<buffer.numberOfChannels; ch++){
    let samples = buffer.getChannelData(ch)
      if(sonifyAlgo == "guitar"){
        guitar(samples,pixels)
      } else if(sonifyAlgo == "long"){
        long(samples,pixels)
      } else if(sonifyAlgo == "sunset"){
         sunset(samples,pixels)
      }
  }
  // so now that we've created a buffer && filled it w/random values, we can play it, just like before we need an audio source node, this time we'll create an AudioBufferSourceNode
  let noise = actx.createBufferSource()
  // then we'll replace it's buffer with the one we made above
  noise.buffer = buffer
  noise.connect(sonifycomp)
  // then just like before we need to connect it to it's destination
  // && lastly we start playing the sound
  if(sonifyloop==true){
    noise.loop=true
  } else {
    noise.loop=false
  }

  noise.playbackRate.value=pitch
  noise.start()
  // here is to determine the sound's length based on user input
  if(lengthcap=true){
    if(pitch<1){
      noise.stop(actx.currentTime + length);
    }
  }

  }

function guitar(samples,pixels){
  for (let s=0; s<samples.length; s++) {
    //guitarArray[s] = map(pixels[s],0,255,-1,1)
    samples[s] = pixels[s*4]/255-1
    //samples[s] = (pixels[s*8]*pixels[(s+4)*8])/255-1
  }
}

function long(samples,pixels){
  for (let s=0; s<samples.length; s++) {
    samples[s] = map(pixels[s],0,255,-1,1)
    //samples[s] = pixels[s*4]/255-1
    //samples[s] = (pixels[s*8]*pixels[(s+4)*8])/255-1
  }
}

function sunset(samples,pixels){
  for (let s=0; s<width; s++) {
        samples[s] = pixels[s*10]
    }
    //samples[s] = map(pixels[s],0,255,-1,1)
    //samples[s] = pixels[s*4]/255-1
    //samples[s] = (pixels[s*8]*pixels[(s+4)*8])/255-1
  }

function sunset(samples,pixels){
  for (let s=0; s<width; s++)
  {
        samples[s] = pixels[s*10]
  }
      //samples[s] = map(pixels[s],0,255,-1,1)
      //samples[s] = pixels[s*4]/255-1
      //samples[s] = (pixels[s*8]*pixels[(s+4)*8])/255-1
}
