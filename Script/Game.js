const words=["Mango","Watermelon","Strawberry","Grapes","Orange"];
const maxAttempts=6;
let chosenWord;
let displayedWordArray;
let lifeCount;
let guessedLetters;

function startGame(){
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayedWordArray = Array(chosenWord.length).fill("_");
    lifeCount = maxAttempts;
    guessedLetters = [];

    console.log("New Game Started!");
    console.log("Chosen Word:",chosenWord);
    console.log("Initial Displayed Word:",displayedWordArray.join(" "));
    console.log("lifeCount:", maxAttempts);

    updateDisplay();

    while (lifeCount > 0 && displayedWordArray.includes("_")) {
        let guess = prompt(`Guess a letter:\n\n${displayedWordArray.join(" ")}\nlifeCount: ${lifeCount}\nGuessedLetters:${guessedLetters.join(",")}`);

        if(guess === null) {
            alert("Game cancelled.");
            console.log("Game cancelled by user.");
            return;
        }

        guess = guess.toLowerCase();
        if(guess.length !== 1 ||!/^[a-z]$/.test(guess)){
            alert("Please enter a sigle letter.");
            console.log("Invalid input:",guess);
            continue;
        }

    

    if(guessedLetters.includes(guess)){
    alert("You have already guessed that letter.Try a different one.");
    console.log("Duplicate guess:",guess);
    continue;
}

    guessedLetters.push(guess);
    console.log("Guessed Letter:", guess);

    if (chosenWord.includes(guess)) {
        console.log(`Correct! The letter "${guess}" is in the word.`);

        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === guess) {
                displayedWordArray[i] = guess;
            }
        }
    } else {
        lifeCount--;
        console.log(`Incorrect. lifeCount: ${lifeCount}`);
    }

    updateDisplay();
}

    if (!displayedWordArray.includes("_")) {
       alert(`Congratulation! You guessed the word: ${chosenWord}`);
       console.log("Game Result: Win!");
}   else if (lifeCount === 0) {
       alert(`Game over! The word was: ${chosenWord}`);
       console.log("Game Result: Loss.");
    }
}

function updateDisplay() {
    document.getElementById("displayedWord").textContent = displayedWordArray.join(" ");
    document.getElementById("lifeCount").textContent = lifeCount;
    document.getElementById("guessedLetters").textContent = guessedLetters.join(",");


    console.log("Current Word:", displayedWordArray.join(" "));
    console.log("lifeCount:", lifeCount);
    console.log("Guessed Letters:", guessedLetters.join(","));

}
