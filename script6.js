let ghost5 = document.getElementById('ghost5');

window.addEventListener("mousemove", function(event) {
    ghost5.style.left = (event.clientX- 50) + "px";
    ghost5.style.top = (event.clientY - 50) + "px";
});