import { render, screen } from "@testing-library/react";
import { UserCard } from "./UserCard";

describe("UserCard", () => {
  it("should render the component", () => {
    render(
      <UserCard
        user={{
          id: "111",
          firstName: "Bob",
          lastName: "Smith",
          companyName: "Google",
          address: {
            houseNumber: "123",
            street: "4th street",
            city: "London",
            postcode: "LON 123",
          },
          isPremium: true,
        }}
      />
    );

    expect(screen.getByTestId("user-card")).toBeTruthy();
  });

  it("should render the expected full name", () => {
    render(
      <UserCard
        user={{
          id: "111",
          firstName: "Bob",
          lastName: "Smith",
          companyName: "Google",
          address: {
            houseNumber: "123",
            street: "4th street",
            city: "London",
            postcode: "LON 123",
          },
          isPremium: true,
        }}
      />
    );

    expect(screen.getByTestId("full-name")).toHaveTextContent("Bob Smith");
  });

  it("should render the expected company name", () => {
    render(
      <UserCard
        user={{
          id: "111",
          firstName: "Bob",
          lastName: "Smith",
          companyName: "Google",
          address: {
            houseNumber: "123",
            street: "4th street",
            city: "London",
            postcode: "LON 123",
          },
          isPremium: true,
        }}
      />
    );

    expect(screen.getByTestId("company-name")).toHaveTextContent("Google");
  });

  it("should render the expected full address with street address", () => {
    render(
      <UserCard
        user={{
          id: "111",
          firstName: "Bob",
          lastName: "Smith",
          companyName: "Google",
          address: {
            houseNumber: "123",
            street: "4th street",
            city: "London",
            postcode: "LON 123",
          },
          isPremium: true,
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
        user={{
          id: "111",
          firstName: "Bob",
          lastName: "Smith",
          companyName: "Google",
          address: {
            houseNumber: "123",
            city: "London",
            postcode: "LON 123",
          },
          isPremium: true,
        }}
      />
    );

    expect(screen.getByTestId("full-address")).toHaveTextContent(
      "123, London, LON 123"
    );
  });

  it("should render the expected premium icon when available", () => {
    render(
      <UserCard
        user={{
          id: "111",
          firstName: "Bob",
          lastName: "Smith",
          companyName: "Google",
          address: {
            houseNumber: "123",
            city: "London",
            postcode: "LON 123",
          },
          isPremium: true,
        }}
      />
    );

    expect(screen.getByTestId("premium-icon")).toBeTruthy();
  });

  it("should not render the premium icon when not available", () => {
    render(
      <UserCard
        user={{
          id: "111",
          firstName: "Bob",
          lastName: "Smith",
          companyName: "Google",
          address: {
            houseNumber: "123",
            city: "London",
            postcode: "LON 123",
          },
          isPremium: false,
        }}
      />
    );

    expect(screen.queryByTestId("premium-icon")).toBeFalsy();
  });
});
