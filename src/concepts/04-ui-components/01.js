let message = "";

const input = document.querySelector("input");
const div = document.querySelector("div");

const dataToView = () => {
  input.value = message;
  div.textContent = message;
};

const handleInput = () => {
  message = input.value;

  if (message === "foo") {
    div.remove();
  }
};

input.oninput = handleInput;

setInterval(dataToView, 15);
