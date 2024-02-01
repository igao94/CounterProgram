const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let counter = 0;

increaseBtn.onclick = () => {
  counter++;
  countLabel.textContent = counter;
};

decreaseBtn.onclick = () => {
  counter--;
  countLabel.textContent = counter;
};

resetBtn.onclick = () => {
  counter = 0;
  countLabel.textContent = counter;
};
