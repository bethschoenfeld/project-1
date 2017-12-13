$(document).ready(function () {
    console.log("ready!");

    $(`.letters`).children()

    let words = ['peony', 'sunflower'];
    let text = "";
    let i;

    function answerWord() {
        for (i = 0, len = words.length, text = ""; i < len; i++) {
            text += words[i] + "<br>";
        }
    }

});