import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true); setError(null); setResults([]);
    try {
      const users = await fetchUserData(query);
      if (!users) setError("Looks like we cant find the user");
      else setResults([users]);
    } catch { setError("API error, please try again later"); }
    finally { setLoading(false); }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input type="text" value={query} placeholder="Search by username"
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"/>
        <button type="submit"
          className="md:col-span-3 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">Search</button>
      </form>
      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <div className="space-y-4">
        {results.map((user) => (
          <div key={user.id} className="flex items-center border rounded-lg p-4 shadow hover:shadow-md transition">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full"/>
            <div className="ml-4">
              <p className="font-semibold">{user.login}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Profile</a>
            </div>
          </div>
        ))}
      </div>
      {/* {selectedUser && (
        <div className="mt-6 border rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold">{selectedUser.login}</h2>
          <img src={selectedUser.avatar_url} alt={selectedUser.login} className="w-24 h-24 rounded-full my-2"/>
          <p>Name: {selectedUser.name || "N/A"}</p>
          <p>Location: {selectedUser.location || "N/A"}</p>
          <p>Public Repos: {selectedUser.public_repos}</p>
          <p>Followers: {selectedUser.followers}</p>
          <p>Following: {selectedUser.following}</p>
          <a href={selectedUser.html_url} target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 block">View GitHub Profile</a>
        </div>
      )} */}
    </div>
  );
}
export default Search;
