import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ 
  size = 'md', // 'sm', 'md', 'lg'
  theme = 'light', // 'light' or 'dark'
  withLink = true 
}) {
  const dimensions = {
    sm: { icon: 34, title: '1.2rem', sub: '0.62rem', gap: '0.65rem' },
    md: { icon: 44, title: '1.45rem', sub: '0.72rem', gap: '0.85rem' },
    lg: { icon: 60, title: '1.95rem', sub: '0.85rem', gap: '1.1rem' }
  }[size] || { icon: 44, title: '1.45rem', sub: '0.72rem', gap: '0.85rem' };

  const isDark = theme === 'dark';

  const content = (
    <div 
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: dimensions.gap,
        userSelect: 'none',
        textDecoration: 'none'
      }}
      className="logo-wrapper group"
    >
      {/* Animated SVG Emblem */}
      <div 
        style={{
          width: dimensions.icon,
          height: dimensions.icon,
          flexShrink: 0,
          position: 'relative',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        className="logo-icon-box"
      >
        <svg 
          viewBox="0 0 100 100" 
          width="100%" 
          height="100%"
          style={{
            filter: 'drop-shadow(0 4px 12px rgba(0, 98, 255, 0.4))'
          }}
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#0062FF" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Futuristic Hexagonal Housing */}
          <polygon 
            points="50,4 92,26 92,74 50,96 8,74 8,26" 
            fill={isDark ? '#080E24' : '#0B1536'} 
            stroke="url(#logoGrad)" 
            strokeWidth="3.5" 
            strokeLinejoin="round" 
          />

          {/* Circuit Geometry Lines */}
          <polygon 
            points="50,14 84,31 84,69 50,86 16,69 16,31" 
            fill="none" 
            stroke="#0062FF" 
            strokeWidth="1.2" 
            strokeDasharray="4 3" 
            opacity="0.75" 
          />

          {/* S Geometric Conduit */}
          <path 
            d="M66 29 H38 C31 29 27 33 27 39 C27 45 31 49 37 49 H63 C69 49 73 53 73 59 C73 65 69 69 63 69 H34" 
            fill="none" 
            stroke="url(#neonCyan)" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* T Crossbar & Core Trunk */}
          <line x1="33" y1="37" x2="67" y2="37" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="37" x2="50" y2="76" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />

          {/* Interactive Core Lights */}
          <circle cx="50" cy="4" r="3.5" fill="#00E5FF" />
          <circle cx="92" cy="26" r="3" fill="#0062FF" />
          <circle cx="92" cy="74" r="3" fill="#00E5FF" />
          <circle cx="50" cy="96" r="3.5" fill="#0062FF" />
          <circle cx="8" cy="74" r="3" fill="#00E5FF" />
          <circle cx="8" cy="26" r="3" fill="#0062FF" />
          <circle cx="50" cy="57" r="3.2" fill="#00E5FF" />
        </svg>
      </div>

      {/* Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span 
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: dimensions.title,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: isDark ? '#FFFFFF' : '#0B1536'
          }}
        >
          SHADAB<span style={{ color: 'var(--primary)' }}>.</span>
        </span>
        <span 
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: dimensions.sub,
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: isDark ? '#38BDF8' : 'var(--primary)'
          }}
        >
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
        {content}
      </Link>
    );
  }

  return content;
}
