import { useState } from "react";
import API from "../api/axios";

export default function Upload() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("media", file);
    formData.append("caption", caption);
    formData.append("type", file.type.startsWith("video") ? "video" : "image");

    try {
      const res = await API.post("/posts/create", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setSuccess("Uploaded successfully!");
      setCaption("");
      setFile(null);
    } catch (err) {
      setError(err.response?.data?.message || "Upload failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload Content</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">{success}</p>}

      <form onSubmit={handleUpload} className="flex flex-col space-y-3">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border p-2"
        />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}