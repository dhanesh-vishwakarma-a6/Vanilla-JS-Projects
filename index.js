function toggleSidebar() {
    let sidebar = document.getElementById("sidebar")
    if (sidebar.style.display === "") {
        sidebar.style.display = "block"
    } else {
        sidebar.style.display = ""
    }
}

document.getElementById("btn-sidebar")
    .addEventListener("click", toggleSidebar)


document.getElementById("btn-close")
    .addEventListener("click", toggleSidebar)

