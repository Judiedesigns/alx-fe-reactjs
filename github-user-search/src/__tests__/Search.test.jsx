import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../components/Search";
import * as githubService from "../services/githubService";

jest.mock("../services/githubService");

describe("Search Component", () => {
  test("calls GitHub API and renders results", async () => {
    githubService.searchGithubUsers.mockResolvedValue([
      { id: 1, login: "octocat" },
    ]);

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/search/i), {
      target: { value: "octocat" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    await waitFor(() => {
      expect(githubService.searchGithubUsers).toHaveBeenCalledWith("octocat");
      expect(screen.getByText("octocat")).toBeInTheDocument();
    });
  });
});
