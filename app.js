$( document ).ready(function() {
    console.log( "ready!" );
    
var words = ['peony', 'sunflower'];

function answerWord () {
    for (i = 0, len = words.length, text = ""; i < len; i++) {
        text += words[i] + "<br>";
    }
}

});