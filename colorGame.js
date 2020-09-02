let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");
const squareContainer = document.querySelector(".container");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      // this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      if (this.textContent === "Easy") {
        easyGame();
      } else if (this.textContent === "Medium") {
        medGame();
      } else if (this.textContent === "Hard") {
        hardGame();
      }
      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
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
}

function reset() {
  colors = generateRandomColors(numSquares);
  // pick new random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
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

function easyGame() {
  numSquares = 6;
  squareContainer.classList.remove("wideContainer");
  squareContainer.classList.remove("medContainer");
  squares.forEach((i) => i.classList.remove("wideGrid"));
  squares.forEach((i) => i.classList.remove("medGrid"));
}

function medGame() {
  numSquares = 12;
  squareContainer.classList.add("medContainer");
  squares.forEach((i) => i.classList.remove("wideGrid"));
  squares.forEach((i) => i.classList.add("medGrid"));
}

function hardGame() {
  numSquares = 32;
  squareContainer.classList.add("wideContainer");
  squareContainer.classList.remove("medContainer");
  squares.forEach((i) => i.classList.add("wideGrid"));
  squares.forEach((i) => i.classList.remove("medGrid"));
}

resetButton.addEventListener("click", function () {
  reset();
});

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
