export const JSX = () => {
  const generateGreeting = (firstName, lastName) => {
    return `Welcome! ${firstName} ${lastName}`;
  };

  return (
    <div data-testid="jsx">
      <h1 data-testid="greeting">{generateGreeting("Bob", "Smith")}</h1>
      <h2 data-testid="math">Result: {100 + 300}</h2>
      <h3 data-testid="random">{Math.random() < 0.5 ? "Hello" : "Goodbye"}</h3>
    </div>
  );
};
