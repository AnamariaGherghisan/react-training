import { fireEvent, render, screen } from "@testing-library/react";
import { Item } from "./Item";
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

describe("Item", () => {
  it("should render the component", () => {
    mockBasket();

    render(<Item item={mockItems[0]} />);

    expect(screen.getByTestId("item")).toBeTruthy();
  });

  it("should render the delete button", () => {
    mockBasket();

    render(<Item item={mockItems[0]} />);

    expect(screen.getByTestId("remove-btn")).toBeTruthy();
    expect(screen.queryByTestId("add-btn")).toBeFalsy();
  });

  it("should render the add button", () => {
    mockBasket();

    render(<Item item={{ id: "123", label: "Foo Bar" }} />);

    expect(screen.getByTestId("add-btn")).toBeTruthy();
    expect(screen.queryByTestId("remove-btn")).toBeFalsy();
  });

  it("should render the expected label", () => {
    mockBasket();

    render(<Item item={mockItems[0]} />);

    expect(screen.getByTestId("item-label")).toHaveTextContent(
      "Wine - Pinot Noir Stoneleigh"
    );
  });

  it("should execute the expected function on click of delete button", () => {
    const { mockRemoveFromBasket } = mockBasket();

    render(<Item item={mockItems[0]} />);

    fireEvent.click(screen.getByTestId("remove-btn"));

    expect(mockRemoveFromBasket).toHaveBeenCalledWith(mockItems[0]);
  });

  it("should execute the expected function on click of add button", () => {
    const { mockAddToBasket } = mockBasket();

    render(<Item item={{ id: "123", label: "Foo Bar" }} />);

    fireEvent.click(screen.getByTestId("add-btn"));

    expect(mockAddToBasket).toHaveBeenCalledWith({
      id: "123",
      label: "Foo Bar",
    });
  });
});
