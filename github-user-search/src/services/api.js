export async function searchData(query) {
  const url = \`https://jsonplaceholder.typicode.com/posts?q=\${query}\`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network error");
    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}
