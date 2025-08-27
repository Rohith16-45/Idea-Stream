"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editingPost, setEditingPost] = useState(null); // track which post is being edited

  // READ - fetch posts
  const getPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // CREATE - add post
  const addPost = async () => {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );
    setPosts([...posts, res.data]);
    setNewPost({ title: "", body: "" });
  };

  // DELETE - remove post
  const deletePost = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setPosts(posts.filter((currPost) => currPost.id !== id));
  };

  // UPDATE - edit post
  const updatePost = async () => {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${editingPost.id}`,
      newPost
    );

    // Update local state
    setPosts(
      posts.map((post) =>
        post.id === editingPost.id ? { ...post, ...res.data } : post
      )
    );

    // Reset form
    setNewPost({ title: "", body: "" });
    setEditingPost(null);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setNewPost({ title: post.title, body: post.body });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">📚 All Posts</h1>

      {/* Add/Edit Post Form */}
      <div className="card p-4 shadow-sm mb-4">
        <h4 className="mb-3">
          {editingPost ? "✏️ Edit Post" : "➕ Add a New Post"}
        </h4>
        <div className="row g-2">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="title"
              value={newPost.title}
              onChange={handleChange}
              placeholder="Post title"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              name="body"
              value={newPost.body}
              onChange={handleChange}
              placeholder="Post body"
            />
          </div>
          <div className="col-md-2 d-grid">
            {editingPost ? (
              <button onClick={updatePost} className="btn btn-success">
                Update
              </button>
            ) : (
              <button onClick={addPost} className="btn btn-primary">
                Add Post
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="row" style={{ marginBottom: "70px" }}>
        {posts.map((post, index) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">
                  {index + 1}. {post.title}
                </h5>
                <p className="card-text text-muted">{post.body}</p>
                <button
                  onClick={() => handleEdit(post)}
                  className="btn btn-outline-warning btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
