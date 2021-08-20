const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

about.addEventListener("click", function (event) {
    const id = event.target.dataset.id
    if (id) {
        // tabs
        btns.forEach(function (btn) {
            //  inactive all other tabs
            btn.classList.remove("active")
            // active the current tab
            event.target.classList.add("active")
        })

        // articles
        articles.forEach(function (article) {
            // inactive all other articles
            article.classList.remove("active")
            // active the current article
            const content = document.getElementById(id)
            content.classList.add("active")
        })
    }
})