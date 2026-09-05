import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  MessageSquare,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import NetworkBackground from '../components/NetworkBackground';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Full-Stack MERN Engineering',
    budget: '$10k - $25k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0062FF', '#00E5FF', '#3B82F6', '#10B981']
      });
    } catch (err) {
      console.log('Confetti effect triggered');
    }

    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How quickly can Shadab Technologies kick off a new engagement?',
      a: 'Following our initial technical discovery call and scope alignment, we typically assemble and onboard the dedicated engineering squad within 5 to 7 business days.'
    },
    {
      q: 'Do you provide frontend-only or full-stack MERN architecture?',
      a: 'We excel at both! We can construct pixel-perfect, highly responsive React frontend interfaces (like this one) or build end-to-end distributed systems incorporating Node.js APIs, Express microservices, and MongoDB clusters.'
    },
    {
      q: 'Who owns the intellectual property (IP) and source code?',
      a: 'You do. 100% of the source code, architectural designs, credentials, and documentation generated during the project are transferred directly to your organization under a standard IP assignment agreement.'
    },
    {
      q: 'Do you offer post-launch maintenance and 24/7 SLA monitoring?',
      a: 'Yes, we provide tiered post-launch retainers that encompass continuous automated backups, security patching, cloud cost optimization, and 24/7 incident response.'
    }
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* ========================================================
          CONTACT HERO with Canvas Network Background & Refined Heading
          ======================================================== */}
      <section 
        style={{
          position: 'relative',
          padding: '5rem 0 3.5rem 0',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)',
          overflow: 'hidden'
        }}
      >
        <NetworkBackground theme="light" nodeCount={60} opacity={0.8} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <span className="tech-badge" style={{ marginBottom: '1.15rem' }}>
              <span className="pulse-dot"></span>
              Connect With Our Team
            </span>

            <h1 
              style={{
                fontSize: 'clamp(1.95rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.2,
                marginBottom: '1.15rem',
                letterSpacing: '-0.025em'
              }}
            >
              Let’s Architect Your Next <span className="gradient-text">Breakthrough</span>.
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.68, maxWidth: '650px', margin: '0 auto' }}>
              Have an ambitious vision or need to modernize legacy systems? Drop us a line below or schedule a direct architectural discovery call.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          MAIN CONTACT HUB: Form & Direct Channels
          ======================================================== */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Direct Info & Channels */}
            <div>
              <span className="tech-badge" style={{ marginBottom: '0.85rem' }}>
                Direct Channels
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                We'd love to hear from you.
              </h2>
              <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.68, marginBottom: '2rem' }}>
                Our team responds to all enterprise and development inquiries within 4 business hours. No gatekeepers, speak directly with senior architects.
              </p>

              {/* Channel Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  {
                    icon: Mail,
                    title: 'Email Us',
                    val: 'hasham@gmail.com',
                    sub: 'Direct inbox monitored 24/7'
                  },
                  {
                    icon: Phone,
                    title: 'Phone & WhatsApp',
                    val: '+923270222414',
                    sub: 'Mon - Fri, 9am - 7pm EST'
                  },
                  {
                    icon: MapPin,
                    title: 'Global Engineering Lab',
                    val: 'Tech Innovation Hub, Silicon Avenue',
                    sub: 'Distributed engineering pods worldwide'
                  },
                  {
                    icon: Clock,
                    title: 'Guaranteed SLA Response',
                    val: '< 4 Hours',
                    sub: 'Rapid technical assessment'
                  }
                ].map((channel, i) => (
                  <div 
                    key={i}
                    className="glass-card"
                    style={{
                      padding: '1.15rem 1.35rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.15rem',
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0'
                    }}
                  >
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '9px',
                        background: 'rgba(0, 98, 255, 0.08)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <channel.icon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>
                        {channel.title}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>
                        {channel.val}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                        {channel.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Interactive Proposal & Contact Form */}
            <div 
              className="glass-card"
              style={{
                padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3.5vw, 2rem)',
                background: '#FFFFFF',
                border: '1.5px solid rgba(0, 98, 255, 0.15)',
                boxShadow: '0 20px 50px rgba(0, 98, 255, 0.08)'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto'
                    }}
                  >
                    <CheckCircle2 size={38} />
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                    Inquiry Received!
                  </h3>

                  <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    Thank you for reaching out to <strong>Shadab Technologies</strong>. A senior solutions architect is reviewing your project details and will be in touch shortly.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        service: 'Full-Stack MERN Engineering',
                        budget: '$10k - $25k',
                        message: ''
                      });
                    }}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.35rem)', fontWeight: 800, color: '#0F172A' }}>
                      Request Technical Consultation
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.2rem' }}>
                      Fill out the form below to receive a custom project estimate and roadmap.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.85rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Alex Morgan"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Work Email *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="alex@company.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.85rem' }}>
                    <div className="form-group">
                      <label className="form-label">Company / Organization</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Acme Corp"
                        className="form-input"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Estimated Budget</label>
                      <select 
                        className="form-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="< $10k">&lt; $10,000</option>
                        <option value="$10k - $25k">$10,000 - $25,000</option>
                        <option value="$25k - $50k">$25,000 - $50,000</option>
                        <option value="$50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Primary Service Area</label>
                    <select 
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Full-Stack MERN Engineering">Full-Stack MERN Engineering</option>
                      <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                      <option value="AI, LLMs & Machine Learning">AI, LLMs & Machine Learning</option>
                      <option value="Cybersecurity & Zero-Trust Defense">Cybersecurity & Zero-Trust Defense</option>
                      <option value="Mobile App Engineering">Mobile App Engineering</option>
                      <option value="Digital Transformation & Consulting">Digital Transformation & Consulting</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Objectives & Requirements *</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Describe your goals, tech stack preferences, current challenges, and target delivery dates..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem', marginTop: '0.35rem' }}
                  >
                    <Send size={16} />
                    <span>Submit Project Details</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FREQUENTLY ASKED QUESTIONS ACCORDION
          ======================================================== */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <SectionHeader 
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about working with Shadab Technologies."
          />

          <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="glass-card"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0F172A' }}>
                      {faq.q}
                    </span>
                    <div 
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: isOpen ? '#0062FF' : '#F1F5F9',
                        color: isOpen ? '#FFFFFF' : '#475569',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: '#475569', fontSize: '0.92rem', lineHeight: 1.65 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
