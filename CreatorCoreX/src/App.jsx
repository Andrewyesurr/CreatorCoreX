import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './assets/components/Header.jsx';
import Footer from './assets/components/Footer.jsx';
import ScrollToTop from './assets/components/ScrollToTop.jsx';
import RequireAuth from './assets/components/RequireAuth.jsx';
import OnboardingRedirect from './components/OnboardingRedirect.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';

// Teams Pages
import ManageBookings from './pages/ManageBookings.jsx';
import PromoteTeam from './pages/PromoteTeam.jsx';
import StartTeam from './pages/StartTeam.jsx';
import TeamSupport from './pages/TeamSupport.jsx';
import TeamHelp from './pages/TeamHelp.jsx';
import TeamLeaderProfile from './pages/TeamLeaderProfile.jsx';
import TeamLeaderProfileView from './pages/TeamLeaderProfileView.jsx';
import OwnerProfileView from './pages/OwnerProfileView.jsx';
import PublicProfileView from './pages/PublicProfileView.jsx';
import Media from './pages/Media.jsx';
import PromoteTeamHero from './pages/PromoteTeam.jsx';

// Creators Pages
import ContentStudio from './pages/ContentStudio.jsx';
import CreateProfile from './pages/CreateProfile.jsx';
import Profile from './pages/Profile.jsx';
import EditProfile from './pages/EditProfile.jsx';

// Individuals Pages
import OpportunitiesBoard from './pages/OpportunitiesBoard.jsx';
import CreatePortfolio from './pages/CreatePortfolio.jsx';
import CreateIndividual from './pages/CreateIndividual.jsx';

// Explore Pages
import CreatorSpotlights from './pages/CreatorSpotlights.jsx';
import SuccessStories from './pages/SuccessStories.jsx';
import IndustryNews from './pages/IndustryNews.jsx';
import Blog from './pages/Blog.jsx';
import Explore from './pages/Explore.jsx';

// Support Pages
import FAQ from './pages/FAQ.jsx';
import Tutorials from './pages/Tutorials.jsx';
import Troubleshooting from './pages/Troubleshooting.jsx';
import VideoGuides from './pages/VideoGuides.jsx';
import LiveChat from './pages/LiveChat.jsx';
import Forums from './pages/Forums.jsx';
import Discord from './pages/Discord.jsx';
import Feedback from './pages/Feedback.jsx';
import FeatureRequests from './pages/FeatureRequests.jsx';

// Footer Pages
import AboutUs from './pages/AboutUs.jsx';
import AboutCreatorCore from './pages/AboutCreatorCore.jsx';
import OurMission from './pages/OurMission.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import CookiePolicy from './pages/CookiePolicy.jsx';
import CommunityGuidelines from './pages/CommunityGuidelines.jsx';
import Legal from './pages/Legal.jsx';
import ReportProblem from './pages/ReportProblem.jsx';

// Growth Hub
import CreatorGrowthHub from './pages/CreatorGrowthHub.jsx';

// Auth & Role Pages
import RoleSelector from './pages/RoleSelector.jsx';
import Signup from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import SetupCreator from './pages/SetupCreator.jsx';
import SetupTeam from './pages/SetupTeam.jsx';
import SetupIndividual from './pages/SetupIndividual.jsx';
import OAuthSuccess from './pages/OAuthSuccess.jsx';

// Onboarding Pages
import Welcome from './pages/onboarding/Welcome.jsx';
import PersonalInfo from './pages/onboarding/PersonalInfo.jsx';
import ProfessionalInfo from './pages/onboarding/ProfessionalInfo.jsx';
import AccountSecurity from './pages/onboarding/AccountSecurity.jsx';
import Success from './pages/onboarding/Success.jsx';

import './App.css';

function App() {
  const isHomePage = window.location.pathname === '/';

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Header />

        <main className={`main-content ${isHomePage ? 'home-fullscreen' : 'page-fullscreen'}`}>
          <Routes>
            {/* ✅ Wrap onboarding routes ONLY */}
            <Route
              path="/onboarding/*"
              element={
                <OnboardingRedirect>
                  <Routes>
                    <Route path="welcome" element={<Welcome />} />
                    <Route path="personal-info" element={<PersonalInfo />} />
                    <Route path="professional-info" element={<ProfessionalInfo />} />
                    <Route path="account-security" element={<AccountSecurity />} />
                    <Route path="success" element={<Success />} />
                  </Routes>
                </OnboardingRedirect>
              }
            />

            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/role-selector" element={<RoleSelector />} />
            <Route path="/setup-creator" element={<SetupCreator />} />
            <Route path="/setup-team" element={<SetupTeam />} />
            <Route path="/setup-individual" element={<SetupIndividual />} />
            <Route path="/oauth-success" element={<OAuthSuccess />} />
            <Route path="/edit-profile" element={<EditProfile />} />

            {/* Teams */}
            <Route path="/manage-bookings" element={<ManageBookings />} />
            <Route path="/promote-team" element={<PromoteTeam />} />
            <Route path="/start-team" element={<StartTeam />} />
            <Route path="/team-support" element={<TeamSupport />} />
            <Route path="/team-help" element={<TeamHelp />} />
            <Route path="/team-profile/:uid" element={<TeamLeaderProfile />} />

            {/* Creators */}
            <Route path="/content-studio" element={<RequireAuth><ContentStudio /></RequireAuth>} />
            <Route path="/create-profile" element={<RequireAuth><CreateProfile /></RequireAuth>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:uid" element={<RequireAuth><Profile /></RequireAuth>} />

            {/* Individuals */}
            <Route path="/opportunities-board" element={<RequireAuth><OpportunitiesBoard /></RequireAuth>} />
            <Route path="/create-portfolio" element={<RequireAuth><CreatePortfolio /></RequireAuth>} />
            <Route path="/create-individual" element={<RequireAuth><CreateIndividual /></RequireAuth>} />

            {/* Explore */}
            <Route path="/creator-spotlights" element={<CreatorSpotlights />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/industry-news" element={<IndustryNews />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/explore" element={<Explore />} />

            {/* Support */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} />
            <Route path="/video-guides" element={<VideoGuides />} />
            <Route path="/live-chat" element={<LiveChat />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/feature-requests" element={<FeatureRequests />} />

            {/* Footer Pages */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-creator-core" element={<AboutCreatorCore />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/community-guidelines" element={<CommunityGuidelines />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/report-problem" element={<ReportProblem />} />

            {/* Growth Hub */}
            <Route path="/creator-growth-hub" element={<RequireAuth><CreatorGrowthHub /></RequireAuth>} />

            {/* Public Profiles */}
            <Route path="/team-leader-profile-view" element={<TeamLeaderProfileView />} />
            <Route path="/owner-profile-view" element={<OwnerProfileView />} />
            <Route path="/public-profile-view" element={<PublicProfileView />} />
            <Route path="/media" element={<Media />} />
            <Route path="/promote-team-hero" element={<PromoteTeamHero />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
