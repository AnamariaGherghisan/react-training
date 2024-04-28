import { render, screen } from "@testing-library/react";
import { JSX } from ".";

describe("JSX", () => {
  it("should render the component", () => {
    render(<JSX />);

    expect(screen.getByTestId("jsx")).toBeTruthy();
  });

  it("should render the expected greeting message", () => {
    render(<JSX />);

    expect(screen.getByTestId("greeting-message")).toHaveTextContent(
      "Welcome Bob Smith!"
    );
  });

  it("should render the expected math result", () => {
    render(<JSX />);

    expect(screen.getByTestId("math-result")).toHaveTextContent(
      "100 + 300 = 400"
    );
  });

  it("should render the expected random text as Hello", () => {
    render(<JSX />);

    jest.spyOn(Math, "random").mockReturnValue(0.3);

    expect(screen.getByTestId("random-result")).toHaveTextContent("Hello");
  });

  it("should render the expected random text as Goodbye", () => {
    render(<JSX />);

    jest.spyOn(Math, "random").mockReturnValue(0.6);

    expect(screen.getByTestId("random-result")).toHaveTextContent("Goodbye");
  });
});
