import { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchData";

export default function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts()
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid gap-4">
      {data.map(post => (
        <div key={post.id} className="p-4 border rounded shadow">
          <h3 className="font-semibold text-lg">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
