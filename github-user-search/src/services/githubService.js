import axios from "axios";

const BASE_URL = "https://api.github.com";
const api = axios.create({ baseURL: BASE_URL });

export async function searchGithubUsers({ query, location, minRepos }) {
  try {
    let q = query || "";
    if (location) q += `+location:${location}`;
    if (minRepos) q += `+repos:>=${minRepos}`;
    const { data } = await api.get("/search/users", { params: { q } });
    return data.items || [];
  } catch (error) {
    console.error("GitHub API search error:", error.message);
    throw error;
  }
}

export async function fetchUserData(username) {
  try {
    const { data } = await api.get(`/users/${username}`);
    return data;
  } catch (error) {
    console.error("GitHub API user error:", error.message);
    throw error;
  }
}
