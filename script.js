'use strict';
let secretnumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
let guess_no;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}    

document.querySelector('.check').addEventListener('click', () => {
    guess_no = Number(document.querySelector('.guess').value);
    console.log(guess_no);

    if (!guess_no){
      displayMessage('no number!');
    }
    else if(guess_no === secretnumber) {
        displayMessage('correct number!');
        document.querySelector('.number').textContent = secretnumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess_no !== secretnumber){
        if(score>1){
            displayMessage(guess_no > secretnumber ? 'too high!' : 'too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You Lost!');
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretnumber = Math.trunc(Math.random()*20)+1;
    displayMessage('start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});