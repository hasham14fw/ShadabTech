import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Star, 
  Server, 
  Activity, 
  RotateCw, 
  ChevronRight
} from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  const capabilities = [
    {
      id: 'mern',
      icon: Code2,
      title: 'Full-Stack MERN Solutions',
      summary: 'High-throughput, reactive applications built on MongoDB, Express.js, React, and Node.js with pixel-perfect responsiveness.',
      badge: 'Core Specialty',
      metric: 'Sub-10ms Latency',
      highlights: [
        'Modular React frontend with fluid responsiveness',
        'High-concurrency Express REST & GraphQL gateway',
        'Optimized MongoDB schema indexing & replica sets'
      ],
      link: '/services'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      summary: 'Automated CI/CD pipelines, container orchestration, Kubernetes clustering, and serverless multi-cloud deployments.',
      badge: 'High Reliability',
      metric: '99.99% Uptime',
      highlights: [
        'Kubernetes clustering with automated autoscaling',
        'Zero-downtime blue/green deployment pipelines',
        'Infrastructure as Code (Terraform) across multi-cloud'
      ],
      link: '/services'
    },
    {
      id: 'ai',
      icon: Cpu,
      title: 'AI & Cognitive Engineering',
      summary: 'Embedding modern generative AI, autonomous agent workflows, and predictive analytics engines directly into business ecosystems.',
      badge: 'Next-Gen',
      metric: '10x Automation Speed',
      highlights: [
        'Custom LLM integrations with Vector DBs',
        'Autonomous task planning and multi-agent execution',
        'Predictive analytics, forecasting, and anomaly detection'
      ],
      link: '/services'
    },
    {
      id: 'security',
      icon: ShieldCheck,
      title: 'Cybersecurity & Zero-Trust',
      summary: 'Enterprise-grade encryption, vulnerability penetration testing, compliance governance, and resilient threat-mitigation protocols.',
      badge: 'Bank-Grade',
      metric: 'Zero-Trust Protocol',
      highlights: [
        'Zero-Trust Network Access with OAuth2 / SAML',
        'End-to-end cryptographic encryption (AES-256)',
        'SOC2 Type II and GDPR engineering readiness'
      ],
      link: '/services'
    }
  ];

  const testimonials = [
    {
      quote: "Shadab Technologies transformed our legacy architecture into a blazing-fast MERN stack cloud platform. Our system latency dropped by 64% and scalability is effortless.",
      author: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Nexus Financial Global",
      rating: 5
    },
    {
      quote: "The speed of execution and attention to detail from the Shadab Tech engineering squad was world-class. The software engineering and AI integration blew our board away.",
      author: "Elena Rostova",
      role: "VP of Product Engineering",
      company: "Aetherial Health Systems",
      rating: 5
    },
    {
      quote: "Dependable, transparent, and technically brilliant. They built our customer portal from ground zero to production ahead of schedule with zero post-launch bugs.",
      author: "David Tariq",
      role: "Co-Founder & CEO",
      company: "Apex Logistics Tech",
      rating: 5
    }
  ];

  return (
    <div>
      {/* ========================================================
          HERO SECTION (Clean, Modern, Simple & Understandable)
          ======================================================== */}
      <section 
        style={{
          position: 'relative',
          padding: '7.5rem 0 4.5rem 0',
          minHeight: '82vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F6F9FE 100%)',
          overflow: 'hidden'
        }}
      >
        {/* Subtle, Calm HTML5 Canvas Network Background */}
        <NetworkBackground theme="light" nodeCount={36} opacity={0.65} />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>

            {/* Main Headline - Confident, Clean & Clear */}
            <h1 
              style={{
                fontSize: 'clamp(2.1rem, 4.2vw, 3.25rem)',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: '1.25rem',
                lineHeight: 1.18,
                letterSpacing: '-0.025em'
              }}
            >
              Architecting High-Performance{' '}
              <span className="gradient-text">Cloud, AI & Software</span> Systems.
            </h1>

            {/* Subtitle */}
            <p 
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                color: '#475569',
                lineHeight: 1.68,
                marginBottom: '2.25rem',
                maxWidth: '680px',
                margin: '0 auto 2.25rem auto'
              }}
            >
              Shadab Technologies designs, builds, and manages enterprise-grade web applications, scalable cloud infrastructure, and intelligent automation systems.
            </p>

            {/* Simple, Clear Call to Actions */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '1rem', 
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '3.5rem'
              }}
            >
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '0.98rem' }}>
                <Sparkles size={17} />
                <span>Let's Connect</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn btn-secondary" style={{ padding: '0.85rem 2rem', fontSize: '0.98rem' }}>
                <Layers size={17} />
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Clean Metrics Bar (Simple, Readable, 2x2 on Mobile, 4x1 on Desktop) */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem',
                marginTop: '1rem'
              }}
            >
              {[
                { icon: Server, label: 'Cloud Uptime SLA', value: '99.99%', sub: 'Guaranteed reliability' },
                { icon: CheckCircle2, label: 'Projects Shipped', value: '150+', sub: 'Worldwide clients' },
                { icon: Activity, label: 'Speed Optimization', value: '3.5x', sub: 'Faster load time' },
                { icon: Star, label: 'Client Satisfaction', value: '4.95', sub: '5-Star average' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="clean-card"
                  style={{
                    padding: '1.25rem 1rem',
                    textAlign: 'center',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    cursor: 'default'
                  }}
                >
                  <div 
                    style={{ 
                      fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)', 
                      fontWeight: 800, 
                      color: 'var(--primary)', 
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1.15
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1E293B', marginTop: '0.25rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          CORE CAPABILITIES SECTION (Clean, Simple, Directly Legible)
          ======================================================== */}
      <section className="section-py" style={{ background: '#FFFFFF', position: 'relative' }}>
        <div className="container">
          <SectionHeader 
            badge="Core Capabilities"
            title="Engineered for Exponential Scale"
            subtitle="Explore our specialized engineering offerings and architectural solutions."
          />

          {/* Clean, Simple & Modern Capabilities Cards Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {capabilities.map((cap) => (
              <div 
                key={cap.id}
                className="simple-card"
              >
                <div>
                  {/* Header with Icon & Metric Pill */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(0, 98, 255, 0.08)',
                        color: 'var(--primary)',
                        border: '1px solid rgba(0, 98, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <cap.icon size={24} />
                    </div>
                    <span 
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        background: '#EFF6FF',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(191, 219, 254, 0.7)'
                      }}
                    >
                      {cap.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 700, 
                      color: '#0F172A',
                      marginBottom: '0.65rem' 
                    }}
                  >
                    {cap.title}
                  </h3>

                  {/* Summary */}
                  <p 
                    style={{ 
                      fontSize: '0.92rem', 
                      color: '#475569', 
                      lineHeight: '1.62',
                      marginBottom: '1.35rem' 
                    }}
                  >
                    {cap.summary}
                  </p>

                  {/* Highlights Checklist */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0, marginBottom: '1.75rem' }}>
                    {cap.highlights.map((h, hIdx) => (
                      <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem', color: '#334155' }}>
                        <div style={{ marginTop: '0.15rem', color: '#0062FF', flexShrink: 0 }}>
                          <CheckCircle2 size={15} />
                        </div>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clean Button */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.15rem' }}>
                  <Link 
                    to={cap.link}
                    className="btn btn-secondary"
                    style={{ width: '100%', padding: '0.65rem', fontSize: '0.88rem' }}
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          TESTIMONIALS & TRUST (Responsive Grid)
          ======================================================== */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <SectionHeader 
            badge="Client Endorsements"
            title="Trusted by Forward-Thinking Leaders"
            subtitle="Discover what engineering executives and founders say about collaborating with Shadab Technologies."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {testimonials.map((testi, i) => (
              <div 
                key={i}
                className="glass-card"
                style={{
                  padding: 'clamp(1.5rem, 4vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#FFFFFF'
                }}
              >
                <div>
                  {/* Rating Stars */}
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.15rem', color: '#F59E0B' }}>
                    {[...Array(testi.rating)].map((_, s) => (
                      <Star key={s} size={16} fill="#F59E0B" />
                    ))}
                  </div>

                  <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#334155', lineHeight: '1.68', marginBottom: '1.5rem' }}>
                    "{testi.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0062FF, #00E5FF)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.92rem'
                    }}
                  >
                    {testi.author.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.92rem' }}>
                      {testi.author}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                      {testi.role}, <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{testi.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          BOTTOM CALL TO ACTION BANNER (Responsive Padding)
          ======================================================== */}
      <section style={{ padding: '0 0 5rem 0', background: '#F8FAFC' }}>
        <div className="container">
          <div 
            style={{
              background: 'linear-gradient(135deg, #0A1435 0%, #060B1E 100%)',
              borderRadius: '1.75rem',
              padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 98, 255, 0.22)'
            }}
          >
            {/* Ambient glow in banner */}
            <div className="glow-orb" style={{ top: '-40%', left: '30%', width: '380px', height: '380px', background: 'rgba(0, 98, 255, 0.28)' }} />
            
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', margin: '0 auto' }}>
              <span className="tech-badge tech-badge-cyan" style={{ marginBottom: '1.15rem' }}>
                <Sparkles size={13} /> Ready To Elevate Your Tech?
              </span>

              <h2 
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em'
                }}
              >
                Let’s Build Something <span className="gradient-text-light">Extraordinary</span> Together.
              </h2>

              <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: '1.65', marginBottom: '2.25rem' }}>
                Whether you need a complete MERN stack web app, cloud migration, or specialized AI integration, our senior engineers are ready.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}>
                  <span>Initiate Consultation</span>
                  <ArrowRight size={17} />
                </Link>
                <Link to="/services" className="btn btn-glass" style={{ padding: '0.85rem 1.85rem', fontSize: '0.95rem' }}>
                  <span>Explore All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
