const colors = [
    "#c0392b",
    "#e74c3c",
    "#9b59b6",
    "#8e44ad",
    "#2980b9",
    "#3498db",
    "#1abc9c",
    "#16a085",
    "#27ae60",
    "#2ecc71",
    "#f1c40f",
    "#f39c12",
    "#e67e22",
    "#ecf0f1",
    "#bdc3c7",
    "#95a5a6",
    "#7f8c8d",
    "#34495e",
    "#273746"
]

function flipColor() {
    const random = Math.floor(Math.random() * colors.length)
    const color = colors[random]
    document.body.style.backgroundColor = color
    document.getElementById("color").innerHTML = color
}

document.getElementById("clickme")
    .addEventListener("click", flipColor)