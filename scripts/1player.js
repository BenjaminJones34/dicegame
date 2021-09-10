let total = 0;
const currentScore = document.querySelector("#score");
const rollButton = document.querySelector("#roll");
const player1Text = document.querySelector("#player1");
const image = document.querySelector("#image");
const player1Background = document.querySelector("#player1section");

rollButton.addEventListener("click", ()=> {
    if (rollButton.textContent == "start over") {
        total = 0;
        currentScore.textContent = "Current score: 0";
        player1Background.style.backgroundColor = "rgba(230, 230, 0, 1)";
        rollButton.textContent = "roll";
        player1Text.textContent = "Player 1";
        image.src = "none";
        image.style.visibility = "hidden";
    } else {
        number = Math.floor(Math.random() * 6 + 1);
        if (number == 1) {
            player1Text.textContent = "You lost!";
            player1Background.style.backgroundColor = "red";
            rollButton.textContent = "start over";
            image.src = "images/1.png";
            image.style.visibility = "visible";
            total = 0;
            currentScore.textContent = "Current score: 0";
        } else {
            total += number
            currentScore.textContent = `Current score: ${total}`;
            image.src = `images/${number}.png`;
            image.style.visibility = "visible";
            if (total >= 20) {
                player1Text.textContent = "You won!";
                rollButton.textContent = "start over";
                player1Background.style.backgroundColor = "green";
            };
        };
    }
});
