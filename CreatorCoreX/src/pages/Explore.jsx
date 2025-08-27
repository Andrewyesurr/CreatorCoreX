import React, { useEffect, useState } from "react";
import PostModal from "../components/PostModal";
import axios from "axios";
import "./Explore.css";
// import ModalForPost from "../components/ModalForPost"; // Ensure it's moved to a separate file and properly imported

const Explore = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [role, setRole] = useState("all");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const currentUserId = window.localStorage.getItem("userId");
  const authToken = window.localStorage.getItem("token");

  const isUserSearch = searchQuery.trim().startsWith("@");

  useEffect(() => {
    if (isUserSearch) {
      fetchUsers();
    } else {
      fetchPosts();
    }
  }, [searchQuery, role, category]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const params = {};
      if (searchQuery) params.search = searchQuery;
      if (role !== "all") params.role = role;
      if (category !== "all") params.category = category;
      const res = await axios.get("http://localhost:5000/api/posts", { params });
      setPosts(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const params = {};
      let userSearch = searchQuery.startsWith("@") ? searchQuery.slice(1) : searchQuery;
      if (userSearch) params.search = userSearch;
      if (role !== "all") params.role = role;
      const res = await axios.get("http://localhost:5000/api/users", { params });
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching users:", err);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleRoleChange = (selectedRole) => setRole(selectedRole);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const userCategories = users.flatMap(u => [
    ...(u.skills || []),
    u.industry,
    u.category
  ]);
  const postCategories = posts.flatMap(p => [
    ...(p.skills || []),
    p.industry,
    p.category
  ]);
  const allCategories = ["all", ...new Set([...userCategories, ...postCategories].filter(Boolean))];

  const filteredUsers = users.filter(user => {
    if (category === "all") return true;
    const userCategories = [
      ...(user.skills || []),
      user.industry,
      user.category
    ].map(String);
    return userCategories.includes(category);
  });

  const filteredPosts = posts.filter(post => {
    if (category === "all") return true;
    const postCategories = [
      ...(post.skills || []),
      post.industry,
      post.category
    ].map(String);
    return postCategories.includes(category);
  });

  return (
    <div className="explore-container">
      <div className="explore-left">
        <h1 className="explore-heading">Explore</h1>
        <div className="explore-grid">
          {loading ? (
            <p className="no-posts">Loading...</p>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <div
                key={post._id || index}
                className={`explore-item ${(index + 1) % 5 === 0 ? "tall-post" : "square-post"}`}
                onClick={() => setSelectedPost(post)}
              >
                <img
                  src={post.imageUrls && post.imageUrls[0] ? `${import.meta.env.VITE_API_URL}${post.imageUrls[0]}` : "/default-post.jpg"}
                  alt={post.caption || "Post"}
                  className="explore-img"
                />
                <div className="explore-meta">
                  <strong>{post.caption}</strong>
                  <div>{post.category || post.industry}</div>
                  <div>{post.skills?.join(", ")}</div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-posts">No posts found.</p>
          )}
        </div>
  <PostModal post={selectedPost} open={!!selectedPost} onClose={() => setSelectedPost(null)} />
      </div>
      <div className="explore-right">
        <input
          type="text"
          placeholder="Search posts or type @ to search accounts..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="explore-search-input"
        />
        <div className="explore-category">
          {["all", "creator", "teamLeader", "individual"].map(r => (
            <button
              key={r}
              className={role === r ? "active" : ""}
              onClick={() => handleRoleChange(r)}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
        <select
          className="explore-search-input"
          value={category}
          onChange={handleCategoryChange}
        >
          {allCategories.map((cat, i) => (
            <option key={cat + i} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
        <div className="explore-hint">
          🔍 Filter by keywords, roles, and categories to find exactly what you're looking for!
        </div>
        {isUserSearch && (
          <div className="explore-accounts-list">
            {loading ? (
              <p className="no-posts">Loading...</p>
            ) : filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <a
                  key={user._id || index}
                  className="explore-account-item"
                  href={`/profile/${user._id}`}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, padding: 8, border: '1px solid #eee', borderRadius: 8 }}
                >
                  <img
                    src={user.profileImage || "/default-pfp.jpg"}
                    alt={user.username || "Profile"}
                    style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <strong>@{user.username}</strong>
                    <div>{user.displayName || user.name}</div>
                    <div style={{ fontSize: ".92em", opacity: 0.8 }}>{user.role}</div>
                    <div style={{ fontSize: ".92em", opacity: 0.7 }}>{user.bio}</div>
                  </div>
                </a>
              ))
            ) : (
              <p className="no-posts">No accounts found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
