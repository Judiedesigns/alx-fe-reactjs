import axios from "axios";

// Search users with pagination and filters
export async function searchUsers({ username, location, minRepos, page = 1, perPage = 10 }) {
  try {
    let query = "";
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`
    );

    return response.data.items || [];
  } catch (error) {
    console.error("GitHub user search error:", error);
    throw error;
  }
}

// Get full user details
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub user fetch error:", error);
    throw error;
  }
}
