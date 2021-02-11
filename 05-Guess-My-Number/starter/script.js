// 'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number! 🌟';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let number = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      displayMessage('Guess Something');
    } else if (guess === number) {
      displayMessage('You Win');
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      //when guess is wrong
    } else if (guess !== number) {
      guess > number
        ? (displayMessage('Too High'))
        : (displayMessage('Too Low'));
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('You Lose');;
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.ceil(Math.random() * 20);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start Guessing');;
});
