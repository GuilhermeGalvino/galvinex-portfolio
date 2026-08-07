import React from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ editorName = "Gabriel" }) {
  return (
    <div id="aboutme" className="card-box">
      <h2 className="title-section" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        About Me
      </h2>
      
      <p style={{
        color: '#94A3B8',
        fontSize: '1.05rem',
        lineHeight: '1.7',
        maxWidth: '34rem',
        margin: '0 auto 2rem auto',
        fontWeight: '400'
      }}>
        I’m <strong style={{ color: '#FFFFFF' }}>{editorName}</strong>, a video editor who creates engaging content that keeps viewers watching. I focus on retention storytelling, clean cuts, strong pacing, and impactful visuals to elevate every project for global creators.
      </p>

      {/* Tech Stack / Tool Badges */}
      <div style={{ borderTop: '1px solid #1E293B', paddingTop: '1.5rem', marginTop: '1rem' }}>
        <div style={{ fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', fontWeight: '600' }}>
          PRIMARY TOOLSET & WORKFLOW
        </div>

        <div className="tech-badges-group">
          <span className="badge-tech">
            <CheckCircle2 size={14} color="#00D2FF" /> Adobe Premiere Pro
          </span>
          <span className="badge-tech">
            <CheckCircle2 size={14} color="#00D2FF" /> After Effects (VFX & Motion)
          </span>
          <span className="badge-tech">
            <CheckCircle2 size={14} color="#00D2FF" /> DaVinci Resolve (Color)
          </span>
          <span className="badge-tech">
            <CheckCircle2 size={14} color="#00D2FF" /> Frame.io (Smooth Revisions)
          </span>
        </div>
      </div>
    </div>
  );
}
