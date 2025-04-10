let randomNo = parseInt((Math.random()) * 100 + 1);

const userinput = document.getElementById('userinput');

const submitbtn = document.getElementById('submitbtn');


const restartbtn = document.getElementById('restartbtn');

const remainattempt = document.getElementById('remain-attempt');

const guessarrayjs = document.getElementById('guessarray');

const hint = document.getElementById('hint');


const gameresult = document.getElementById('gameresult');

// all required element got selected now the game is started.

let guessnum = 1;

let playgame = true;

// Here we define different functions and assigned their tasks separately.

if (playgame) {
    submitbtn.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateguess(guess);
    });
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number.');
    } else if (guess < 1) {
        alert('Please enter the number greater than 0.');
    } else if (guess > 100) {
        alert('Please enter a number less than 100.');
    } else {
        if (guessnum === 10) {
            displayguess(guess);
            displaymsg(`Game Over. Random number was ${randomNo}.`,false);
            endgame()
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess( guess , isCorrect ) {
    if (guess === randomNo) {
        displaymsg('Correct Guess: "Congratulations! You have guessed it right!"', true);
        endgame();
    } else if (guess > randomNo) {
        displaymsg('Too High: "Oops, your guess is too high. Try a smaller number!"', false);
    } else if (guess < randomNo) {
        displaymsg('Too Low: "Oops, your guess is too low. Try a bigger number!"', false);
    }
}

function displayguess(guess) {
    userinput.value = '';
    guessarrayjs.innerHTML += `${guess} `;
    guessnum++;
    remainattempt.innerHTML = `${11 - guessnum}`;
}

function displaymsg(message,isCorrect) {
    gameresult.style.display = 'block';
    gameresult.innerHTML = `${message}`;
    gameresult.style.color = isCorrect ? '#FFD700' : '#E74C3C';
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled','');
    submitbtn.setAttribute('disabled','');
    restartbtn.style.display = 'inline-block';
    hint.style.display = 'none';
    playgame = false;
}

restartbtn.addEventListener('click', function (e) {
    e.preventDefault();
    startgame();
});

function startgame() {
    randomNo = parseInt(Math.random() * 100 + 1);
    guessnum = 1;
    remainattempt.innerHTML = `${11 - guessnum}`;
    userinput.removeAttribute('disabled');
    submitbtn.removeAttribute('disabled');
    gameresult.style.display = 'none';
    restartbtn.style.display = 'none';
    hint.style.display = 'block';
    guessarrayjs.innerHTML = '';
    playgame = true;
};



