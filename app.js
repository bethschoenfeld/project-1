$(document).ready(function () {
    console.log("ready!");

    const words = 'SUNFLOWER';
    console.log(words)
    const answerSplit = words.split(``)
    console.log(answerSplit)

    const answerFinal = answerSplit.map(function(letter) {
    return $(`.answer-container`).append(`<span class="answer hidden" ${letter}>${letter}</span>`)
     })

    $(`.letters`).click(function (event) {
        const clickedLetter = event.target.textContent
        console.log(clickedLetter)
        if (answerSplit.indexOf(clickedLetter) >= 0) {
            $(event.target).css('color', 'gray')
            $(event.target).off()
            $(`.${clickedLetter}`).removeClass('hidden')
                //if the letter that was clicked is in answerSplit AND turned gray, then change the clicked letter black.
        }
        else {
            $(event.target).css('color', 'red')
            $(event.target).off()
        }
    })
})