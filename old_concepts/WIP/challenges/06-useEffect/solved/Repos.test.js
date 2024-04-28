import { render, screen } from "@testing-library/react";
import { mockReposSuccess } from "./mockData";
import { Repos } from "./Repos";

describe("Repos", () => {
  it("should render the component", () => {
    render(<Repos repos={mockReposSuccess.data} />);

    expect(screen.getByTestId("repos")).toBeTruthy();
  });

  it("should render the expected number of repo cards", () => {
    render(<Repos repos={mockReposSuccess.data} />);

    expect(screen.getAllByTestId("repo-card").length).toEqual(2);
  });

  it("should render the expected title", () => {
    render(<Repos repos={mockReposSuccess.data} />);

    expect(screen.getAllByTestId("repo-card")[0]).toHaveTextContent("pakket");
  });

  it("should render the expected description", () => {
    render(<Repos repos={mockReposSuccess.data} />);

    expect(screen.getAllByTestId("repo-card")[0]).toHaveTextContent(
      "An Unopinionated Meta-Packaging System"
    );
  });

  it("should render the expected issues and watchers count", () => {
    render(<Repos repos={mockReposSuccess.data} />);

    expect(screen.getAllByTestId("repo-card")[0]).toHaveTextContent(
      "44 issues | 26 watchers"
    );
  });

  it("should render the expected link to github", () => {
    render(<Repos repos={mockReposSuccess.data} />);

    expect(screen.getAllByTestId("repo-url")[0]).toHaveTextContent("View");
    expect(screen.getAllByTestId("repo-url")[0].getAttribute("href")).toEqual(
      "https://github.com/bookingcom/pakket"
    );
  });
});
