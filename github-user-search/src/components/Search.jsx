import { useState } from "react";
import { searchGithubUsers } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const users = await searchGithubUsers(query);
      setResults(users);
      setError(null);
    } catch (err) {
      setResults([]);
      setError("No users found or API error");
    }
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          placeholder="Search GitHub users..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "1rem" }}>
        {results.map((user) => (
          <div key={user.id} style={{ border: "1px solid #ccc", padding: "0.5rem", marginBottom: "0.5rem", borderRadius: "8px" }}>
            <img src={user.avatar_url} alt={user.login} width="50" height="50" style={{ borderRadius: "50%" }} />
            <span style={{ marginLeft: "0.5rem" }}>{user.login}</span>
            {" - "}
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
