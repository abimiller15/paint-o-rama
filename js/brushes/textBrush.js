function textBrush(x,y){
    push() // save current drawing settings
    let words = ["lest we forget", "no stopping; no standing", "red eye; jewish star; chicago woman", "Standing"]

    let indext = random(words.length)
    indext = floor(indext)
    //homework
    text( words[indext], x, y)











    pop() // restore original drawing settings
}
