document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('game-container');
    const messageElement = document.getElementById('message');
    let taxiCardIndex;
    let chances = 3;
    let gameActive = true;

    function initializeGame() {
        for (let i = 0; i < 9; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerText = i + 1;
            card.addEventListener('click', () => selectCard(i));
            gameContainer.appendChild(card);
        }

        taxiCardIndex = Math.floor(Math.random() * 9);
    }

    function selectCard(index) {
        if (!gameActive) {
            return;
        }

        if (index === taxiCardIndex) {
            revealTaxiImage();
            showWinMessage();
            gameActive = false;
        } else {
            revealCard(index);
            chances--;
            checkGameOver();
        }
    }

    function revealCard(index) {
        const selectedCard = gameContainer.children[index];
        selectedCard.style.backgroundColor = 'white';
        selectedCard.style.color = 'black';
    }

    function revealTaxiImage() {
        const taxiCard = gameContainer.children[taxiCardIndex];
        taxiCard.style.backgroundImage = "url('images/taxi-driver.jpg')";
        taxiCard.style.backgroundSize = 'cover';
        taxiCard.style.backgroundRepeat = 'no-repeat';
        taxiCard.style.backgroundPosition = 'center center';
        taxiCard.style.color = 'transparent';
    }

    function showWinMessage() {
        messageElement.textContent = 'Честито! Имате право на един базплатен превоз!';
    }

    function checkGameOver() {
        if (chances === 0) {
            showTryAgainMessage();
            gameActive = false;
        }
    }

    function showTryAgainMessage() {
        messageElement.textContent = 'Съжалявам! Опитите ви свършиха, опитайте по-късно!';
    }

    initializeGame();
});

let menu = document.querySelector("#navbar");
let nav = document.querySelector(".menu");
let showContactForm = document.querySelector(".contact");
let myForm = document.querySelector(".contact-form");
let formClose = document.querySelector("#form-close");
let backgroundText = document.querySelector(".background-text");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
};

showContactForm.onclick = () => {
    myForm.classList.add('active');
};

formClose.onclick = () => {
    myForm.classList.remove('active');
};
