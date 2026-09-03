import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.35s ease',
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.88)' 
          : 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled 
          ? '1px solid rgba(0, 98, 255, 0.12)' 
          : '1px solid rgba(226, 232, 240, 0.6)',
        boxShadow: scrolled 
          ? '0 4px 25px rgba(15, 23, 42, 0.06)' 
          : 'none',
        padding: scrolled ? '0.75rem 0' : '1.1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(241, 245, 249, 0.75)',
            padding: '0.35rem 0.5rem',
            borderRadius: '9999px',
            border: '1px solid rgba(226, 232, 240, 0.9)'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.92rem',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                color: isActive ? '#FFFFFF' : '#475569',
                background: isActive 
                  ? 'linear-gradient(135deg, #0062FF 0%, #0099FF 100%)' 
                  : 'transparent',
                boxShadow: isActive 
                  ? '0 2px 10px rgba(0, 98, 255, 0.35)' 
                  : 'none',
                transition: 'all 0.25s ease'
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/contact"
            className="btn btn-primary desktop-cta"
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
          >
            <Sparkles size={16} />
            <span>Let's Connect</span>
            <ArrowUpRight size={16} />
          </Link>

          {/* Hamburger Menu Toggle for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '0.5rem'
            }}
            className="mobile-toggle"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 98, 255, 0.15)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            animation: 'fadeIn 0.25s ease'
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                padding: '0.85rem 1.25rem',
                borderRadius: '0.75rem',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: isActive ? '#0062FF' : '#334155',
                background: isActive ? 'rgba(0, 98, 255, 0.08)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              })}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={18} opacity={0.5} />
            </NavLink>
          ))}
          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #E2E8F0' }}>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Sparkles size={18} />
              <span>Let's Connect</span>
            </Link>
          </div>
        </div>
      )}

      {/* Inline styles for responsive visibility */}
      <style>{`
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
