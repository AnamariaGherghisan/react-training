import { render, screen } from "@testing-library/react";
import { UserCard } from ".";

describe("UserCard", () => {
  it("should render the component", () => {
    render(
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Apple"
        address={{
          houseNumber: "123",
          street: "4th street",
          city: "London",
          postcode: "LON 123",
        }}
      />
    );
    expect(screen.getByTestId("user-card")).toBeInTheDocument();
  });
  it("should render the expected fullname", () => {
    render(
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Apple"
        address={{
          houseNumber: "123",
          street: "4th street",
          city: "London",
          postcode: "LON 123",
        }}
      />
    );
    expect(screen.getByTestId("full-name")).toHaveTextContent("Bob Smith");
  });
  it("should render the expected company name", () => {
    render(
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Apple"
        address={{
          houseNumber: "123",
          street: "4th street",
          city: "London",
          postcode: "LON 123",
        }}
      />
    );
    expect(screen.getByTestId("company-name")).toHaveTextContent("Apple");
  });
  it("should render the full address with street ", () => {
    render(
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Apple"
        address={{
          houseNumber: "123",
          street: "4th street",
          city: "London",
          postcode: "LON 123",
        }}
      />
    );
    expect(screen.getByTestId("address")).toHaveTextContent(
      "123, 4th street, London, LON 123."
    );
  });
  it("should render the full address without street", () => {
    render(
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Apple"
        address={{
          houseNumber: "123",
          city: "London",
          postcode: "LON 123",
        }}
      />
    );
    expect(screen.getByTestId("address")).toHaveTextContent(
      "123, London, LON 123."
    );
  });
});
