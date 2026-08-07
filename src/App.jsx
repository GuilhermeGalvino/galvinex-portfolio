import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import VideoSection from './components/VideoSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="site-wrapper">
      
      {/* 1. Header / Profile Box */}
      <ProfileHeader 
        editorName="Galvinex" 
        onSeePortfolio={() => {
          const el = document.getElementById('videos');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Divider */}
      <div className="vertical-divider" />

      {/* 2. Video Showcase Box (Long-Form Videos Only) */}
      <VideoSection 
        onSelectVideo={(video) => setSelectedVideo(video)} 
      />

      {/* Divider */}
      <div className="vertical-divider" />

      {/* 3. Contacts Box */}
      <ContactSection 
        discordUsername="thegalviz"
      />

      {/* 6. Footer Links */}
      <Footer />

      {/* Video Modal Player */}
      <VideoModal 
        video={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />

    </div>
  );
}
