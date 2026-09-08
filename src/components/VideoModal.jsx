import React from 'react';
import { X, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header Bar */}
        <div className="modal-header">
          <div>
            <span style={{ fontSize: '0.75rem', color: '#00D2FF', fontWeight: '600', textTransform: 'uppercase' }}>
              {video.category}
            </span>
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: '600' }}>
              {video.title}
            </h3>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Video Player Frame */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: video.aspectRatio === '9:16' ? '9 / 16' : '16 / 9', maxHeight: '70vh', background: '#000', display: 'flex', justifyContent: 'center' }}>
          {video.isVideoFile ? (
            <video 
              src={video.videoUrl} 
              controls 
              autoPlay 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <iframe
              src={video.videoUrl}
              title={video.title}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Info & Project Highlights */}
        <div style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: '#111827' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', fontSize: '0.875rem' }}>
              <ShieldCheck size={16} color="#00D2FF" />
              <span>{video.badge}</span>
              <span>•</span>
              <strong style={{ color: '#FFFFFF' }}>{video.stats}</strong>
            </div>
            <p style={{ color: '#64748B', fontSize: '0.825rem', marginTop: '0.25rem' }}>
              {video.description}
            </p>
          </div>

          <a 
            href="#contacts" 
            className="btn-pill" 
            style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
            onClick={onClose}
          >
            <span>Request Similar Edit</span>
          </a>
        </div>

      </div>
    </div>
  );
}
