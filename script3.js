const choiceContainer = document.getElementById("choice-container");

let ghost = document.getElementById('ghost');
ghost.addEventListener("click", function() {
    window.location.href = "index3.html";
});

let candy = document.getElementById('candy');
candy.addEventListener("click", function() {
let candy1 = document.getElementById('candy');
candy1.addEventListener("click", function() {
    window.location.href = "index5.html";
});
});

let candy2 = document.getElementById('candy2');
candy2.addEventListener("click", function() {
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
    
function ghostActivity(candy){
    candy.classList.add("taken");
    candy.style.pointerEvents = "none"
}

let ghostRect = ghost.getBoundingClientRect();
let ghostX = ghostRect.left + ghostRect.width / 2;
let ghostY = ghostRect.top + ghostRect.height / 2;

candy.style.left = bookRect.left + "px";
candy.style.top = bookRect.top + "px";
candy.style.margin = "0";
candy.style.right = "auto";
candy.style.bottom = "auto";

candy.style.left = ghostX - bookRect.width / 2 + "px";
candy.style.top = ghostY - bookRect.height / 2 + "px";

ghost.book.style.transform = "translate(-50%, -50%)";
candy.style.opacity = "0";

setTimeout(function() {
    if (choice ==="candy1"){
        window.location.href = "index5.html";
    } else if (choice ==="candy2"){
        
       endGame();
    }
}); 


function endGame(){
    choiceContainer.innerHTML = `
    <button onclick="resetGame()"> Play Again</button>
    `;
}

function resetGame(){
      
}