let ghost3 = document.getElementById('ghost3');
let tracks = document.getElementById('tracks');
let paper = document.getElementById('wallPaper');
let wolf = document.getElementById('werewolf');
let tracksYes = false;
let wallYes = false;
let wolfYes = false;
let button1 = document.getElementById('vampButton');
let button2 = document.getElementById('wolfButton');


window.addEventListener("mousemove", function(event) {
    ghost3.style.left = (event.clientX- 50) + "px";
    ghost3.style.top = (event.clientY - 50) + "px";
});

tracks.addEventListener("click", function() { 
    tracksYes = true;
    tracks.style.border = "5px solid white";

    if (wallYes && tracksYes && wolfYes) {
        button1.style.opacity = '1';
        button2.style.opacity = '2';
        button1.addEventListener("click", function() { 
            window.location.href = "index6.html";
        });
        button2.addEventListener("click", function() { 
            window.location.href = "index9.html";
        });
    }
});

paper.addEventListener("click", function() { 
    wallYes = true;
    paper.style.border = "5px solid white";

    if (wallYes && tracksYes && wolfYes) {
        button1.style.opacity = '1';
        button2.style.opacity = '2';
        button1.addEventListener("click", function() { 
            window.location.href = "index6.html";
        });
        button2.addEventListener("click", function() { 
            window.location.href = "index9.html";
        });
    }
});

wolf.addEventListener("click", function() { 
    wolfYes = true;
    wolf.style.border = "5px solid white";

    if (wallYes && tracksYes && wolfYes) {
        button1.style.opacity = '1';
        button2.style.opacity = '2';
        button1.addEventListener("click", function() { 
            window.location.href = "index6.html";
        });
        button2.addEventListener("click", function() { 
            window.location.href = "index9.html";
        });
    }
});

