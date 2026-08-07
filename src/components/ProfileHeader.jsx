import React from 'react';
import { ChevronDown, Sparkles, Film } from 'lucide-react';

export default function ProfileHeader({ editorName = "Galvinex", onSeePortfolio }) {
  return (
    <div id="home" className="card-box">
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img 
          src="/assets/avatar.jpg" 
          alt={editorName} 
          className="profile-avatar"
        />
      </div>

      <h1 className="title-main">{editorName}</h1>
      
      <p className="subtitle" style={{ maxWidth: '32rem', margin: '0 auto 1.75rem auto' }}>
        Video editing for digital creators & global brands.
        <br />
        <span style={{ color: '#00D2FF', fontSize: '0.9rem', fontWeight: '500' }}>
          • Hooking International Audiences & Maximizing Retention •
        </span>
      </p>

      <a 
        href="#videos" 
        className="btn-pill" 
        onClick={onSeePortfolio}
      >
        <ChevronDown size={20} />
        <span>See Portfolio</span>
      </a>
    </div>
  );
}
