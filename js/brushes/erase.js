 // ~*~*~*~*~~*~*~*~*~~*~*~*~*~hi mom~*~*~*~*~~*~*~*~*~~*~*~*~*~~*~*~*~*~
// <*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>
// ~*~*~*~*~~*~*~*~*~~*~*~*~*~hi mom~*~*~*~*~~*~*~*~*~~*~*~*~*~~*~*~*~*~


let ctx   //declares a variable and names it ctx (context) to globally (meaning throughout the  entire code) call     later
function erase(x,y){  // name the function, set up two variables for the x and y axis
    push() // save current drawing settings by adding to the end of  the array (meaning the list of )
    fill(0,0,0)  // sets fill of eraser brush that will be removed in the  next line
    ctx.clearRect(x,y,100,100)   // calls function of eraser brush sets  dimensions to 100 pixels squared
    pop() // restore original drawing settings
}

function eraseSetUp(drawingContext){  // creates a new function called eraseSetUp and defines the variable (input for the function) as drawingContext This will set up a white background to be drawn on, and then creates a background image to be revealed when the erase brush is used
    ctx=drawingContext  //the global variable ctx is called and set to the drawingContext
    push()  //save current drawing settings  by  adding to the end of the array (meaning the list of )
    fill(255,255,255)  //sets the primary background color to white
    noStroke()  //removes border color around white background
    rect(0,0,width, height)  //sets dimensions of white background  to the browser width and height
    document.body.style.backgroundImage="url(images/backgroundCodeMidterm.png)"     //calls the backgroundImage (screenshot of   this code!)
    pop() // restore original drawing settings

}
