let book1 = document.getElementById('book1');
book1.addEventListener("click", function() {
    ghostActivity(book1);
    window.location.href = "index3.html";
});

let book2 = document.getElementById('book2');
book2.addEventListener("click", function() {
    ghostActivity(book2);
    window.location.href = "index4.html";
});

let ghost = document.getElementById('ghost2');

function ghostActivity(book){
    book.classList.add("taken");
    book1.style.pointerEvents = "none"
    book2.style.pointerEvents = "none"
      
}

let ghostRect = ghost.getBoundingClientRect();
let ghostX = ghostRect.left + ghostRect.width / 2;
let ghostY = ghostRect.top + ghostRect.height / 2;

book.style.left = bookRect.left + "px";
book.style.top = bookRect.top + "px";
book.style.margin = "0";
book.style.right = "auto";
book.style.bottom = "auto";

book.style.left = ghostX - bookRect.width / 2 + "px";
book.style.top = ghostY - bookRect.height / 2 + "px";

ghost.book.style.transform = "translate(-50%, -50%)";
book.style.opacity = "0";

setTimeout(function() {
    if (choice ==="book1"){
        window.location.href = "index3.html";
    } else if (choice ==="book2"){
        window.location.href = "index4.html";
    }
}); 