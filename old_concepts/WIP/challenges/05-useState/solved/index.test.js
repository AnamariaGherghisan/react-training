import { fireEvent, render, screen } from "@testing-library/react";
import { CounterImage } from ".";

describe("CounterImage", () => {
  it("should render the component", () => {
    render(<CounterImage />);

    expect(screen.getByTestId("counter-image")).toBeTruthy();
  });

  it("should render the expected title", () => {
    render(<CounterImage />);

    expect(screen.getByTestId("title")).toHaveTextContent(
      "What do I see every 5 clicks?"
    );
  });

  it("should render the expected button", () => {
    render(<CounterImage />);

    expect(screen.getByTestId("counter-btn")).toHaveTextContent(
      "Random Image Clicker"
    );
  });

  it("should render the expected message on load", () => {
    render(<CounterImage />);

    expect(screen.getByTestId("no-image")).toHaveTextContent(
      "Your random image will appear here."
    );
  });

  it("should display the expected number of button clicks", () => {
    render(<CounterImage />);

    const counterBtn = screen.getByTestId("counter-btn");

    expect(screen.getByTestId("click-counter")).toHaveTextContent(
      "Button clicks: 0"
    );

    fireEvent.click(counterBtn);
    expect(screen.getByTestId("click-counter")).toHaveTextContent(
      "Button clicks: 1"
    );

    fireEvent.click(counterBtn);
    expect(screen.getByTestId("click-counter")).toHaveTextContent(
      "Button clicks: 2"
    );
  });

  it("should render the random image on multiple of 5", () => {
    render(<CounterImage />);

    const counterBtn = screen.getByTestId("counter-btn");

    expect(screen.getByTestId("no-image")).toBeTruthy();
    expect(screen.getByTestId("click-counter")).toHaveTextContent(
      "Button clicks: 0"
    );
    expect(screen.queryByTestId("random-image")).toBeFalsy();

    fireEvent.click(counterBtn);
    expect(screen.getByTestId("no-image")).toBeTruthy();
    expect(screen.getByTestId("click-counter")).toHaveTextContent(
      "Button clicks: 1"
    );
    expect(screen.queryByTestId("random-image")).toBeFalsy();

    fireEvent.click(counterBtn);
    expect(screen.getByTestId("no-image")).toBeTruthy();
    expect(screen.getByTestId("click-counter")).toHaveTextContent(
      "Button clicks: 2"
    );
    expect(screen.queryByTestId("random-image")).toBeFalsy();

    fireEvent.click(counterBtn);
    expect(screen.getByTestId("no-image")).toBeTruthy();
    expect(screen.getByTestId("click-counter")).toHaveTextContent(
      "Button clicks: 3"
    );
    expect(screen.queryByTestId("random-image")).toBeFalsy();

    fireEvent.click(counterBtn);
    expect(screen.getByTestId("no-image")).toBeTruthy();
    expect(screen.getByTestId("click-counter")).toHaveTextContent(
      "Button clicks: 4"
    );
    expect(screen.queryByTestId("random-image")).toBeFalsy();

    fireEvent.click(counterBtn);
    expect(screen.queryByTestId("no-image")).toBeFalsy();
    expect(screen.getByTestId("click-counter")).toHaveTextContent(
      "Button clicks: 5"
    );
    expect(screen.getByTestId("random-image")).toBeTruthy();
    expect(screen.getByTestId("random-image").getAttribute("src")).toEqual(
      "https://picsum.photos/300"
    );
    expect(screen.getByTestId("random-image").getAttribute("alt")).toEqual(
      "random"
    );

    fireEvent.click(counterBtn);
    expect(screen.getByTestId("no-image")).toBeTruthy();
    expect(screen.getByTestId("click-counter")).toHaveTextContent(
      "Button clicks: 6"
    );
    expect(screen.queryByTestId("random-image")).toBeFalsy();
  });
});
