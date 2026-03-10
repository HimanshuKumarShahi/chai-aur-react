import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch posts from backend
  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts"); // GET /api/posts
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Could not load posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Upload handler
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setError("Select a file");

    const formData = new FormData();
    formData.append("media", file);
    formData.append("caption", caption);
    formData.append("type", file.type.startsWith("video") ? "video" : "image");

    try {
      await API.post("/posts/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("Uploaded!");
      setCaption("");
      setFile(null);
      fetchPosts(); // refresh feed
    } catch (err) {
      console.error("Upload failed:", err);
      setError(err.response?.data?.message || "Upload failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-6">
      {/* Upload Box */}
      <div className="bg-white p-4 rounded shadow mb-6">
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <form onSubmit={handleUpload} className="flex flex-col space-y-2">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <input
            type="text"
            placeholder="Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Post
          </button>
        </form>
      </div>

      {/* Posts Feed */}
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="bg-white p-4 rounded shadow mb-4">
            <p className="font-bold">{post.user.username}</p>
            <p>{post.caption}</p>
            {post.mediaType === "image" && (
              <img src={post.mediaUrl} alt="" className="mt-2 rounded" />
            )}
            {post.mediaType === "video" && (
              <video controls src={post.mediaUrl} className="mt-2 rounded" />
            )}
          </div>
        ))
      )}
    </div>
  );
}