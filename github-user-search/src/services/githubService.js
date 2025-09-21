import axios from "axios";

const BASE_URL = "https://api.github.com";
const api = axios.create({ baseURL: BASE_URL });

/**
 * Search GitHub users by query string
 * @param {string} query - GitHub username search string
 * @returns {Promise<Array>} list of users
 */
export async function searchGithubUsers(query) {
  try {
    const { data } = await api.get(`/search/users`, { params: { q: query } });
    return data.items || [];
  } catch (error) {
    console.error("GitHub API search error:", error.message);
    throw new Error("Failed to fetch GitHub users");
  }
}

/**
 * Fetch details for a single GitHub user
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} user details
 */
export async function fetchUserData(username) {
  try {
    const { data } = await api.get(`/users/${username}`);
    return data;
  } catch (error) {
    console.error("GitHub API user error:", error.message);
    throw new Error("Failed to fetch GitHub user data");
  }
}
