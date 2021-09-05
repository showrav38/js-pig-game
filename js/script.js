'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currntScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  // 1. Genereting a rando, dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  debugger;
  diceEl.classList.remove('hidden');
  diceEl.src = `images/dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    
    //add dice to current score
    currntScore = currntScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent = currntScore;

  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currntScore = 0;
    activePlayer = activePlayer === 0?1:0;
  }
});
