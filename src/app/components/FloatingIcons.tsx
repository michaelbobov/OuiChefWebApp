'use client';

import React, { useState } from 'react';

const FloatingIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const icons = [
    { id: 1, icon: '🍳', delay: '0s', duration: '20s', top: '10%', left: '5%', float: 'float', size: 'text-3xl md:text-4xl' },
    { id: 2, icon: '🥘', delay: '2s', duration: '18s', top: '20%', right: '10%', float: 'float2', size: 'text-2xl md:text-3xl' },
    { id: 3, icon: '🥗', delay: '4s', duration: '22s', bottom: '15%', left: '15%', float: 'float3', size: 'text-3xl md:text-4xl' },
    { id: 4, icon: '🍝', delay: '1s', duration: '25s', bottom: '25%', right: '5%', float: 'float', size: 'text-2xl md:text-3xl' },
    { id: 5, icon: '🥐', delay: '3s', duration: '15s', top: '30%', left: '20%', float: 'float2', size: 'text-3xl md:text-4xl' },
    { id: 6, icon: '🍲', delay: '5s', duration: '28s', top: '40%', right: '15%', float: 'float3', size: 'text-2xl md:text-3xl' },
    { id: 7, icon: '🍕', delay: '1.5s', duration: '23s', top: '45%', left: '8%', float: 'float', size: 'text-3xl md:text-4xl' },
    { id: 8, icon: '🍜', delay: '3.5s', duration: '19s', bottom: '35%', right: '20%', float: 'float2', size: 'text-2xl md:text-3xl' },
    { id: 9, icon: '🍣', delay: '5.5s', duration: '26s', top: '15%', right: '25%', float: 'float3', size: 'text-3xl md:text-4xl' },
    { id: 10, icon: '🥪', delay: '2.5s', duration: '21s', bottom: '40%', left: '25%', float: 'float', size: 'text-2xl md:text-3xl' },
    { id: 11, icon: '🍱', delay: '4.5s', duration: '24s', top: '25%', left: '35%', float: 'float2', size: 'text-3xl md:text-4xl' },
    { id: 12, icon: '🍛', delay: '6.5s', duration: '27s', bottom: '30%', right: '30%', float: 'float3', size: 'text-2xl md:text-3xl' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map(({ id, icon, delay, duration, top, left, right, bottom, float, size }) => (
        <div
          key={id}
          className={`absolute ${size} opacity-20 ${float} animate-fadeIn hover:opacity-40 transition-all duration-300 cursor-pointer`}
          style={{
            top,
            left,
            right,
            bottom,
            animationDelay: delay,
            animationDuration: duration,
          }}
          onMouseEnter={() => setHoveredIcon(id)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div className={`transform transition-all duration-300 ${
            hoveredIcon === id ? 'animate-bounce animate-spin' : ''
          }`}>
            {icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons; 