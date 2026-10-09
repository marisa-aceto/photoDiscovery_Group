let ghost4 = document.getElementById('ghost4');

window.addEventListener("mousemove", function(event) {
    ghost4.style.left = (event.clientX- 50) + "px";
    ghost4.style.top = (event.clientY - 50) + "px";
});