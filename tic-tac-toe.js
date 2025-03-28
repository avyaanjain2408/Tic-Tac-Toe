const boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-game");
let turnO = true;
 
const winnerPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
 
let resetGame = () => {
  turnO = true;
  enableBoxes();
};
 
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return;
 
    console.log(`button clicked ${turnO ? "O" : "X"}`);
 
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.classList.add("frozen","Ocolor");
      box.classList.remove("xcolor");
    } else {
      box.innerText = "X";
      turnO = true;
      box.classList.add("xcolor", "frozen");
      box.classList.remove("Ocolor")
    }
 
    checkWinner();
  });
});
 
let enableBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.classList.remove("frozen", "xcolor"); 
  });
  msgContainer.classList.add("hide");
};
 
let showWinner = (winner) => {
  msg.innerText = ` Congratulation , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};
 
const checkWinner = () => {
  for (let pattern of winnerPattern) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
 
    if (val1 !== "" && val1 === val2 && val2 === val3) {
      console.log(`Winner is ${val1}`);
      showWinner(val1);
      return;
    }
  }
};
 
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
 
 