let message = "";

const dataToView = () => {
  const input = document.createElement("input");
  const div = message === "foo" ? "" : document.createElement("div");

  input.value = message;
  div.textContent = message;

  const handleInput = () => {
    message = input.value;
  };

  input.oninput = handleInput;

  document.body.replaceChildren(input, div);
};

setInterval(dataToView, 15);
