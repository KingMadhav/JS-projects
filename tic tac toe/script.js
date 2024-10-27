let inputLeSkteH = true;
let defaultSymbol = "X";
let flag;
let board = document.querySelector(".board");
let cell = document.querySelector(".cell");
let cells = document.querySelectorAll(".cell");
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");

function initialize() {
    cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    if (inputLeSkteH && cell.innerHTML == "") {
      cell.innerHTML = `${defaultSymbol}`;
      h2.innerHTML = "";
      changeSymbol();
      checkResult();
    } else if (inputLeSkteH) {
      h2.innerHTML = "INVALID MOVE";
    }
  });
})}
function changeSymbol() {
  defaultSymbol = defaultSymbol === "X" ? "O" : "X";
}
function checkResult() {
  var boardState = Array.from(cells).map((cell) => cell.innerHTML);
  var winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal \
    [2, 4, 6], // Diagonal /
  ];
  for (let [a, b, c] of winningCombinations) {
    if (
      boardState[a] !== "" &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      flag = boardState[a] == "X" ? "1" : "2";
      showResult();
      return;
    }
    if (boardState.every((cell) => cell !== "")) {
      flag = "0";
      showResult();
    }
  }
}

function showResult() {
  if (flag == "1") {
    h1.innerHTML = "player1 wins";
  } else if (flag == "2") {
    h1.innerHTML = "player2 wins";
  } else if (flag == "0") {
    h1.innerHTML = "DRAW";
  }
  inputLeSkteH = false;
}
initialize();