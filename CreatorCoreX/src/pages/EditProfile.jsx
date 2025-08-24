import React, { useEffect, useMemo, useState } from "react";
import BannerCropModal from "../components/BannerCropModal";
import "./EditProfile.css";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

/* -------- Sidebar data (groups + items) -------- */
const settingsMenu = [
  {
    heading: "HOW YOU USE CREATORCOREX",
    items: [
      { id: "edit-profile", label: "Edit profile" },
      { id: "notifications", label: "Notifications" },
    ],
  },
  {
    heading: "FOR PROFESSIONALS",
    items: [
      { id: "pro-account", label: "Professional account" },
      { id: "creator-tools", label: "Creator tools and controls" },
    ],
  },
  {
    heading: "WHO CAN SEE YOUR CONTENT",
    items: [
      { id: "privacy", label: "Account privacy" },
      { id: "close-friends", label: "Close Friends" },
      { id: "blocked", label: "Blocked" },
      { id: "story-live-location", label: "Story, live and location" },
    ],
  },
  {
    heading: "HOW OTHERS INTERACT",
    items: [
      { id: "messages", label: "Messages & replies" },
      { id: "tags-mentions", label: "Tags & mentions" },
      { id: "comments", label: "Comments" },
      { id: "sharing-reuse", label: "Sharing & reuse" },
      { id: "restricted", label: "Restricted accounts" },
      { id: "hidden-words", label: "Hidden Words" },
    ],
  },
  {
    heading: "WHAT YOU SEE",
    items: [
      { id: "muted", label: "Muted accounts" },
      { id: "content-prefs", label: "Content preferences" },
      { id: "like-share-counts", label: "Like and share counts" },
      { id: "subscriptions", label: "Subscriptions" },
    ],
  },
  {
    heading: "YOUR APP AND MEDIA",
    items: [
      { id: "archiving", label: "Archiving and downloading" },
      { id: "accessibility", label: "Accessibility" },
      { id: "language", label: "Language" },
      { id: "site-permissions", label: "Website permissions" },
    ],
  },
  {
    heading: "FOR FAMILIES",
    items: [{ id: "family-center", label: "Family Center" }],
  },
  {
    heading: "MORE INFO AND SUPPORT",
    items: [
      { id: "help", label: "Help" },
      { id: "account-status", label: "Account Status" },
    ],
  },
];

const flattenMenu = settingsMenu.flatMap((g) => g.items);
const labelFor = (id) => flattenMenu.find((i) => i.id === id)?.label || "";

