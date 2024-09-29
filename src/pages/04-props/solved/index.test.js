import { render, screen } from "@testing-library/react";
import { UserCard } from ".";

describe("UserCard", () => {
  it("should render the component", () => {
    render(
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Google"
        address={{
          houseNumber: "123",
          street: "4th street",
          city: "London",
          postcode: "LON 123",
        }}
      />
    );

    expect(screen.getByTestId("user-card")).toBeTruthy();
  });

  it("should render the expected full name", () => {
    render(
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Google"
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
        companyName="Google"
        address={{
          houseNumber: "123",
          street: "4th street",
          city: "London",
          postcode: "LON 123",
        }}
      />
    );

    expect(screen.getByTestId("company-name")).toHaveTextContent("Google");
  });

  it("should render the expected full address with street address", () => {
    render(
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Google"
        address={{
          houseNumber: "123",
          street: "4th street",
          city: "London",
          postcode: "LON 123",
        }}
      />
    );

    expect(screen.getByTestId("full-address")).toHaveTextContent(
      "123, 4th street, London, LON 123"
    );
  });

  it("should render the expected full address without street address", () => {
    render(
      <UserCard
        firstName="Bob"
        lastName="Smith"
        companyName="Google"
        address={{
          houseNumber: "123",
          city: "London",
          postcode: "LON 123",
        }}
      />
    );

    expect(screen.getByTestId("full-address")).toHaveTextContent(
      "123, London, LON 123"
    );
  });
});
