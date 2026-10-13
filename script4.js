let candle1 = document.getElementById("candle1");
let candle2 = document.getElementById("candle2");
let candle3 = document.getElementById("candle3");

let hint1 = document.getElementById("hint1");
let hint2 = document.getElementById("hint2");
let hint3 = document.getElementById("hint3");

let codeInput = document.getElementById("codeInput");
let unlockButton = document.getElementById("unlockButton");
let message = document.getElementById("message");
let exit = document.getElementById("exit");
let room4Title = document.getElementById("room4Title");

let digit1 = Math.floor(Math.random() * 10);
let digit2 = Math.floor(Math.random() * 10);
let digit3 = Math.floor(Math.random() * 10);

let codeSolved = false;


candle1.addEventListener("click", function() {
    candle1.classList.add("lit");
    hint1.textContent = digit1.toString();
    hint1.classList.add("revealed");
});

candle2.addEventListener("click", function() {
    candle2.classList.add("lit");
    hint2.textContent = digit2.toString();
    hint2.classList.add("revealed");
});

candle3.addEventListener("click", function() {
    candle3.classList.add("lit");
    hint3.textContent = digit3.toString();
    hint3.classList.add("revealed");
});

function checkCode() {
    if (codeSolved) return;

    let enteredCode = codeInput.value.trim();

    if (enteredCode === `${digit1}${digit2}${digit3}`) {
        codeSolved = true;

        message.textContent = "Correct! The door has unlocked.";
        room4Title.textContent =
            "The flames burn brightly. The door slowly creaks open...";

        exit.classList.remove("hidden");
    } else {
        message.textContent =
            "Incorrect code. Let the candlelight guide you...";
    }
}

unlockButton.addEventListener("click", checkCode);

codeInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkCode();
    }
});