import { render, screen } from "@testing-library/react";
import { Items } from "./Items";
import { mockItems } from "./mockItems";
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

describe("Items", () => {
  it("should render the component", () => {
    mockBasket();

    render(<Items items={mockItems} />);

    expect(screen.getByTestId("items")).toBeTruthy();
  });

  it("should render the expected items", () => {
    mockBasket();

    render(<Items items={mockItems} />);

    expect(screen.getAllByTestId("item").length).toEqual(10);
  });
});
