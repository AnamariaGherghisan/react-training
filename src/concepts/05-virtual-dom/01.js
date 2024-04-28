let username = "";
let input;
let div;
let vDOM;

const createVDOM = () => {
  return [
    ["input", username, handleInput],
    ["div", `Hello, ${username}`],
  ];
};

const handleInput = () => {
  username = input.value;
};

const updateDOM = () => {
  vDOM = createVDOM();
  input = convert(vDOM[0]);
  div = convert(vDOM[1]);
  document.body.replaceChildren(input, div);
};

const convert = (node) => {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];

  return element;
};

setInterval(updateDOM, 15);
