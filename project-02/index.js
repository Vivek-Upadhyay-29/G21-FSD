const randomNumber = Math.floor(Math.random() * 10) + 1;

const buttonsContainer = document.getElementById('buttons');
const resultText = document.getElementById('result');

for (let i = 1; i <= 10; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => guessNumber(i, button));
    buttonsContainer.appendChild(button);
}

function guessNumber(userGuess, button) {
    if (userGuess === randomNumber) {
        button.classList.add('correct');
        resultText.textContent = 'Congratulations! You guessed the correct number!';
    } else {
        button.classList.add('incorrect');
        resultText.textContent = 'Try again!';
    }
}
