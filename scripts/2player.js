//player 1
let total1 = 0;
const currentScore1 = document.querySelector("#score1");
const rollButton1 = document.querySelector("#roll1");
const player1Text = document.querySelector("#player1text");
const image1 = document.querySelector("#image1");
const holdButton1 = document.querySelector("#hold1");
const player1Background = document.querySelector("#player1");

//player 2
let total2 = 0;
const currentScore2 = document.querySelector("#score2");
const rollButton2 = document.querySelector("#roll2");
const player2Text = document.querySelector("#player2text");
const image2 = document.querySelector("#image2");
const holdButton2 = document.querySelector("#hold2");
const player2Background = document.querySelector("#player2");

const newGame = document.querySelector("#newgame");

newGame.addEventListener("click", ()=> {
    rollButton1.disabled = false;
    holdButton1.disabled = false;
    rollButton1.style.backgroundColor = "purple";
    holdButton1.style.backgroundColor = "purple";
    player1Text.textContent = "Player 1";
    player2Text.textContent = "Player 2";
    image1.style.visibility = "hidden";
    image2.style.visibility = "hidden";
    newGame.disabled = true;
    newGame.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
    currentScore1.textContent = "Current score: 0";
    currentScore2.textContent = "Current score: 0";
    total1 = 0;
    total2 = 0;
    player1Background.style.backgroundColor = "rgba(230, 230, 0, 1)";
    player2Background.style.backgroundColor = "grey";
});

rollButton1.addEventListener("click", ()=> {
    number = Math.floor(Math.random() * 6 + 1);
    if (number == 1) {
        rollButton1.disabled = true;
        holdButton1.disabled = true;
        rollButton1.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
        holdButton1.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
        rollButton2.disabled = false;
        holdButton2.disabled = false;
        rollButton2.style.backgroundColor = "purple";
        holdButton2.style.backgroundColor = "purple";
        player1Background.style.backgroundColor = "grey";
        player2Background.style.backgroundColor = "rgba(230, 230, 0, 1)";
        image1.src = "images/1.png";
        image1.style.visibility = "visible";
        window.setTimeout(()=> {
            image1.style.visibility = "hidden";
        }, 5000);
        total1 = 0;
        currentScore1.textContent = `Current score: ${total1}`;
    } else {
        total1 += number
        currentScore1.textContent = `Current score: ${total1}`;
        image1.src = `images/${number}.png`;
        image1.style.visibility = "visible";
        if (total1 >= 20) {
            player1Text.textContent = "You won!";
            player1Background.style.backgroundColor = "green";
            player2Background.style.backgroundColor = "red";
            player2Text.textContent = "You lost!";
            rollButton1.disabled = true;
            holdButton1.disabled = true;
            rollButton1.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
            holdButton1.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
            rollButton2.disabled = true;
            holdButton2.disabled = true;
            rollButton2.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
            holdButton2.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
            newGame.disabled = false;
            newGame.style.backgroundColor = "purple";
        };
    };
});

holdButton1.addEventListener("click", ()=> {
    rollButton1.disabled = true;
    holdButton1.disabled = true;
    rollButton1.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
    holdButton1.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
    rollButton2.disabled = false;
    holdButton2.disabled = false;
    rollButton2.style.backgroundColor = "purple";
    holdButton2.style.backgroundColor = "purple";
    player1Background.style.backgroundColor = "grey";
    player2Background.style.backgroundColor = "rgba(230, 230, 0, 1)";
});

rollButton2.addEventListener("click", ()=> {
    number = Math.floor(Math.random() * 6 + 1);
    if (number == 1) {
        rollButton2.disabled = true;
        holdButton2.disabled = true;
        rollButton2.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
        holdButton2.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
        rollButton1.disabled = false;
        holdButton1.disabled = false;
        rollButton1.style.backgroundColor = "purple";
        holdButton1.style.backgroundColor = "purple";
        player1Background.style.backgroundColor = "rgba(230, 230, 0, 1)";
        player2Background.style.backgroundColor = "grey";
        image2.src = "images/1.png";
        image2.style.visibility = "visible";
        window.setTimeout(()=> {
            image2.style.visibility = "hidden";
        }, 5000);
        total2 = 0;
        currentScore2.textContent = `Current score: ${total2}`;
    } else {
        total2 += number
        currentScore2.textContent = `Current score: ${total2}`;
        image2.src = `images/${number}.png`;
        image2.style.visibility = "visible";
        if (total2 >= 20) {
            player2Text.textContent = "You won!";
            player1Text.textContent = "You lost!";
            player1Background.style.backgroundColor = "red";
            player2Background.style.backgroundColor = "green";
            rollButton1.disabled = true;
            holdButton1.disabled = true;
            rollButton1.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
            holdButton1.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
            rollButton2.disabled = true;
            holdButton2.disabled = true;
            rollButton2.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
            holdButton2.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
            newGame.disabled = false;
            newGame.style.backgroundColor = "purple"
        };
    };
});

holdButton2.addEventListener("click", ()=> {
    rollButton2.disabled = true;
    holdButton2.disabled = true;
    rollButton2.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
    holdButton2.style.backgroundColor = "rgba(128, 0, 128, 0.1)";
    rollButton1.disabled = false;
    holdButton1.disabled = false;
    rollButton1.style.backgroundColor = "purple";
    holdButton1.style.backgroundColor = "purple";
    player1Background.style.backgroundColor = "rgba(230, 230, 0, 1)";
    player2Background.style.backgroundColor = "grey";
});