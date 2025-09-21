export async function searchGithubUsers(query) {
  const url = \`https://api.github.com/search/users?q=\${query}\`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network error");
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
}
