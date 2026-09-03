import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  theme = 'light' // 'light' or 'dark'
}) {
  const isDark = theme === 'dark';

  return (
    <div 
      style={{
        textAlign: centered ? 'center' : 'left',
        maxWidth: centered ? '680px' : '100%',
        margin: centered ? '0 auto 3rem auto' : '0 0 2rem 0',
      }}
      className="section-header"
    >
      {badge && (
        <div style={{ marginBottom: '0.85rem' }}>
          <span className={`tech-badge ${isDark ? 'tech-badge-cyan' : ''}`}>
            <span className="pulse-dot" style={{ background: isDark ? '#00E5FF' : '#0062FF' }}></span>
            {badge}
          </span>
        </div>
      )}

      <h2 
        style={{
          fontSize: 'clamp(1.65rem, 2.5vw, 2.25rem)',
          fontWeight: 800,
          color: isDark ? '#FFFFFF' : '#0F172A',
          marginBottom: '0.85rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.22
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p 
          style={{
            fontSize: '1rem',
            color: isDark ? '#94A3B8' : '#475569',
            lineHeight: 1.62
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
