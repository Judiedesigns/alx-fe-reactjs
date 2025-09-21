import axios from "axios";
import { searchGithubUsers } from "../services/githubService";

jest.mock("axios");

describe("githubService advanced search", () => {
  it("calls GitHub API with query, location, and minRepos", async () => {
    axios.get.mockResolvedValue({ data: { items: [] } });

    await searchGithubUsers({ query: "john", location: "lagos", minRepos: 10 });

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/search/users?q=john+location:lagos+repos:>=10"
    );
  });
});
