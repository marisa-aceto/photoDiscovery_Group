let book1 = document.getElementById('book1');
book1.addEventListener("click", function() {
    ghostActivity(book1);
});

let book2 = document.getElementById('book2');
book2.addEventListener("click", function() {
    ghostActivity(book2);
});

function ghostActivity(book){
    book.classList.add("taken");
    setTimeout(function() {
        if (choice ==="book1"){
            window.location.href = "index3.html";
        } else if (choice ==="book2"){
            window.location.href = "index4.html";
        }
    });   
}