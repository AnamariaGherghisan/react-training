import { render, screen } from "@testing-library/react";
import { Users } from ".";

const users = [
  {
    id: "111",
    firstName: "Bob",
    lastName: "Smith",
    companyName: "Booking.com",
    address: {
      houseNumber: "123",
      street: "4th street",
      city: "London",
      postcode: "LON 123",
    },
    isPremium: true,
  },
  {
    id: "222",
    firstName: "Alice",
    lastName: "Smith",
    companyName: "Apple",
    address: {
      houseNumber: "456",
      city: "London",
      postcode: "LON 123",
    },
    isPremium: false,
  },
];

describe("Users", () => {
  it("should render the component", () => {
    render(<Users users={users} />);

    expect(screen.getByTestId("users")).toBeTruthy();
  });

  it("should render the expected title", () => {
    render(<Users users={users} />);

    expect(screen.getByTestId("title")).toHaveTextContent("Your Users");
  });

  it("should render the expected list of users when available", () => {
    render(<Users users={users} />);

    expect(screen.getByTestId("users")).toBeTruthy();

    expect(screen.getAllByTestId("user-card").length).toEqual(2);
  });

  it("should render the expected no users message when not available", () => {
    render(<Users />);

    expect(screen.getByTestId("no-users")).toHaveTextContent(
      "No users present."
    );

    expect(screen.queryAllByTestId("user-card").length).toEqual(0);
  });

  it("should render the expected no users message when users is an empty array", () => {
    render(<Users users={[]} />);

    expect(screen.getByTestId("no-users")).toHaveTextContent(
      "No users present."
    );

    expect(screen.queryAllByTestId("user-card").length).toEqual(0);
  });
});
