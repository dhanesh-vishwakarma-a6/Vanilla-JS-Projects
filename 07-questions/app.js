// *Method 01 - using selector inside the elements
const questions = document.querySelectorAll(".question")

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn")

    // show the question text
    btn.addEventListener("click", function () {
        // hides other question text (if any left open)
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text")
            }
        })
        // shows the question text
        question.classList.toggle("show-text")
    })
})

// * Method 02 - Traversing the DOM
// const btns = document.querySelectorAll(".question-btn")

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (event) {
//         const question = event.currentTarget.parentElement.parentElement
//         question.classList.toggle("show-text")
//     })
// })
