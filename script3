let ghost = document.getElementById('ghost');
ghost.addEventListener("click", function() {
    window.location.href = "index3.html";
});

let candy = document.getElementById('candy');
candy.addEventListener("click", function() {
    window.location.href = "index3.html";
});

function moveGhost(){
    let x = clientX - ghost.offsetWidth / 2;
    let y = clientY - ghost.offsetHeight / 2;
    x = Math.max(25, Math.min(window.innerWidth - 25, x));
    y = Math.max(25, Math.min(window.innerHeight - 25, y));

    ghost.style.left = x + 'px';
    ghost.style.top = y + 'px';
}

function getCandy(){
    
}