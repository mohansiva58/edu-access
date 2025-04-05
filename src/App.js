import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import SearchSection from "./SearchSection";
import CommunitySection from "./CommunitySection";
import Footer from "./Footer";
import ChatbotComponent from "./ChatbotComponent";
import Resources from "./Resources";
import Mentorship from "./Mentorship";
import Community from "./Community";
import SignIn from "./SignIn";
import Apps from "./Apps";
import Analytics from "./Analytics";
import Roadmap from "./Roadmap";
import Videos from "./Videos";  // Import the Videos component
import VideoGallery from "./VideoGallery";
import Documents from "./Documents";

const Home = () => (
  <>
    <HeroSection />
    <StatsSection />
    <SearchSection />
    <CommunitySection />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/community" element={<Community />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/documents" element={<Documents />}/>
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/video-gallery" element={<VideoGallery />}/>
          
        </Routes>
        <ChatbotComponent />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
