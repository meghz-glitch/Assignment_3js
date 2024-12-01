const words = ["strawberry", "kiwi", "mango", "watermelon", "orange"];
const maxAttempts = 6;
let chosenWord;
let displayedWordArray;
let lifeCount;
let guessedLetters;

function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayedWordArray = Array(chosenWord.length).fill("_");
    lifeCount = maxAttempts;
    guessedLetters = [];
    console.log("New Game Started!");
    console.log("Chosen Word:", chosenWord);
    updateDisplay();
    playRound();
}
function playRound() {
    if (lifeCount > 0 && displayedWordArray.includes("_")) {
        let guess = prompt(`Guess a letter & Note: All letters are lowercase. \n\n${displayedWordArray.join(" ")}\nAttempts Left: ${lifeCount}\nGuessed Letters: ${guessedLetters.join(", ")}`);
        if (guess === null) {
            alert("Game cancelled.");
            console.log("Game cancelled by user.");
            return;
        }
        if (guess.length !== 1 || !/^[a-zA-Z]$/.test(guess)) {
            alert("Please enter a single valid letter.");
            console.log("Invalid input detected:", guess);
           continue;
        }
        guess = guess.toLowerCase();
        if (guessedLetters.includes(guess)) {
            alert("You already guessed that letter. Try a different one.");
            console.log("Duplicate guess detected:", guess);
            continue;
        }
        guessedLetters.push(guess);
        console.log("New guessed letter:", guess);
        if (chosenWord.includes(guess)) {
            console.log(`Correct guess! The letter "${guess}" is in the word.`);
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === guess) {
                    displayedWordArray[i] = guess;
                }
            }
            console.log("Updated Displayed Word Array:", displayedWordArray);
        } else {
            lifeCount--;
            console.log(`Incorrect guess. Attempts remaining: ${lifeCount}`);
        }
        updateDisplay();
    }
        if (!displayedWordArray.includes("_")) {
            alert(`Congratulations! You guessed the word: ${chosenWord}`);
            console.log("Game Result: Win!");
        } else if (lifeCount === 0) {
            alert(`Sorry, you've run out of attempts. The word was: ${chosenWord}`);
            console.log("Game Result: Loss.");
        }
    }
function updateDisplay() {
    document.getElementById("displayedWord").textContent = displayedWordArray.join(" ");
    document.getElementById("lifeCount").textContent = lifeCount;
    document.getElementById("guessedLetters").textContent = guessedLetters.join(", ");

    console.log("Displayed Word:", displayedWordArray.join(" "));
    console.log("Attempts Left:", lifeCount);
    console.log("Guessed Letters:", guessedLetters.join(", "));
}
