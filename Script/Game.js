const words=["Mango","Watermelon","Strawberry","Grapes","Orange"];
const maxAttempts=6;
let chosenWord;
let lifeCount;
let guessedLetters;

function startGame(){
    chosenWord=words[Math.floor(Math.random()*words.length)];
    displayedWordArray=Array(chosenWord.length).fill("_");
    lifeCount=maxAttempts;
    guessedLetters=[];

    console.log("New Game Started");
    console.log("Chosen Word:",chosenWord);
    console.log("Initial Displayed Word:",displayedWordArray.join(""));
    console.log("Max Attempts:",maxAttempts);

    updateDisplay();
    while(lifeCount > 0 && displayedWordArray.includes("_")){
        let guess=prompt(`Guess a letter:\n\n${displayedWordArray.join("")}\nlifeCount:${lifeCount}\nGuessedLetters:${guessedLetters.join(",")}`);
        if(guess===null){
            alert("Game cancelled by user.");
            break;
        }

        if(guess.length!== 1||!/^[a-zA-Z]$/.test(guess)){
            alert("Please enter a sign letter.");
            console.log("invalid input:",guess);
            continue;
        }

        guess=guess.toLowerCase();
if(guessedLetters.includes(guess)){
    alert("You have already guessed that letter.Try a different one.");
    console.log("Duplicate guess:",guess);
    continue
}
guessedLetters.push(guess);
    }



}
