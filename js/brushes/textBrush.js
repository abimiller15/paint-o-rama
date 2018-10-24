
function textBrush(x,y){
    push() // save current drawing settings


    let words = ["Angry", "Annoyed", "Afraid", "Awkward", "Affectionate", "Anxious", "Alarmed", "Awed", "Aggravated", "Amazed", "Astonished", "Amused", "Apprehensive", "Absorbed", "Ambivalent", "Ashamed", "Able", "Addled", "Admired", "Admirable", "Affable", "Agreeable", "Aggressive", "Abandoned","Brave", "Bothered", "Bewildered", "Bitter", "Bashful", "Blue", "Baffled", "Blissful", "Buoyant", "Bereaved", "Bold", "a", "a", "b", "b", "b", "b", "b", "b", "b","----------------------", "㋀?", "㋁!"," ㋂ ------------㋃", "㋄ ㋅-------------"," ㋆ ㋇ ㋈ ㋉///////// ㋊ ㋋", "㏠", "㏡", "㏢","㏣", "㏤ ㏥ ㏦ ㏧ ㏨ ㏩ ㏪ ㏫ ㏬ ㏭ ㏮ ㏯ ㏰ ㏱ ㏲ ㏳ ㏴ ㏵ ㏶ ㏷ ㏸ ㏹ ㏺ ㏻ ㏼ ㏽", "㏾", "㍘ ㍙ ㍚", "㍛ ㍜ ㍝ ㍞ ㍟ ㍠ ㍡ ㍢ ㍣ ㍤ ㍥ ㍦ ㍧ ㍨", "   -----㍩ ㍪ ㍫ ㍬ ㍭ ㍮ ㍯ ㍰ ","▂ ▃ ▄ ▅ ▆ ▇ █ ▉▁▊▋▌▍▎","▂ ▃ ▄ ▅ ▆ ▇ █ ▉", "▊▋▌▍", "▎▁▁▁▁▁▁▁▁▁▁▁▁▁▂▃▄▅▆▇","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▉▊▋▌▍", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▂▃▄▅▆▇█▉▊▋▌▍▎▁▂▃▄▅▆▇█▉▊▋▌▍▎▁▂▃▄▅▆▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇█▉▊▋▌▍▎","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁","▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁"]

    let indext = random(words.length)// pick a random index from words array
    indext = floor(indext)

    background(50);
    strokeWeight(2);//stroke() function is to set the color of the text’s outline.
    fill(128 + sin(frameCount*0.1) * 128);// The color of the text is controlled with the fill() function

    if (mouseIsPressed) {
       noStroke(255);
   } else { stroke(50);
    }

    textLeading((mouseX / width) * 64);// sets the number of pixels to display between each line
    textFont("Courier", 30)
    textSize(12 + (mouseX / width)*72);



    for (var i = 0; i < words.length; i++) {
    fill(random(255));
    text(words[i], random(width), random(height));
    }




    text( words[indext], x, y)







    pop() // restore original drawing settings
}
