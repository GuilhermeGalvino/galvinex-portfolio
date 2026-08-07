import React, { useState, useRef } from 'react';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <div id="beforeafter" className="card-box">
      <h2 className="title-section" style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>
        Color Grading & FX Finish
      </h2>
      <p className="subtitle" style={{ fontSize: '0.9rem', marginBottom: '1.75rem' }}>
        Drag the slider to compare RAW camera footage vs. Pro Color Graded Edit
      </p>

      <div 
        ref={containerRef}
        className="ba-container"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Graded Image (Background) */}
        <img 
          src="/assets/graded.jpg" 
          alt="Color Graded" 
          className="ba-img" 
        />
        <div className="ba-label ba-label-after">
          PRO EDIT & GRADED
        </div>

        {/* RAW Image (Clipped Overlay) */}
        <div 
          className="ba-overlay"
          style={{ width: `${sliderPos}%` }}
        >
          <img 
            src="/assets/raw.jpg" 
            alt="RAW Unedited" 
            className="ba-img"
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%', maxWidth: 'none' }}
          />
          <div className="ba-label ba-label-before">
            RAW CAMERA LOG
          </div>
        </div>

        {/* Divider Line & Handle */}
        <div 
          className="ba-slider-line"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="ba-slider-handle">
            <SlidersHorizontal size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
