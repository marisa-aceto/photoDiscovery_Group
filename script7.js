let ghost6 = document.getElementById("ghost6");
let pumpkin = document.getElementById("pumpkin2");
let mirror = document.getElementById("mirror");
let doll = document.getElementById("doll");
let hat = document.getElementById("witch-hat");
let puzzle = document.getElementById("puzzle");
let room7Title = document.getElementById("room7Title");

let mirrorNum = 3;
let dollNum = 2;
let hatNum = 1;
let puzzleSolved = false;

window.addEventListener("mousemove", function(event) {
    ghost6.style.left = (event.clientX - 50) + "px";
    ghost6.style.top = (event.clientY - 50) + "px";
});

pumpkin.addEventListener("click", function() {
    pumpkin.style.display = "none";
    puzzle.classList.remove("hidden");

    room7Title.textContent =
        "The pumpkin vanishes, revealing a doll, a mirror, and a witch's hat. Make all three match to reveal the way forward...";
});

function changeMirror() {
    if (puzzleSolved) return;

    mirrorNum = Math.floor(Math.random() * 3) + 1;
    mirror.src = "images/puzzleImg" + mirrorNum + ".png";
    checkPuzzle();
}

function changeDoll() {
    if (puzzleSolved) return;

    dollNum = Math.floor(Math.random() * 3) + 1;
    doll.src = "images/puzzleImg" + dollNum + ".png";
    checkPuzzle();
}

function changeHat() {
    if (puzzleSolved) return;

    hatNum = Math.floor(Math.random() * 3) + 1;
    hat.src = "images/puzzleImg" + hatNum + ".png";
    checkPuzzle();
}

function checkPuzzle() {
    if (mirrorNum === dollNum && dollNum === hatNum) {
        puzzleSolved = true;

        room7Title.textContent =
            "The objects fall into perfect harmony. A hidden passage opens, revealing the way forward...";
             
        keyContainer.classList.remove("hidden");
    }
}

mirror.addEventListener("click", changeMirror);
doll.addEventListener("click", changeDoll);
hat.addEventListener("click", changeHat);