import { render, screen, fireEvent } from "@testing-library/react";

import { WordCounter } from ".";

describe("WordCounter", () => {
  it("should render the component", () => {
    render(<WordCounter />);

    expect(screen.getByTestId("word-counter")).toBeTruthy();
  });

  it("should count the words", () => {
    render(<WordCounter />);

    const textarea = screen.getByTestId("word-counter");
    const wordCount = screen.getByTestId("word-count");

    expect(textarea.value).toBe("");
    fireEvent.change(textarea, { target: { value: "Good Day!" } });
    expect(wordCount).toHaveTextContent("Words: 2");
  });
});
