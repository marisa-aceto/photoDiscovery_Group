let pumpkin1 = document.getElementById('pumpkin1');
let ghost1 = document.getElementById('ghost1');
let ghost2 = document.getElementById('ghost2');
let ghost1Pos = ghost1.getBoundingClientRect().top;
let ghost2Pos = ghost1.getBoundingClientRect().top;
let ghost1Click = false;
let ghost2Click = false;

pumpkin1.addEventListener("click", function() {
    window.location.href = "index2.html";
});

ghost1.addEventListener("click", function() {
    ghost1Click = true;
    if (ghost1Click && (ghost1Pos+ window.scrollY) >= 1200) {
        window.location.href = "index5.html";
        ghost1Click = false;
    }
});

ghost2.addEventListener("click", function() {
    ghost2Click = true;
    if (ghost2Click && (ghost2Pos + window.scrollY) >= 1100) {
        window.location.href = "index6.html";
        ghost2Click = false;
    }
});



