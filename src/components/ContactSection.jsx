import React, { useState } from 'react';
import { MessageSquare, Copy, Check } from 'lucide-react';

export default function ContactSection({ 
  discordUsername = "thegalviz"
}) {
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <div id="contacts" className="card-box">
      <h2 className="title-section" style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>
        Contacts
      </h2>
      
      <p className="subtitle" style={{ fontSize: '1rem', marginBottom: '1.75rem' }}>
        Send me a message and let's work together
      </p>

      {/* Discord Button matching Carrd style */}
      <div className="contact-buttons-group">
        <a 
          href={`https://discord.com/users/${discordUsername}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-btn"
          style={{ padding: '0.85rem 2.25rem', fontSize: '1rem' }}
        >
          <MessageSquare size={20} />
          <span>Discord</span>
        </a>
      </div>

      {/* Direct Copy Handle for Discord */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
        <button 
          className="contact-handle-pill"
          onClick={() => handleCopy(discordUsername, 'Discord')}
          style={{ padding: '0.65rem 1.5rem', fontSize: '0.95rem' }}
        >
          {copiedText === 'Discord' ? <Check size={18} color="#00D2FF" /> : <Copy size={18} />}
          <span>Discord: <strong>{discordUsername}</strong></span>
        </button>
      </div>

      {copiedText && (
        <div style={{ 
          marginTop: '1rem', 
          color: '#00D2FF', 
          fontSize: '0.85rem', 
          fontWeight: '500',
          animation: 'fadeIn 0.2s ease'
        }}>
          ✓ Copied Discord handle ({discordUsername}) to clipboard!
        </div>
      )}
    </div>
  );
}
