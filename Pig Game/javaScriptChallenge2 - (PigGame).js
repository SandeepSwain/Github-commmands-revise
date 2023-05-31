'use strict';

const score0El = document.querySelector('#score--0')
const score1EL = document.querySelector('#score--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;


// Starting Conditions
score0El.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Roll Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for  rolled 1:
        if (dice !== 1) {
            // If  true
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            // switch to next player
            // document.getElementById(`current--${activePlayer}`).textContent = 0;
            // currentScore = 0;
            // activePlayer = activePlayer === 0 ? 1 : 0;
            // player0El.classList.toggle('player--active');
            // player1El.classList.toggle('player--active');
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to the Active Player's score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if current Player's score >= 100
        if (scores[activePlayer] >= 100) {
            playing = false;

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        // 3. Switch to next Player
        else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', function () {
    score0El.textContent = 0;
    score1EL.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
})