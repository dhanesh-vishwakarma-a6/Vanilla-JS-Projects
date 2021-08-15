let modal = document.getElementById("main-modal")

function openModal() {
    modal.style.display = "block"
}

function closeModal() {
    modal.style.display = ""
}

document.getElementById("btn-modal").addEventListener("click", openModal)

document.getElementById("main-modal-close")
    .addEventListener("click", closeModal)
