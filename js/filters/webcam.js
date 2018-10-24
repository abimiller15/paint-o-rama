var cam

function webcam(){

    push()
    if(!cam){
      cam = createCapture(VIDEO)
      cam.size(800,1200)
      cam.hide()
    }

    image(cam,0,0,cam.height,cam.width)
    pop()

}
