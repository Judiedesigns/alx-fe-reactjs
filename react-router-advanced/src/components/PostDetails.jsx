import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPostById = async (id) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
};

const PostDetails = () => {
  const { id } = useParams();
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading post...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/posts" style={{ textDecoration: "none" }}>⬅ Back to posts</Link>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <p><strong>Post ID:</strong> {data.id}</p>
    </div>
  );
};

export default PostDetails;
