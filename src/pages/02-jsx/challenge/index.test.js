import { render, screen } from "@testing-library/react";
import { JSX } from ".";

describe("JSX", () => {
  it("should render the component", () => {
    render(<JSX />);

    expect(screen.getByTestId("jsx")).toBeInTheDocument();
  });

  it("should render the greeting text", () => {
    render(<JSX />);

    expect(screen.getByTestId("greeting")).toHaveTextContent(
      "Welcome! Bob Smith"
    );
  });
  it("should render the math text", () => {
    render(<JSX />);

    expect(screen.getByTestId("math")).toHaveTextContent("Result: 400");
  });

  it("should render the random text Hello", () => {
    // mock the return value of Math.random() to be less than 0.5
    jest.spyOn(Math, "random").mockReturnValue(0.3);

    render(<JSX />);

    expect(screen.getByTestId("random")).toHaveTextContent("Hello");
  });

  it("should render the random text Goodbye", () => {
    // mock the return value of Math.random() to be less than 0.5
    jest.spyOn(Math, "random").mockReturnValue(0.9);

    render(<JSX />);

    expect(screen.getByTestId("random")).toHaveTextContent("Goodbye");
  });
});
