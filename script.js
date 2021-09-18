'use strict';
const secretnumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let guess_no;

document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener('click', () => {
    guess_no = Number(document.querySelector('.guess').value);
    console.log(guess_no);

    if (!guess_no){
      document.querySelector('.message').textContent = 'no number!'; 
    }
    else if(guess_no === secretnumber) {
        document.querySelector('.message').textContent = 'correct number!';

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    else if(guess_no > secretnumber) {
        if(score>1){
            document.querySelector('.message').textContent = 'too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Lost!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    else if(guess_no < secretnumber) {
        if(score>1){
            document.querySelector('.message').textContent = 'too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Lost!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
});