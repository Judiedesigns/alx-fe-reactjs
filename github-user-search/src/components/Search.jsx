import { useState } from "react";
import { searchGithubUsers, fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResults([]);
    setSelectedUser(null);

    try {
      const users = await searchGithubUsers(query);
      if (users.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setResults(users);
      }
    } catch {
      setError("API error, please try again later");
    } finally {
      setLoading(false);
    }
  };

  const handleUserClick = async (username) => {
    setLoading(true);
    setError(null);
    setSelectedUser(null);

    try {
      const userData = await fetchUserData(username);
      setSelectedUser(userData);
    } catch {
      setError("Failed to fetch user details");
    } finally {
      setLoading(false);
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

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "1rem" }}>
        {results.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "0.5rem",
              marginBottom: "0.5rem",
              borderRadius: "8px",
              cursor: "pointer"
            }}
            onClick={() => handleUserClick(user.login)}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              width="50"
              height="50"
              style={{ borderRadius: "50%" }}
            />
            <span style={{ marginLeft: "0.5rem" }}>{user.login}</span>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div style={{ marginTop: "1rem", border: "1px solid #ddd", padding: "1rem" }}>
          <h2>{selectedUser.login}</h2>
          <img
            src={selectedUser.avatar_url}
            alt={selectedUser.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <p>Name: {selectedUser.name || "N/A"}</p>
          <p>Followers: {selectedUser.followers}</p>
          <p>Following: {selectedUser.following}</p>
          <a href={selectedUser.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
