
/*
// document.querySelector ('.message').textContent;
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.box').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() *20) + 1;
let score = 20;
let highScore = 0;



document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'No number! 🚫';

    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!🎉';
        document.querySelector('.box').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347' // ?
        document.querySelector('.box').style.width = '20rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess > secretNumber){
    if(score > 1){
        document.querySelector('.message').textContent = 'Too high! 🫨';
        document.querySelector('body').style.backgroundColor = '#222'
        score--;
        document.querySelector('.score').textContent = score ; 

    } else {
        document.querySelector('.message').textContent = 'You lost the game! 🫥';
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.score').textContent = 0;
    }
    } else if (guess < secretNumber){
    if(score > 1){
            document.querySelector('.message').textContent = 'Too low! 😮‍💨';
            document.querySelector('body').style.backgroundColor = '#222'
            score--;
            document.querySelector('.score').textContent = score ; 
    } 
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() *20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.box').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
})