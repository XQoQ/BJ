// Build a BlackJack Game

// variables representing two cards 
let firstCard;
let secondCard;
// player'hand
let cards = [];
let scores = [];
if (localStorage.scores) {
    scores = JSON.parse(localStorage.scores);
} else {
    scores = [];
    localStorage.scores = JSON.stringify(scores);
}
let sum = 0;
let hasBlackJack = false;
let isAlive = false; 
let message = "";
let player = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let scoresEl = document.getElementById("previous-scores");
let playerEL = document.getElementById("player-el");

function renderGame() {
    sum = 0;
    cardsEl.textContent = "";
    if (isAlive) {
        console.log(cards);
        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + ", ";
            sum += cards[i];
        }
    }

    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum == 21) {
        hasBlackJack = true;
        recordScore(sum);
        message = "Wohoo! You've got Blackjack! 🥳";
    } else {
        isAlive = false;
        recordScore(sum);
        message = "You're out of the game! 😭";
    }
    
    messageEl.innerHTML = message;
    sumEl.innerHTML = "Sum: " + sum;
    scoresEl.innerHTML = "Previous Scores: " + scores;
} 


function recordScore(score) {
    if (scores.length < 4) {
        scores.push(score);
    } else {
        scores.shift();
        scores.push(sum);
    }

    localStorage.scores = JSON.stringify(scores);
}


function newCard() {
    if (isAlive) {
        let card = getRandomCard();
        cards.push(card);
        renderGame();
    }
}


function startGame() {
    isAlive = true;
    cards = [];
    if (!player) {
        playerEL.innerHTML = "Player: " + prompt("What is your name?")
        player = true;
    }
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    renderGame();
}


function getRandomCard() {
    let randint = Math.floor(Math.random() * 13) + 1
    if (randint == 1) {
        return 11;
    } else if (randint > 9) {
        return 10;
    } else {
        return randint;
    }
}
