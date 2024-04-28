/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-unnecessary-act */
import axios from "axios";
import { render, screen, act, waitFor } from "@testing-library/react";
import { GitHubInfo } from ".";
import { mockError, mockOrgSuccess, mockReposSuccess } from "./mockData";

jest.mock("axios", () => ({
  get: jest.fn(),
}));

const mockApis = (responses = [mockOrgSuccess, mockReposSuccess]) => {
  axios.get
    .mockImplementationOnce(() => Promise.resolve(responses[0]))
    .mockImplementationOnce(() => Promise.resolve(responses[1]));
};

describe("GitHubInfo", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render the component", async () => {
    mockApis();

    await act(() => render(<GitHubInfo />));

    await waitFor(() => {
      expect(screen.getByTestId("github-info")).toBeTruthy();
    });
  });

  it("should render the expected organisation title", async () => {
    mockApis();

    await act(() => render(<GitHubInfo />));

    await waitFor(() => {
      expect(screen.getByTestId("org-title")).toHaveTextContent("Booking.com");
    });
  });

  it("should render the expected repositories title", async () => {
    mockApis();

    await act(() => render(<GitHubInfo />));

    await waitFor(() => {
      expect(screen.getByTestId("repos-title")).toHaveTextContent(
        "Repositories"
      );
    });
  });

  it("should render the expected organisation info", async () => {
    mockApis();

    await act(() => render(<GitHubInfo />));

    await waitFor(() => {
      expect(screen.getByTestId("org-card")).toBeTruthy();
    });
  });

  it("should render the expected repositories info", () => {});

  it("should render the expected error message for organisation fail", async () => {
    mockApis([mockError, mockReposSuccess]);

    await act(() => render(<GitHubInfo />));

    await waitFor(() => {
      expect(screen.getByTestId("org-error")).toHaveTextContent(
        "Failed to load organisation information, please try again."
      );
    });
  });

  it("should render the expected error message for repositories fail", async () => {
    mockApis([mockOrgSuccess, mockError]);

    await act(() => render(<GitHubInfo />));

    await waitFor(() => {
      expect(screen.getByTestId("org-card")).toBeTruthy();

      expect(screen.getByTestId("repos-error")).toHaveTextContent(
        "Failed to load the repositories, please try again."
      );
    });
  });
});
