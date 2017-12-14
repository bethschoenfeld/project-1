$(document).ready(function () {
    console.log("ready!");

    const words = 'SUNFLOWER';
    console.log(words)
    const answerSplit = words.split(``)
    console.log(answerSplit)

    const answerFinal = answerSplit.map((letter) => {
        return $('.answer-container').append(`<span class="answer">${letter}</span>`)
    })

    $(`.letters`).click(function (event) {
        const clickedLetter = event.target.textContent
        console.log(clickedLetter)
        if (answerSplit.indexOf(clickedLetter) >= 0) {
            $(event.target).css('color', 'gray')
            $(event.target).off()
        }
        else {
            $(event.target).css('color', 'red')
            $(event.target).off()
        };
    })
});