// all reviews
const reviews = [
    {
        id: 1,
        img: "https://res.cloudinary.com/ddlvcqggy/image/upload/v1627622411/Vanilla%20Javascript%20Projects/Reviews/person-1_rfzshl_tbhb3x.jpg",
        name: "susan smith",
        job: "web developer",
        info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry."
    },

    {
        id: 2,
        img: "https://res.cloudinary.com/ddlvcqggy/image/upload/v1627622411/Vanilla%20Javascript%20Projects/Reviews/person-2_np9x5l_y81dmc.jpg",
        name: "anna johnson",
        job: "web developer",
        info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },

    {
        id: 3,
        img: "https://res.cloudinary.com/ddlvcqggy/image/upload/v1627622411/Vanilla%20Javascript%20Projects/Reviews/person-3_ipa0mj_vcojpt.jpg",
        name: "peter jones",
        job: "intern",
        info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },

    {
        id: 4,
        img: "https://res.cloudinary.com/ddlvcqggy/image/upload/v1627622410/Vanilla%20Javascript%20Projects/Reviews/person-4_t9nxjt_x3dlhq.jpg",
        name: "bill anderson",
        job: "the boss",
        info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
]

// set review on page load
setReview(reviews[0])

// review current count
let count = 0

// set review
function setReview(review) {
    const { img, name, job, info } = review
    document.getElementById("person").src = img
    document.getElementById("author").innerHTML = name
    document.getElementById("job").innerHTML = job
    document.getElementById("info").innerHTML = info
}

// linear review
function review(currentCount) {
    // count reset
    if (currentCount < 0) count = reviews.length - 1
    else if (currentCount >= reviews.length) count = 0
    setReview(reviews[count])
}

// random reviews
function randomReview() {
    const random = Math.floor(Math.random() * reviews.length)
    count = random // setting count with random so the next & prev buttons can work accordingly.
    setReview(reviews[random])
}

// random button
document.getElementById("random")
    .addEventListener("click", randomReview)

// prev button
const prevId = document.getElementById("prev").id
document.getElementById("prev")
    .addEventListener("click", () => review(--count))

// next button
const nextId = document.getElementById("next").id
document.getElementById("next")
    .addEventListener("click", () => review(++count))
