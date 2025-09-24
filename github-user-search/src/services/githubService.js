import axios from "axios";

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub user fetch error:", error);
    throw error;
  }
}  
