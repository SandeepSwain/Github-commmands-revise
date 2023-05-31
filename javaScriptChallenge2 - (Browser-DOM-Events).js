'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Contact message 🤠';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 23;
// console.log(document.querySelector('.guess').value);

// Game Logic
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let highScore = 0;
let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const checkValue = Number(document.querySelector('.guess').value);
    console.log(checkValue);
    console.log(checkValue, typeof checkValue);

    if (!checkValue) {
        // document.querySelector('.message').textContent = '⛔ No Number';
        displayMessage('⛔ No Number');
    }
    // if guess is right 
    else if (checkValue === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number 🤠';
        displayMessage('Correct Number 🤠');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "Green";
        document.querySelector('.number').style.color = "Red";
        document.querySelector('.container-details').style.border = "4px solid Red";

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // if guess is wrong
    else if (checkValue != secretNumber) {
        if (score > 0) {
            // document.querySelector('.message').textContent = checkValue > secretNumber ? 'Too High 📈' : 'Too Low 📉';
            displayMessage(checkValue > secretNumber ? 'Too High 📈' : 'Too Low 📉');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = 'You Lost the Game 😭';
            displayMessage('You Lost the Game 😭');
        }
    }

    // IF GUESS IS HIGHER SIDE

    // else if (checkValue > secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'Too High 📈';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You Lost the Game 😭';
    //     }
    // }

    // IF GUESS IS LOWER SIDE

    // else if (checkValue < secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'Too Low 📉';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You Lost the Game 😭';
    //     }
    // }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    // document.querySelector('.message').textContent = '🤔 Start Guessing...';
    displayMessage('🤔 Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = "White";
    document.querySelector('.number').style.color = "Black";
    document.querySelector('.container-details').style.border = "1px dotted Red";
    document.querySelector('.highscore').textContent = highScore;
});

