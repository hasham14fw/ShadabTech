import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer 
      style={{
        background: '#070D1F',
        color: '#94A3B8',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 98, 255, 0.2)'
      }}
    >
      {/* Background glow orbs */}
      <div 
        className="glow-orb" 
        style={{ 
          top: '-100px', 
          right: '-50px', 
          width: '350px', 
          height: '350px', 
          background: 'rgba(0, 98, 255, 0.15)' 
        }} 
      />
      <div 
        className="glow-orb" 
        style={{ 
          bottom: '0px', 
          left: '5%', 
          width: '400px', 
          height: '400px', 
          background: 'rgba(0, 229, 255, 0.08)' 
        }} 
      />

      <div className="container" style={{ padding: '5rem 1.5rem 2rem 1.5rem', position: 'relative', zIndex: 1 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Logo size="md" theme="dark" />
            <p style={{ fontSize: '0.92rem', lineHeight: '1.7', color: '#94A3B8' }}>
              Pioneering hyper-scalable software engineering, cloud infrastructures, and artificial intelligence systems. We engineer the digital backbone for tomorrow’s industry leaders.
            </p>

            {/* Live Operational Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                width: 'fit-content'
              }}
            >
              <div 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 10px #10B981'
                }} 
              />
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#34D399', letterSpacing: '0.02em' }}>
                All Systems Operational (99.99%)
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 
              style={{ 
                color: '#FFFFFF', 
                fontSize: '1.05rem', 
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em'
              }}
            >
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {[
                { name: 'Home Hub', path: '/' },
                { name: 'About Shadab Tech', path: '/about' },
                { name: 'Engineering Services', path: '/services' },
                { name: 'Contact & Quotes', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    style={{ 
                      color: '#94A3B8', 
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00E5FF'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <ArrowRight size={14} opacity={0.6} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tech Capabilities */}
          <div>
            <h4 
              style={{ 
                color: '#FFFFFF', 
                fontSize: '1.05rem', 
                marginBottom: '1.25rem' 
              }}
            >
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              {[
                'Full-Stack MERN Architecture',
                'Cloud Migration & Kubernetes',
                'AI & Predictive Algorithms',
                'Cybersecurity Audits & Zero Trust',
                'High-Throughput Microservices',
                'Enterprise Mobile Apps'
              ].map((service, idx) => (
                <li key={idx}>
                  <Link 
                    to="/services" 
                    style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h4 
              style={{ 
                color: '#FFFFFF', 
                fontSize: '1.05rem', 
                marginBottom: '1.25rem' 
              }}
            >
              Tech Dispatch
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginBottom: '1rem', lineHeight: '1.6' }}>
              Subscribe for monthly architectural breakthroughs, security bulletins, and innovation reports.
            </p>

            <form onSubmit={handleSubscribe} style={{ position: 'relative' }}>
              <input
                type="email"
                placeholder="developer@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 3rem 0.75rem 1rem',
                  borderRadius: '0.65rem',
                  border: '1px solid rgba(0, 98, 255, 0.35)',
                  background: 'rgba(15, 23, 42, 0.8)',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                style={{
                  position: 'absolute',
                  right: '6px',
                  top: '6px',
                  bottom: '6px',
                  width: '36px',
                  background: 'linear-gradient(135deg, #0062FF, #00E5FF)',
                  border: 'none',
                  borderRadius: '0.45rem',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Send size={16} />
              </button>
            </form>

            {subscribed && (
              <div 
                style={{ 
                  marginTop: '0.75rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: '#34D399', 
                  fontSize: '0.82rem' 
                }}
              >
                <CheckCircle2 size={16} />
                <span>Thank you! You're subscribed to Tech Dispatch.</span>
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={soc.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#CBD5E1',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0062FF';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#00E5FF';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <soc.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>© {new Date().getFullYear()} Shadab Technologies Inc. All rights reserved.</span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer', color: '#64748B' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer', color: '#64748B' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer', color: '#64748B' }}>Security Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
