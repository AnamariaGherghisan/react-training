import { render, screen } from "@testing-library/react";
import { ProductCard } from ".";

describe("ProductCard", () => {
  it("should render the component", () => {
    render(<ProductCard />);

    expect(screen.getByTestId("product-card")).toBeTruthy();
  });

  it("should render the expected title", () => {
    render(<ProductCard />);

    expect(screen.getByTestId("product-card-title")).toHaveTextContent(
      "Hilton Hotel"
    );
  });

  it("should render the expected sub-title", () => {
    render(<ProductCard />);

    expect(screen.getByTestId("product-card-sub-title")).toHaveTextContent(
      "Manchester"
    );
  });

  it("should render the expected image", () => {
    render(<ProductCard />);

    expect(
      screen.getByTestId("product-card-image").getAttribute("src")
    ).toEqual(
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );

    expect(
      screen.getByTestId("product-card-image").getAttribute("alt")
    ).toEqual("chairs by the pool facing the open sea");
  });
});
