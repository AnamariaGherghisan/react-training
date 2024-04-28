import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Basket } from ".";

describe("Basket", () => {
  it("should render the Banner component", () => {
    render(<Basket />);

    expect(screen.getByTestId("banner")).toBeTruthy();
  });

  it("should render the Items component", () => {
    render(<Basket />);

    expect(screen.getByTestId("items")).toBeTruthy();
  });

  it("should render the basket as empty on load", () => {
    render(<Basket />);

    expect(screen.getByTestId("banner")).toHaveTextContent(
      "You have no items in the basket"
    );
  });

  it("should add 1 item to the basket", async () => {
    render(<Basket />);

    const firstItem = screen.getAllByTestId("add-btn")[0];

    fireEvent.click(firstItem);

    await waitFor(() => {
      expect(screen.getByTestId("banner")).toHaveTextContent(
        "You have 1 item(s) in the basket"
      );
    });
  });

  it("should add multiple items to the basket", async () => {
    render(<Basket />);

    const firstItem = screen.getAllByTestId("add-btn")[0];
    const secondItem = screen.getAllByTestId("add-btn")[1];

    fireEvent.click(firstItem);

    await waitFor(() => {
      expect(screen.getByTestId("banner")).toHaveTextContent(
        "You have 1 item(s) in the basket"
      );
    });

    fireEvent.click(secondItem);

    await waitFor(() => {
      expect(screen.getByTestId("banner")).toHaveTextContent(
        "You have 2 item(s) in the basket"
      );
    });
  });

  it("should remove an item from the basket", async () => {
    render(<Basket />);

    const firstItem = screen.getAllByTestId("add-btn")[0];
    const secondItem = screen.getAllByTestId("add-btn")[1];

    fireEvent.click(firstItem);

    await waitFor(() => {
      expect(screen.getByTestId("banner")).toHaveTextContent(
        "You have 1 item(s) in the basket"
      );
    });

    fireEvent.click(secondItem);

    await waitFor(() => {
      expect(screen.getByTestId("banner")).toHaveTextContent(
        "You have 2 item(s) in the basket"
      );
    });

    const secondItemToRemove = screen.getAllByTestId("remove-btn")[1];

    fireEvent.click(secondItemToRemove);

    await waitFor(() => {
      expect(screen.getByTestId("banner")).toHaveTextContent(
        "You have 1 item(s) in the basket"
      );
    });
  });
});
