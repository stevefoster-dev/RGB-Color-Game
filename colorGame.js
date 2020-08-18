let numSquares = 6;

let colors = generateRandomColors(numSquares);
const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
// const easyBtn = document.querySelector("#easyBtn");
// const hardBtn = document.querySelector("#hardBtn");
const modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function () {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
    reset();
  });
}

function reset() {
  colors = generateRandomColors(numSquares);
  // pick new random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  resetButton.textContent = "New Colors";
  colorDisplay.textContent = pickColor();
  messageDisplay.textContent = "";
  // change color of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function () {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   easyGame();
// });
// hardBtn.addEventListener("click", function () {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   hardGame();
// });

resetButton.addEventListener("click", function () {
  reset();
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < colors.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function () {
    // grab color of clicked square
    const clickedColor = this.style.backgroundColor;
    // compare color to picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  // change each color to given color
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  let arr = [];
  // repeat num times
  for (let i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  // pick a red
  const r = Math.floor(Math.random() * 256);
  // pick a green
  const g = Math.floor(Math.random() * 256);
  // pick a blue
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function easyGame() {
  colors = generateRandomColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    numSquares = 3;
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      h1.style.backgroundColor = "steelblue";
    } else {
      squares[i].style.display = "none";
    }
  }
}
function hardGame() {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    numSquares = 6;
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
    h1.style.backgroundColor = "steelblue";
  }
}
