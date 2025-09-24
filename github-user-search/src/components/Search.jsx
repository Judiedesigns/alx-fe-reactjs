import { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const fetchUsers = async (pageToFetch, append = false) => {
    setLoading(true);
    setError(null);

    try {
      const users = await searchUsers({
        username: query,
        location,
        minRepos: minRepos ? parseInt(minRepos, 10) : 0,
        page: pageToFetch,
        perPage: 10,
      });

      // Fetch extra details for each user
      const detailedUsers = await Promise.all(
        users.map(async (user) => {
          try {
            const details = await fetchUserData(user.login);
            return { ...user, ...details };
          } catch {
            return user;
          }
        })
      );

      setResults((prev) =>
        append ? [...prev, ...detailedUsers] : detailedUsers
      );

      // GitHub search API caps at 1000 results, so check if more exist
      setHasMore(users.length === 10);
    } catch {
      setError("API error, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim() && !location.trim() && !minRepos.trim()) return;

    setResults([]);
    setPage(1);
    await fetchUsers(1, false);
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await fetchUsers(nextPage, true);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <input
          type="text"
          value={query}
          placeholder="Search by username"
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="number"
          value={minRepos}
          placeholder="Min Repos"
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <p className="font-semibold">{user.login}</p>
              <p className="text-gray-600">
                {user.location || "No location"}
              </p>
              <p className="text-gray-600">
                {user.public_repos ?? "N/A"} repositories
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
