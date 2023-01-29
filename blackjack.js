let sum = 0;
let alive = false;
let blackjack = false;
let message = "";
let cards = [];
let money = document.querySelector("#money");
let win = 30;
let dollar = 0;

function startGame() {
    alive = true;
    card1 = Random_No();
    card2 = Random_No();
    cards = [card1, card2];
    sum = card1 + card2;

    renderGame();
}

function renderGame() {
    document.getElementById("cards").innerHTML = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        document.getElementById("cards").innerHTML += cards[i] + " ";
    }


    if (sum < 21) {
        message = "Want to try again";
        alive = true;
    } else if (sum === 21) {
        message = "You Won";
        blackjack = true;
        dollar += win;
        money.innerHTML = "$" + dollar;
    } else {
        message = "You lose";
        alive = false;
    }
    document.getElementById("message").innerHTML = message;
    document.getElementById("sum").innerHTML = "Sum: " + sum;
}

function newCard() {
    if (alive === true && sum < 21) {

        card = Random_No();
        cards.push(card);
        sum += card;
        renderGame();
    }


}

function Random_No() {
    return Math.floor((Math.random() * 13) + 1);
}