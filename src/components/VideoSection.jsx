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

  return (
    <div id="videos" className="card-box">
      <h2 className="title-section" style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>
        Selected Works
      </h2>
      <p className="subtitle" style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>
        Long-Form Video Showcase
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
    </div>
  );
}
