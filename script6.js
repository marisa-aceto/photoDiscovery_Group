let ghost5 = document.getElementById('ghost5');
let bat1 = document.getElementById('bat1');
let bat2 = document.getElementById('bat2');
let bat3 = document.getElementById('bat3');
let bat4 = document.getElementById('bat4');
let bat5 = document.getElementById('bat5');
let vampire2 = document.getElementById('vampire2');
let quote = document.getElementById('room1Quote');
let bat1Yes = false;
let bat2Yes = false;
let bat3Yes = false;
let bat4Yes = false;
let bat5Yes = false;
let albert = document.getElementById('catAlbert');

window.addEventListener("mousemove", function(event) {
    ghost5.style.left = (event.clientX- 50) + "px";
    ghost5.style.top = (event.clientY - 50) + "px";
});

bat1.addEventListener("click", function() { 
    bat1Yes = true;
    bat1.style.mixBlendMode = 'difference';
    bat1.style.opacity = '1';
    if (bat1Yes && bat2Yes && bat3Yes && bat4Yes && bat5Yes) {
        window.location.href = "index8.html";
    }
});

bat2.addEventListener("click", function() { 
    bat2Yes = true;
    bat2.style.opacity = '1';
    if (bat1Yes && bat2Yes && bat3Yes && bat4Yes && bat5Yes) {
        window.location.href = "index8.html";
    }
});

bat3.addEventListener("click", function() { 
    bat3Yes = true;
    bat3.style.opacity = '1';
    if (bat1Yes && bat2Yes && bat3Yes && bat4Yes && bat5Yes) {
        window.location.href = "index8.html";
    }
});

bat4.addEventListener("click", function() { 
    bat4Yes = true;
    bat4.style.mixBlendMode = 'difference';
    bat4.style.opacity = '1';
    if (bat1Yes && bat2Yes && bat3Yes && bat4Yes && bat5Yes) {
        window.location.href = "index8.html";
    }
});

bat5.addEventListener("click", function() { 
    bat5Yes = true;
    bat5.style.mixBlendMode = 'difference';
    bat5.style.opacity = '1';
    if (bat1Yes && bat2Yes && bat3Yes && bat4Yes && bat5Yes) {
        window.location.href = "index8.html";
    }
});

vampire2.addEventListener("click", function() { 
    quote.style.opacity = '1';
});

albert.addEventListener("click", function() { 
    window.location.href = "index9.html";
});