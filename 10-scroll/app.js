/**
 * * Element.getBoundingClientRect()
 * returns the size of an element and its position relative to the viewport.
 * 
 * * pageYOffset
 * is a read only window property that returns the number of pixels the document has been scrolled vertically.
 * 
 * * offsetTop
 * A Number, representing the top position of the element, in pixels
 */


const date = document.getElementById("date")
const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")
const navbar = document.getElementById("nav")
const topLink = document.querySelector(".top-link")
const scrollLinks = document.querySelectorAll(".scroll-link")


// * ----- set date -----
date.innerHTML = new Date().getFullYear()

// * ----- close links -----
navToggle.addEventListener("click", function () {
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0
    }
})


// * ----- fixed navbar -----
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    // gets the fixed navbar on top after past scrolling the transparent navbar
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav")
    }

    // shows the top link button after certain scroll height
    if (scrollHeight > 500) {
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }
})


// * ----- smooth scroll -----
// select links
