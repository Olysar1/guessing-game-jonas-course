'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//functions to use multiple times:
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('You Won!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayScore(score);
      displayMessage(
        guess < secretNumber
          ? 'Secret Number Is Higher'
          : 'Secret Number Is Lower'
      );
    } else {
      displayMessage('You Lost!');
      displayScore(0);
    }
  }

  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent =
  //       'Secret Number Is Higher';
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     if (guess > 20) {
  //       document.querySelector('.message').textContent =
  //         'Between 1 and 20 Moron.';
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'Secret Number Is Lower';
  //     }
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost.';
  //     document.querySelector('.score').textContent = 0;
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.widtch = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
});
