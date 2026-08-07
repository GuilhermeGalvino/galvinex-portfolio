import React from 'react';

export default function Footer() {
  return (
    <footer style={{ width: '100%', textAlign: 'center', marginTop: '1rem', paddingBottom: '2rem' }}>
      <ul className="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <p className="footer-copyright">
        © Off stage. All rights reserved
      </p>
    </footer>
  );
}