/* -------- Sidebar component -------- */
function Sidebar({ active = "edit-profile", onChange }) {
  return (
    <aside className="settings-sidebar">
      {settingsMenu.map((group) => (
        <div key={group.heading}>
          <div className="settings-title">{group.heading}</div>
          <nav className="settings-list">
            {group.items.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`settings-item ${active === id ? "active" : ""}`}
                onClick={() => onChange?.(id)}
              >
                <span className="label">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
}

/* -------- Main page -------- */
export default function EditProfile() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("edit-profile");

  // form state
  const [username, setUsername] = useState(""); // @handle
  const [fullName, setFullName] = useState(""); // display name
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("unspecified");
  const [suggestions, setSuggestions] = useState(true);

  // avatar
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);

  // banner
  const [bannerUrl, setBannerUrl] = useState("");
  const [bannerFile, setBannerFile] = useState(null);

  // crop modal
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [editorImage, setEditorImage] = useState("");

  const bioLimit = 150;
  const bioLeft = useMemo(() => Math.max(0, bioLimit - bio.length), [bio]);

  useEffect(() => {
    const run = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();

        // Map backend fields → form
        setUsername(data.username || "");
        setFullName(data.name || data.displayName || "");
        setWebsite(data.website || "");
        setBio(data.bio || "");
        setGender(data.gender || "unspecified");
        setSuggestions(
          typeof data.showSuggestions === "boolean" ? data.showSuggestions : true
        );
  setAvatarUrl(data.profileImage || "/default-avatar.png");
  setBannerUrl(fixUrl(data.bannerImage) || "/images/default-banner.jpg");
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  const onPickAvatar = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    const reader = new FileReader();
    reader.onload = () => setAvatarUrl(String(reader.result));
    reader.readAsDataURL(file);
  };

  const onPickBanner = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // open crop modal with selected image
    const reader = new FileReader();
    reader.onload = () => {
      setEditorImage(String(reader.result));
      setShowBannerModal(true);
    };
    reader.readAsDataURL(file);
  };

  // helper to crop via canvas and return a Blob
  async function getCroppedImg(imageSrc, croppedAreaPixels) {
    const image = new window.Image();
    image.src = imageSrc;
    await new Promise((resolve) => {
      image.onload = resolve;
    });
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.floor(croppedAreaPixels.width));
    canvas.height = Math.max(1, Math.floor(croppedAreaPixels.height));
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/jpeg", 0.92);
    });
  }

  // called by the crop modal
  const handleBannerCropDone = async (croppedAreaPixels) => {
    if (!editorImage) return;
    const croppedBlob = await getCroppedImg(editorImage, croppedAreaPixels);
    const file = new File([croppedBlob], "banner.jpg", { type: "image/jpeg" });
    setBannerFile(file);
    // show immediate preview
    setBannerUrl(URL.createObjectURL(croppedBlob));
    setShowBannerModal(false);
  };

  const onSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const userObj = JSON.parse(localStorage.getItem("user"));
      const userId = userObj?._id || userObj?.id;
      if (!userId) throw new Error("No user ID found");

      // 1) Upload avatar if changed
      let newAvatarUrl = avatarUrl;
      if (avatarFile) {
        const form = new FormData();
        form.append("profileImage", avatarFile);
        const up = await fetch(`${API_BASE}/api/users/${userId}/profile-picture`, {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
          body: form,
        });
        if (up.ok) {
          const upData = await up.json();
          newAvatarUrl = upData.profileImage || newAvatarUrl;
          setAvatarUrl(newAvatarUrl);
          setAvatarFile(null);
        } else {
          console.warn("Avatar upload failed; continuing with current URL");
        }
      }

      // 2) Upload banner if changed
      let newBannerUrl = bannerUrl;
      if (bannerFile) {
        const formB = new FormData();
        formB.append("bannerImage", bannerFile);
        const upB = await fetch(`${API_BASE}/api/users/${userId}/banner-image`, {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
          body: formB,
        });
        if (upB.ok) {
          const upDataB = await upB.json();
          newBannerUrl = upDataB.bannerImage || newBannerUrl;
          setBannerUrl(fixUrl(newBannerUrl)); // Always use full URL for preview
          setBannerFile(null);
        } else {
          console.warn("Banner upload failed; continuing with current URL");
        }
      }

      // 3) Update profile info
      const res = await fetch(`${API_BASE}/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          name: fullName,
          website,
          bio: bio.slice(0, bioLimit),
          gender,
          showSuggestions: suggestions,
          profileImage: newAvatarUrl,
          bannerImage: newBannerUrl,
        }),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Save failed");
      }

      // server returns { message, user }
      const updated = await res.json();
      const updatedUser = updated?.user || updated;
      if (updatedUser) {
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }

      alert("Profile updated!");
    } catch (err) {
      console.error(err);
      alert("Could not save changes.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="edit-page">
        <div className="edit-loading">Loading…</div>
      </div>
    );
  }

  // Prefix server-relative uploads for preview
  const fixUrl = (u) =>
    u && u.startsWith("/uploads/") ? `${API_BASE}${u}` : u;
  const displayAvatarUrl = fixUrl(avatarUrl);
  const displayBannerUrl = fixUrl(bannerUrl) || "/images/default-banner.jpg";

  return (
    <div className="edit-page">
      {/* Left sidebar without icons */}
      <Sidebar active={activeTab} onChange={setActiveTab} />

      {/* Main content */}
      <main className="edit-wrap">
        {activeTab === "edit-profile" ? (
          <form className="edit-card" onSubmit={onSave}>
            {/* Header: avatar + handle + change photo */}
            <div className="profile-head">
              <img className="head-avatar" src={displayAvatarUrl} alt="avatar" />
              <div className="head-info">
                <div className="head-username">@{username || "username"}</div>
                <div className="head-name">{fullName || "Your name"}</div>
              </div>
              <label className="btn small" htmlFor="avatarInput">
                Change photo
              </label>
              <input
                id="avatarInput"
                type="file"
                accept="image/*"
                onChange={onPickAvatar}
                hidden
              />
            </div>

            {/* Website */}
            <div className="form-row">
              <label>Website</label>
              <input
                type="url"
                placeholder="https://example.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <div className="hint">
                Editing your links works best on mobile in some apps. You can still save it here.
              </div>
            </div>

            {/* Banner image (with crop modal trigger) */}
            <div className="form-row">
              <label>Banner image</label>
              <div className="banner-uploader" role="group">
                <div
                  className="banner-preview"
                  style={{
                    backgroundImage: `url(${displayBannerUrl})`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                  }}
                  role="img"
                  aria-label="Banner preview"
                />
                <div className="banner-side">
                  <div className="banner-note">
                    For the best results on all devices, use an image that’s at least
                    <strong> 2048 × 1152</strong> and <strong>6&nbsp;MB</strong> or less.
                  </div>
                  <div className="banner-actions">
                    <label className="btn small">
                      Change
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={onPickBanner}
                      />
                    </label>
                    <button
                      type="button"
                      className="btn ghost small"
                      onClick={() => {
                        setBannerUrl("/images/default-banner.jpg");
                        setBannerFile(null);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {showBannerModal && editorImage && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <BannerCropModal
                      image={editorImage}
                      onCancel={() => setShowBannerModal(false)}
                      onCropComplete={handleBannerCropDone}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Bio */}
            <div className="form-row">
              <label>Bio</label>
              <div className="textarea-wrap">
                <textarea
                  maxLength={bioLimit}
                  rows={4}
                  placeholder="Tell people about you…"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <div className={`char-count ${bioLeft <= 10 ? "warn" : ""}`}>
                  {bioLeft}/{bioLimit}
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="form-row">
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="unspecified">Prefer not to say</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="nonbinary">Non-binary</option>
                <option value="other">Other</option>
              </select>
              <div className="hint">This won’t be part of your public profile.</div>
            </div>

            {/* Suggestions toggle */}
            <div className="form-row">
              <label>Show account suggestions on profiles</label>
              <div className="toggle-line">
                <div className="toggle-desc">
                  Choose whether people can see similar account suggestions on your profile,
                  and whether your account can be suggested on other profiles.
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={suggestions}
                    onChange={(e) => setSuggestions(e.target.checked)}
                  />
                  <span className="slider" />
                </label>
              </div>
            </div>

            {/* Name + Handle */}
            <div className="grid-2">
              <div className="form-row">
                <label>Display name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="form-row">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="form-actions">
              <button
                type="button"
                className="btn ghost"
                onClick={() => window.history.back()}
              >
                Cancel
              </button>
              <button type="submit" className="btn brand" disabled={saving}>
                {saving ? "Saving…" : "Submit"}
              </button>
            </div>
          </form>
        ) : (
          <div className="edit-card">
            <div style={{ padding: "32px 8px" }}>
              <h3 style={{ margin: 0 }}>{labelFor(activeTab)}</h3>
              <p style={{ color: "var(--muted)", marginTop: 8 }}>
                This settings section isn’t built yet. (You clicked “{labelFor(activeTab)}”.)
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
