import axios from "axios";

const BASE_URL = "https://api.github.com";

// 🔹 Search for multiple users
export async function searchGithubUsers(query) {
  const url = `${BASE_URL}/search/users?q=${query}`;
  try {
    const response = await axios.get(url);
    return response.data.items || [];
  } catch (error) {
    console.error("GitHub API search error:", error.message);
    throw new Error("Failed to fetch GitHub users");
  }
}

// 🔹 Get details for a single user
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API user error:", error.message);
    throw new Error("Failed to fetch GitHub user data");
  }
}
