import { render, screen } from "@testing-library/react";
import { mockItems } from "./mockItems";
import { Banner } from "./Banner";
import * as AppProvider from "./AppProvider";

const mockBasket = (items = mockItems) => {
  const mockAddToBasket = jest.fn();
  const mockRemoveFromBasket = jest.fn();

  jest.spyOn(AppProvider, "useApp").mockImplementation(() => ({
    basket: items,
    addToBasket: mockAddToBasket,
    removeFromBasket: mockRemoveFromBasket,
  }));

  return { mockAddToBasket, mockRemoveFromBasket };
};

describe("Banner", () => {
  it("should render the component", () => {
    mockBasket();

    render(<Banner />);

    expect(screen.getByTestId("banner")).toBeTruthy();
  });

  it("should render the expected message for a non-empty basket", () => {
    mockBasket();

    render(<Banner />);

    expect(screen.getByTestId("banner")).toHaveTextContent(
      "You have 10 item(s) in the basket"
    );
  });

  it("should render the expected message for an empty basket", () => {
    mockBasket([]);

    render(<Banner />);

    expect(screen.getByTestId("banner")).toHaveTextContent(
      "You have no items in the basket"
    );
  });
});
