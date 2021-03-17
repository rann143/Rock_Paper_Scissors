//Global variables
let lowerCaseInput;
let capFirstLet;
let finalSelection;

let plRockWin;
let plRockLoss;
let plPaperWin;
let plPaperLoss;
let plScisWin;
let plScisLoss;
let tie;

let plCount = 0;
let cpCount = 0;

let incorrectEntry;

//let outcome;

//get nodes
const scoreContainer = document.querySelector('#score-container');
const outcomeContainer = document.querySelector('#outcome-container');
const plScore = document.querySelector('#pl-score');
const cpScore = document.querySelector('#cp-score');

//div that shows gameplay outcome
const divOutcome = document.createElement('div');
divOutcome.setAttribute('style', 'margin: 5px;');
outcomeContainer.appendChild(divOutcome);

const playerScore = document.createElement('p');
playerScore.setAttribute('style', 'margin: 5px; text-align: center;');
plScore.appendChild(playerScore);

const computerScore = document.createElement('p');
computerScore.setAttribute('style', 'margin: 5px; text-align: center;');
cpScore.appendChild(computerScore);

divOutcome.textContent = 'Who shall taste Victory?'
playerScore.textContent = plCount;
computerScore.textContent = cpCount;

//set up gameplay buttons
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playRound('Rock', computerPlay());

    outcome = playRound('rock', computerPlay());
    console.log(outcome);
    divOutcome.textContent = outcome;
    

    if (outcome == plRockWin){
        ++plCount;
        playerScore.textContent = plCount;
    } 
    else if (outcome == plRockLoss){
        ++cpCount;
        computerScore.textContent = cpCount;
    }
    else{
        plCount = plCount;
        cpCount = cpCount;
    }

    if (plCount === 5){
        alert("YOU WON THE WHOLE GAME. Well done, Hero");
        plCount = 0;
        cpCount = 0; 
        playerScore.textContent = plCount;
        computerScore.textContent = cpCount;   
    }
    else if (cpCount === 5){
        alert("YOU LOST TO THAT DIRTY WITCH");
        plCount = 0;
        cpCount = 0; 
        playerScore.textContent = plCount;
        computerScore.textContent = cpCount;  
    }
    else{
        plCount = plCount;
        cpCount = cpCount;   
    }
})

const papButton = document.querySelector('#paper');
papButton.addEventListener('click', () => {
    playRound('Paper', computerPlay());

    outcome = playRound('Paper', computerPlay());
    console.log(outcome);
    divOutcome.textContent = outcome;

    if (outcome == plPaperWin){
        ++plCount;
        playerScore.textContent = plCount;
    } 
    else if (outcome == plPaperLoss){
        ++cpCount;
        computerScore.textContent = cpCount;
    }
    else{
        plCount = plCount;
        cpCount = cpCount;
    }

    if (plCount === 5){
        alert("YOU WON THE WHOLE GAME. Well done, Hero");
        plCount = 0;
        cpCount = 0; 
        playerScore.textContent = plCount;
        computerScore.textContent = cpCount;   
    }
    else if (cpCount === 5){
        alert("YOU LOST TO THAT DIRTY WITCH");
        plCount = 0;
        cpCount = 0; 
        playerScore.textContent = plCount;
        computerScore.textContent = cpCount;  
    }
    else{
        plCount = plCount;
        cpCount = cpCount;   
    }
})

const scisButton = document.querySelector('#scis');
scisButton.addEventListener('click', () => {
    playRound('Scissors', computerPlay());

    outcome = playRound('Scissors', computerPlay());
    console.log(outcome);
    divOutcome.textContent = outcome;

    if (outcome == plScisWin){
        ++plCount;
        playerScore.textContent = plCount;
    } 
    else if (outcome == plScisLoss){
        ++cpCount;
        computerScore.textContent = cpCount;
    }
    else{
        plCount = plCount;
        cpCount = cpCount;
    }

    if (plCount === 5){
        alert("YOU WON THE WHOLE GAME. Well done, Hero");
        plCount = 0;
        cpCount = 0; 
        playerScore.textContent = plCount;
        computerScore.textContent = cpCount;   
    }
    else if (cpCount === 5){
        alert("YOU LOST TO THAT DIRTY WITCH");
        plCount = 0;
        cpCount = 0; 
        playerScore.textContent = plCount;
        computerScore.textContent = cpCount;  
    }
    else{
        plCount = plCount;
        cpCount = cpCount;   
    }
})


//Computer play choice (chooses randomly)
function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    play = options[Math.floor(Math.random()*options.length)];
    return play;
}

//capitalize input
function capitalize(playerSelection){
    lowerCaseInput = playerSelection.slice(1).toLowerCase();
    capFirstLet = playerSelection.slice(0,1).toUpperCase();
    finalSelection = capFirstLet + lowerCaseInput;
}


function playRound(playerSelection, computerSelection){

    //Standardize player input
    capitalize(playerSelection);

    //Return win/loss statements
    plRockWin = "You Win! Rock beats Scissors!";
    plRockLoss = "You Lose. Paper beats Rock.";
    plPaperWin = "You Win! Paper beats Rock!";
    plPaperLoss = "You Lose. Scissors beats Paper.";
    plScisWin = "You Win! Scissors beats Paper!";
    plScisLoss = "You Lose. Rock beats Scissors.";
    tie = "You tied. Play again";

    //Gameplay outcomes
    if (finalSelection === "Rock" && computerSelection === "Scissors")
    {
        return plRockWin;
    }
    else if (finalSelection === "Rock" && computerSelection === "Paper") 
    {
        return plRockLoss;
    }
    else if (finalSelection === "Paper" && computerSelection === "Rock")
    {
        return plPaperWin;
    }
    else if (finalSelection === "Paper" && computerSelection === "Scissors")
    {
        return plPaperLoss;
    }
    else if (finalSelection === "Scissors" && computerSelection === "Paper")
    {
        return plScisWin;
    }
    else if (finalSelection === "Scissors" && computerSelection === "Rock")
    {
        return plScisLoss;
    }
    else if (finalSelection === computerSelection)
    {
        return tie;
    }
    else
    {
        incorrectEntry = alert("Please enter \'Rock\', \'Paper\', or \'Scissors\' (not case sensitive)");
       
    }
}


/*function game(){
    let plCount = 0;
    let cpCount = 0;
    let playerSelection;
    let outcome;

    outcome = playRound(playerSelection, computerPlay());
    console.log(outcome);
    if (outcome == plRockWin || outcome == plPaperWin || outcome == plScisWin){
        plCount++
    } 
    else if (outcome == plRockLoss || outcome == plPaperLoss || outcome == plScisLoss){
        cpCount++
    }
    else{
        plCount = plCount;
        cpCount = cpCount;
    }

    if (plCount > cpCount){
        alert("YOU WON THE WHOLE GAME. Computers suck.");    
    }
    else if (plCount < cpCount){
        alert("YOU LOST THE WHOLE GAME");
    }
    else{
        alert("You tied with the computer");
    }
    
}*/