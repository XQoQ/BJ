// Build a BlackJack Game

// variables representing two cards 
let firstCard = 10;
let secondCard = 4;
// player'hand
const cards = [];
cards[0] = firstCard;
cards[1] = secondCard;
//challenge #1
//create a new variable and set it to the sum of the two cards 
let sum = 0;
let hasBlackJack = false;
let isAlive = true; 
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

//chalenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards
//starter code
if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
} else if (sum == 21) {
    hasBlackJack = true;
    message = "Wohoo! You've got Blackjack! 🥳";
} else {
    message = "You're out of the game! 😭";
    isAlive = false;
}

function renderGame() {
    messageEl.innerHTML = message;
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i];
    }
    sumEl.innerHTML = "Sum: " + sum;
}

function newCard() {
    let card = getRandomCard();
    sum += cards[i];
    cards.push(card);
    renderGame();
}

console.log(message);
console.log(cards)
