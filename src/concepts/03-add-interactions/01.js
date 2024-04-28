const btn = document.getElementById("btn");
const counterEl = document.getElementById("counter");

let counter = +counterEl.textContent;

const handleClick = () => {
  counter = counter - 1;

  if (counter === 0) {
    counterEl.textContent = "BOOM!!";
  } else {
    counterEl.textContent = counter;
  }
};

btn.onclick = handleClick;
