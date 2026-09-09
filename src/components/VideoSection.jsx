import React from 'react';
import { Play, Eye, Flame, Sparkles } from 'lucide-react';

export default function VideoSection({ onSelectVideo }) {
  // Long-form portfolio projects tailored for foreign creators
  const longFormVideos = [
    {
      id: 'video-1',
      title: 'Editing Showcase Project #1',
      category: 'YouTube Long-Form',
      stats: 'High Retention Edit',
      badge: 'Client Work • 4K 60FPS',
      thumbnail: 'https://img.youtube.com/vi/JoBlBjNDSuQ/maxresdefault.jpg',
      aspectRatio: '16:9',
      videoUrl: 'https://www.youtube.com/embed/JoBlBjNDSuQ?autoplay=1',
      description: 'Dynamic pacing, cinematic sound design, custom motion graphic maps, and multi-cam editing designed to maximize watch time.'
    },
    {
      id: 'video-2',
      title: 'Editing Showcase Project #2',
      category: 'YouTube Long-Form / Advert',
      stats: 'High-Conversion Edit',
      badge: 'Client Work • 4K 60FPS',
      thumbnail: 'https://img.youtube.com/vi/HibO8-dErsk/maxresdefault.jpg',
      aspectRatio: '16:9',
      videoUrl: 'https://www.youtube.com/embed/HibO8-dErsk?autoplay=1',
      description: 'Edited with ultra-smooth speed ramps, sound effects layering, and crisp 4K export.'
    }
  ];

  const shortFormVideos = [
    {
      id: 'short-yFa5r5IXNnU',
      title: 'Trial Galistic Short Edit',
      category: 'Short-Form / Reels',
      stats: 'High Retention Hook • 60FPS',
      badge: '9:16 Vertical Edit',
      thumbnail: 'https://img.youtube.com/vi/yFa5r5IXNnU/hqdefault.jpg',
      aspectRatio: '9:16',
      videoUrl: 'https://www.youtube.com/embed/yFa5r5IXNnU?autoplay=1',
      description: 'Dynamic fast-paced short-form video edit featuring custom sound design, color accents, and motion graphic pop-ups.'
    }
  ];

  return (
    <div id="videos" className="card-box">
      <h2 className="title-section" style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>
        Selected Works
      </h2>
      <p className="subtitle" style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>
        Long-Form & Short-Form Video Showcase
      </p>

      {/* 16:9 Featured Video Stack */}
      <div className="video-grid-16-9">
        {longFormVideos.map((item) => (
          <div 
            key={item.id} 
            className="video-card-16-9"
            onClick={() => onSelectVideo(item)}
          >
            <img 
              src={item.thumbnail} 
              alt={item.title} 
              className="video-thumb-img"
              onError={(e) => {
                const vidId = item.videoUrl.split('/embed/')[1]?.split('?')[0];
                if (vidId) e.target.src = `https://img.youtube.com/vi/${vidId}/hqdefault.jpg`;
              }} 
            />
            
            <div className="play-icon-wrapper">
              <Play size={26} fill="white" style={{ marginLeft: '4px' }} />
            </div>

            <div className="video-overlay">
              <div className="video-card-badge">
                {item.badge}
              </div>
              <div className="video-card-info">
                <div className="video-card-title">{item.title}</div>
                <div className="video-card-stats">
                  <span>{item.stats}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical 9:16 Shorts Section */}
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#00D2FF', fontWeight: '600', marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Flame size={20} color="#00D2FF" />
          Short-Form Hooks & Reels (9:16)
        </h3>
        
        <div className="shorts-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {shortFormVideos.map((item) => (
            <div 
              key={item.id} 
              className="short-card-9-16"
              onClick={() => onSelectVideo(item)}
            >
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="video-thumb-img" 
              />
              
              <div className="play-icon-wrapper">
                <Play size={22} fill="white" style={{ marginLeft: '3px' }} />
              </div>

              <div className="video-overlay">
                <div className="video-card-badge" style={{ fontSize: '0.675rem', padding: '0.2rem 0.5rem' }}>
                  {item.badge}
                </div>
                <div className="video-card-info">
                  <div className="video-card-title" style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
