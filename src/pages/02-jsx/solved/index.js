export const JSX = () => {
  const generateGreetingMessage = (firstName, lastName) => {
    return `Welcome ${firstName} ${lastName}!`;
  };

  return (
    <div data-testid="jsx">
      <div data-testid="greeting-message">
        {generateGreetingMessage("Bob", "Smith")}
      </div>
      <div data-testid="math-result">100 + 300 = {100 + 300}</div>
      <div data-testid="random-result">
        {Math.random() < 0.5 ? "Hello" : "Goodbye"}
      </div>
    </div>
  );
};
