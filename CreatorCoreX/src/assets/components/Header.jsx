import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const userStr = localStorage.getItem("user");
      
      if (token && userStr) {
        setIsAuthenticated(true);
        try {
          setUser(JSON.parse(userStr));
        } catch (err) {
          console.error("Error parsing user data:", err);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
    
    // Listen for storage changes (when user logs in/out in other tabs)
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/signin");
    closeMegaMenus();
  };

  // Function to close all mega menus
  const closeMegaMenus = () => {
    if (headerRef.current) {
      const megaMenus = headerRef.current.querySelectorAll('.nav-item-with-mega');
      megaMenus.forEach(menu => {
        menu.classList.remove('force-show');
        menu.classList.add('force-hide');
      });
      
      // Wait until mouse moves, then re-enable hover
      const clearForceHide = () => {
        megaMenus.forEach(menu => {
          menu.classList.remove('force-hide');
        });
        document.removeEventListener('mousemove', clearForceHide);
      };

      document.addEventListener('mousemove', clearForceHide);
    }
  };

  // Close mega menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMegaMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header-bar" ref={headerRef}>
      <div className="header-container">
        <div className="header-logo">🍉CreatorCoreX</div>

        <nav className="main-nav">
          <Link to="/" onClick={closeMegaMenus}>Home</Link>
          
          {/* Teams Mega Menu */}
          <div className="nav-item-with-mega">
            <a href="#teams" className="nav-link">Teams</a>
            <div className="hover-buffer"></div>
            <div className="mega-menu">
              <div className="mega-menu-container">
                <div className="mega-menu-content">
                  <div className="mega-menu-column">
                    <h4>Team Management</h4>
                    <Link to="/manage-bookings" onClick={closeMegaMenus}>Manage Bookings</Link>
                    <Link to="/promote-team" onClick={closeMegaMenus}>Promote Your Team</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Get Started</h4>
                    <Link to="/start-team" onClick={closeMegaMenus}>Start a Team</Link>
                    <Link to="/look-for-individuals" onClick={closeMegaMenus}>Look for Individuals</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Support</h4>
                    <Link to="/team-help" onClick={closeMegaMenus}>Team Help</Link>
                    <Link to="/team-support" onClick={closeMegaMenus}>Contact Support</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Creators Mega Menu */}
          <div className="nav-item-with-mega">
            <a href="#creators" className="nav-link">Creators</a>
            <div className="hover-buffer"></div>
            <div className="mega-menu">
              <div className="mega-menu-container">
                <div className="mega-menu-content">
                  <div className="mega-menu-column">
                    <h4>Get Started</h4>
                    <Link to="/look-for-individuals" onClick={closeMegaMenus}>Look for Individuals</Link>
                    <Link to="/look-for-teams" onClick={closeMegaMenus}>Look for Teams</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Tools & Features</h4>
                    <Link to="/content-studio" onClick={closeMegaMenus}>Content Studio</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Growth</h4>
                    <Link to="/marketing-tools" onClick={closeMegaMenus}>Marketing Tools</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Individuals Mega Menu */}
          <div className="nav-item-with-mega">
            <a href="#individuals" className="nav-link">Individuals</a>
            <div className="hover-buffer"></div>
            <div className="mega-menu">
              <div className="mega-menu-container">
                <div className="mega-menu-content">
                  <div className="mega-menu-column">
                    <h4>Find Work</h4>
                    <Link to="/find-teams-to-join" onClick={closeMegaMenus}>Find Teams to Join</Link>
                    <Link to="/get-hired-by-creators" onClick={closeMegaMenus}>Get Hired by Creators</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Get Hired</h4>
                    <a href="#apply-to-teams" onClick={closeMegaMenus}>Apply to Teams</a>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Support & Growth</h4>
                    <Link to="/freelancing-tips" onClick={closeMegaMenus}>Freelancing Tips</Link>
                    <Link to="/getting-started-guide" onClick={closeMegaMenus}>Get Started Guide</Link>
                    <Link to="/platform-rules" onClick={closeMegaMenus}>Platform Rules</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Explore Mega Menu */}
          <div className="nav-item-with-mega">
            <a href="#explore" className="nav-link">Explore</a>
            <div className="hover-buffer"></div>
            <div className="mega-menu">
              <div className="mega-menu-container">
                <div className="mega-menu-content">
                  <div className="mega-menu-column">
                    <h4>Discover</h4>
                    <Link to="/discover-creators" onClick={closeMegaMenus}>Discover Creators</Link>
                    <Link to="/explore-teams" onClick={closeMegaMenus}>Explore Teams</Link>
                    <a href="#explore-the-world" onClick={closeMegaMenus}>Explore the World</a>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Showcase</h4>
                    <Link to="/creator-spotlights" onClick={closeMegaMenus}>Creator Spotlights</Link>
                    <Link to="/success-stories" onClick={closeMegaMenus}>Success Stories</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Learn & Connect</h4>
                    <Link to="/industry-news" onClick={closeMegaMenus}>Industry News</Link>
                    <Link to="/blog" onClick={closeMegaMenus}>Blog</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Mega Menu */}
          <div className="nav-item-with-mega">
            <a href="#support" className="nav-link">Support</a>
            <div className="hover-buffer"></div>
            <div className="mega-menu">
              <div className="mega-menu-container">
                <div className="mega-menu-content">
                  <div className="mega-menu-column">
                    <h4>Help Center</h4>
                    <Link to="/faq" onClick={closeMegaMenus}>FAQ</Link>
                    <Link to="/tutorials" onClick={closeMegaMenus}>Tutorials</Link>
                    <Link to="/troubleshooting" onClick={closeMegaMenus}>Troubleshooting</Link>
                    <Link to="/video-guides" onClick={closeMegaMenus}>Video Guides</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Contact Us</h4>
                    <Link to="/live-chat" onClick={closeMegaMenus}>Live Chat</Link>
                    <Link to="/email-support" onClick={closeMegaMenus}>Email Support</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h4>Community</h4>
                    <Link to="/forums" onClick={closeMegaMenus}>Forums</Link>
                    <Link to="/discord" onClick={closeMegaMenus}>Discord</Link>
                    <Link to="/feedback" onClick={closeMegaMenus}>Feedback</Link>
                    <Link to="/feature-requests" onClick={closeMegaMenus}>Feature Requests</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-item-with-mega profile-dropdown">
            <div className="profile-menu">
              <span className="material-symbols-rounded">
                account_circle
              </span>
            </div>
            <div className="mega-menu profile-menu-dropdown">
              <div className="mega-menu-container">
                <div className="profile-menu-content">
                  {!isAuthenticated ? (
                    // Show Sign In/Sign Up for non-authenticated users
                    <>
                      <Link to="/signin" onClick={closeMegaMenus} className="profile-menu-item">
                        <span className="material-symbols-rounded">login</span>
                        Sign In
                      </Link>
                      <Link to="/signup" onClick={closeMegaMenus} className="profile-menu-item">
                        <span className="material-symbols-rounded">person_add</span>
                        Sign Up
                      </Link>
                    </>
                  ) : (
                    // Show user options for authenticated users
                    <>
                      <div className="profile-menu-item profile-info">
                        <span className="material-symbols-rounded">person</span>
                        {user?.name || user?.email || 'User'}
                      </div>
                      <Link to="/profile" onClick={closeMegaMenus} className="profile-menu-item">
                        <span className="material-symbols-rounded">dashboard</span>
                        My Profile
                      </Link>
                      <Link to="/settings" onClick={closeMegaMenus} className="profile-menu-item">
                        <span className="material-symbols-rounded">settings</span>
                        Settings
                      </Link>
                      <button onClick={handleLogout} className="profile-menu-item logout-btn">
                        <span className="material-symbols-rounded">logout</span>
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
