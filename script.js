const words = ["elephant", "constant", "javascript", "mountain", "umbrella", "dragon", "horizon", "avocado", "oxygen", "mystery"];
var guessWord;
var wordArray;
var tries;

const playerParagraph = document.getElementById("playerParagraph");
const userInput = document.getElementById("userInput");
const hangImage = document.getElementById("hangImage");
const messagingPar = document.getElementById("messagingPar");

initGame();


function initGame() {
    tries = 7;
    hangImage.src = "./images/step-0.png";
    guessWord = words[generateRandomNumber()];
    wordArray = [];
    for (let i = 0 ; i < guessWord.length ; i++) { 
        wordArray.push('-');
    }

    messagingPar.textContent = `You have ${tries} tries`;
    playerParagraph.textContent = "You must find the word : ";
    for (let i = 0 ; i < wordArray.length ; i++) {
        playerParagraph.textContent += `${wordArray[i]} `;
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random()*10);
}

function playerGuessing() {
    let usrInp = userInput.value;

    if (usrInp.length != 1) {
        window.alert("You must enter 1 letter only each time");
        return;
    }

    let found = false;
    for (let i = 0 ; i < guessWord.length ; i++) {
        if (usrInp == guessWord[i]) {
            found = true;
            wordArray[i] = usrInp;
        }
    }

    if (found == false) {
        tries--;
        hangImage.src = `./images/step-${7-tries}.png`;
        if (tries == 0) {
            messagingPar.textContent = `Sorry you lose :(`;
        }
        else
            messagingPar.textContent = `wrong , you have ${tries} tries`;
    }
    else {
        let win = true;
        for (let i = 0 ; i < guessWord.length ; i++) {
            if (guessWord[i] != wordArray[i]) {
                win = false;
                break;
            }
        }

        if (win == true) {
            playerParagraph.textContent = "You win congratulation";
            messagingPar.textContent = "You win congratulations";
        }
        else {
            playerParagraph.textContent = "You must find the word : ";
            for (let i = 0 ; i < wordArray.length ; i++) {
                playerParagraph.textContent += `${wordArray[i]} `;
            }
        }

    }
}

function reset() {
    initGame();
}