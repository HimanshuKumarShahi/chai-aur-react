import { useEffect, useState } from "react";
import API from "../api/axios";

function Feed() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {

    const token = localStorage.getItem("token");

    const res = await API.get("/posts", {
      headers: {
        Authorization: token
      }
    });

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>

      <h2>ReelPro Feed</h2>

      {posts.map((post) => (

        <div
          key={post._id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "20px"
          }}
        >

          <h4>{post.user?.username}</h4>

          {post.mediaType === "image" && (
            <img
              src={post.mediaUrl}
              alt=""
              width="400"
            />
          )}

          {post.mediaType === "video" && (
            <video
              src={post.mediaUrl}
              controls
              width="400"
            />
          )}

          <p>{post.caption}</p>

        </div>

      ))}

    </div>
  );
}

export default Feed;