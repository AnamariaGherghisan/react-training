import { render, screen } from "@testing-library/react";
import { OrgCard } from "./OrgCard";
import { mockOrgSuccess } from "./mockData";

describe("OrgCard", () => {
  it("should render the component", () => {
    render(<OrgCard org={mockOrgSuccess.data} />);

    expect(screen.getByTestId("org-card")).toBeTruthy();
  });

  it("should render the expected title", () => {
    render(<OrgCard org={mockOrgSuccess.data} />);

    expect(screen.getByTestId("org-card")).toHaveTextContent("Booking.com");
  });

  it("should render the expected location", () => {
    render(<OrgCard org={mockOrgSuccess.data} />);

    expect(screen.getByTestId("org-card")).toHaveTextContent("Amsterdam - NL");
  });

  it("should render the expected repos and followers count", () => {
    render(<OrgCard org={mockOrgSuccess.data} />);

    expect(screen.getByTestId("org-card")).toHaveTextContent(
      "64 repos | 88 followers"
    );
  });

  it("should render the expected link to github", () => {
    render(<OrgCard org={mockOrgSuccess.data} />);

    expect(screen.getByTestId("org-url")).toHaveTextContent("View");
    expect(screen.getByTestId("org-url").getAttribute("href")).toEqual(
      "https://api.github.com/orgs/bookingcom"
    );
  });
});
