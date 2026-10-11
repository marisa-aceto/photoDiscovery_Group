let ghost6 = document.getElementById('ghost6');
let mirror = document.getElementById('mirror');
let doll = document.getElementById('doll');
let pumpkin = document.getElementById('pumpkin2');

window.addEventListener("mousemove", function(event) {
    ghost6.style.left = (event.clientX- 50) + "px";
    ghost6.style.top = (event.clientY - 50) + "px";
});

pumpkin.addEventListener("click", function(event) {
    pumpkin.style.transform = "scale(1.2)";
    pumpkin.style.transition = "transform 0.2s";
});