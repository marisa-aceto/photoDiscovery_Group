let ghost3 = document.getElementById('ghost3');

window.addEventListener("mousemove", function(event) {
    ghost3.style.left = ((event.clientX) - 50) + "px";
    ghost3.style.top = ((event.clientY) - 50) + "px";
});