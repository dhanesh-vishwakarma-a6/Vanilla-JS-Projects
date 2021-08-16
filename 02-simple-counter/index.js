let value = 0
let newColor = ""

// color HEX values
const colorRed = "#e74c3c"
const colorGreen = "#1abc9c"
const colorDarkBlue = "#102a42"

// color & value handler
function updateColor(value) {
    if (value > 0) newColor = colorGreen
    else if (value < 0) newColor = colorRed
    else newColor = colorDarkBlue

    document.getElementById("value").style.color = newColor
}

function updateValue(buttonId) {
    if (buttonId == "increase") value += 1
    else if (buttonId == "decrease") value -= 1
    else if (buttonId == "reset") value = 0

    document.getElementById("value").innerHTML = value
    updateColor(value)
}

// 
const increaseId = document.getElementById("increase").id
document.getElementById("increase")
    .addEventListener("click", () => { updateValue(increaseId) })

const decreaseId = document.getElementById("decrease").id
document.getElementById("decrease")
    .addEventListener("click", () => { updateValue(decreaseId) })

const resetId = document.getElementById("reset").id
document.getElementById("reset")
    .addEventListener("click", () => { updateValue(resetId) })
