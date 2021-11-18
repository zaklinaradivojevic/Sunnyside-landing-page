function openMenu() {
    document.getElementById("toggle").classList.toggle("show");
    document.getElementById("close").style.display = "block";
}
function closeMenu() {
    document.getElementById("toggle").classList.remove("show");
    document.getElementById("close").style.display = "none";

}