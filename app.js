const p1Img = document.getElementById("p1Img");
const p2Img = document.getElementById("p2Img");
const messageElement = document.getElementById("message");
let message = "";

function getRandomDiceNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

function clickHandler() {
  //console.log(p1Img.src);
  const player1 = getRandomDiceNumber();
  const player2 = getRandomDiceNumber();
  console.log(player1, player2);

  p1Img.src = p1Img.src.split("dice")[0] + "dice" + player1 + ".png";
  p2Img.src = p2Img.src.split("dice")[0] + "dice" + player2 + ".png";

  if (player1 > player2) {
    message = "Player 1 win";
  } else if (player1 < player2) {
    message = "Player 2 win";
  } else {
    message = "Draw !!";
  }

  messageElement.innerText = message;
  messageElement.style.display = "block";
}
