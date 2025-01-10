import { render, screen } from "@testing-library/react";
import { ProductCard } from ".";

describe("ProductCard", () => {
  it("should render the component", () => {
    render(<ProductCard />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
  it("should render the expected image", () => {
    render(<ProductCard />);
    expect(screen.getByTestId("card-img")).toBeInTheDocument();
    expect(screen.getByTestId("card-img")).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    expect(screen.getByTestId("card-img")).toHaveAttribute(
      "alt",
      "red nike shoes"
    );
  });
  it("should render the expected title", () => {
    render(<ProductCard />);
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent("Nike");
  });
  it("should render the expected subtitle", () => {
    render(<ProductCard />);
    expect(screen.getByTestId("subtitle")).toBeInTheDocument();
    expect(screen.getByTestId("subtitle")).toHaveTextContent("Red Nike Shoes");
  });
});
