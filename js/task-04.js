const refs = {
  decrementBtn: document.querySelector("[data-action='decrement']"),
  incrementBtn: document.querySelector("[data-action='increment']"),
};
const btn = document.querySelectorAll("button");

let counterValue = 0;
const value = document.getElementById("value");

const decrBtn = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const incrBtn = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

refs.decrementBtn.addEventListener("click", decrBtn);
refs.incrementBtn.addEventListener("click", incrBtn);
