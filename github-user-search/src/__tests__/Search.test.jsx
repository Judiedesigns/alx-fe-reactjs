import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../components/Search";
import * as githubService from "../services/githubService";

jest.mock("../services/githubService");

describe("Search Component", () => {
  test("shows loading and calls GitHub API", async () => {
    githubService.searchGithubUsers.mockResolvedValue([
      { id: 1, login: "octocat", avatar_url: "https://avatar.com/octo.png", html_url: "https://github.com/octocat" },
    ]);

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/search github users/i), {
      target: { value: "octocat" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    // shows loading
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(githubService.searchGithubUsers).toHaveBeenCalledWith("octocat");
      expect(screen.getByText("octocat")).toBeInTheDocument();
    });
  });

  test("shows not found message when API returns empty", async () => {
    githubService.searchGithubUsers.mockResolvedValue([]);

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/search github users/i), {
      target: { value: "nothinghere" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    await waitFor(() => {
      expect(screen.getByText(/looks like we can't find the user/i)).toBeInTheDocument();
    });
  });
});
