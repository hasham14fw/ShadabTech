import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Compass, 
  ShieldCheck, 
  Zap, 
  Award, 
  Users, 
  Globe2, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2
} from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Architectural Precision',
      desc: 'We never cut corners on codebase integrity. Every component, schema, and API route is constructed with high cohesion, low coupling, and hyper-scalability.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Trust Security',
      desc: 'Security is not an afterthought; it is built into the bedrock of our software lifecycle from database encryption to fine-grained IAM controls.'
    },
    {
      icon: Zap,
      title: 'High-Velocity Delivery',
      desc: 'Through modern CI/CD automations and modern MERN workflows, we turn complex digital roadmaps into living production software in record time.'
    },
    {
      icon: Compass,
      title: 'Future-Proof Vision',
      desc: 'We adopt battle-tested technologies and blend them with cutting-edge AI breakthroughs to ensure your technology stack remains ahead for years.'
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Genesis of Shadab Technologies',
      desc: 'Founded with a clear mandate: Deliver enterprise-grade full stack engineering and modern web software without bloated agency overhead.'
    },
    {
      year: '2023',
      title: 'Scale & Cloud Expansion',
      desc: 'Expanded into distributed cloud infrastructure and microservice migrations, delivering over 50+ mission-critical platforms globally.'
    },
    {
      year: '2024',
      title: 'AI & Cognitive Systems Integration',
      desc: 'Pioneered custom AI agents, intelligent data pipelines, and predictive analytics modules for fintech, logistics, and healthcare clients.'
    },
    {
      year: '2025+',
      title: 'Next-Gen Global Engineering Hub',
      desc: 'Operating 24/7 global delivery, driving multi-cloud serverless architectures, and redefining the digital standards for high-growth enterprises.'
    }
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* ========================================================
          ABOUT HERO with Network Background & Refined Heading
          ======================================================== */}
      <section 
        style={{
          position: 'relative',
          padding: '5rem 0 4rem 0',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)',
          overflow: 'hidden'
        }}
      >
        <NetworkBackground theme="light" nodeCount={60} opacity={0.8} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <span className="tech-badge" style={{ marginBottom: '1.15rem' }}>
              <span className="pulse-dot"></span>
              About Shadab Technologies
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
              We Build The <span className="gradient-text">Digital Foundations</span> That Move The Modern World.
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.68, marginBottom: '2.25rem' }}>
              Shadab Technologies is an elite team of software engineers, cloud architects, and digital strategists committed to transforming visionary ideas into resilient, production-hardened web and AI applications.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Collaborate With Us</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <span>View Engineering Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          MISSION & VISION SECTION
          ======================================================== */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.75rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="tech-badge" style={{ marginBottom: '0.85rem' }}>
                Our Mission & Vision
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.15rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                Engineering clarity in an era of technological complexity.
              </h2>
              <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.68, marginBottom: '1.15rem' }}>
                In a digital landscape flooded with ephemeral hype, Shadab Technologies focuses on structural reliability, rapid execution, intuitive interfaces, and measurable business outcomes.
              </p>
              <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.68, marginBottom: '1.85rem' }}>
                Whether migrating legacy monoliths to high-efficiency cloud clusters, authoring responsive modern interfaces, or deploying enterprise AI systems, we execute with ruthless precision.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.15rem' }}>
                <div className="glass-card" style={{ padding: '1.15rem', background: '#F8FAFC' }}>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1E293B', marginTop: '0.15rem' }}>
                    Code Review Quality Gate
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.15rem', background: '#F8FAFC' }}>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                    24/7
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1E293B', marginTop: '0.15rem' }}>
                    System Monitoring & Ops
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Graphic Representation */}
            <div 
              className="glass-card"
              style={{
                padding: '2.25rem',
                background: 'linear-gradient(135deg, #0A122C 0%, #060B1E 100%)',
                color: '#FFFFFF',
                borderRadius: '1.5rem',
                border: '1px solid rgba(0, 229, 255, 0.3)',
                boxShadow: '0 20px 50px rgba(0, 98, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div className="glow-orb" style={{ top: '10%', right: '10%', width: '180px', height: '180px', background: 'rgba(0, 229, 255, 0.22)' }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.25rem' }}>
                  <Layers size={24} color="#00E5FF" />
                  <span style={{ fontSize: '1.15rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                    The Shadab Tech Advantage
                  </span>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.15rem', padding: 0 }}>
                  {[
                    { title: 'Full Stack Mastery', desc: 'Seamless integration across UI, API, microservices, and databases.' },
                    { title: 'Production Ready by Day 1', desc: 'Zero deployment headaches with automated CI/CD and containerized environments.' },
                    { title: 'Modern Aesthetics', desc: 'Bespoke blue and white clean designs that captivate users and inspire trust.' },
                    { title: 'Transparent Telemetry', desc: 'Direct access to sprint velocity, staging environments, and real-time logs.' }
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ marginTop: '0.15rem', color: '#00E5FF' }}>
                        <Sparkles size={15} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.94rem', color: '#FFFFFF' }}>{item.title}</div>
                        <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '0.15rem' }}>{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CORE VALUES SECTION
          ======================================================== */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <SectionHeader 
            badge="Guiding Principles"
            title="Our Core Engineering Values"
            subtitle="The fundamental tenets that direct every line of code we push and every architectural decision we advise."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {values.map((v, i) => (
              <div 
                key={i} 
                className="glass-card" 
                style={{ 
                  padding: '2rem', 
                  background: '#FFFFFF',
                  border: '1px solid rgba(226, 232, 240, 0.9)'
                }}
              >
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(0, 98, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    marginBottom: '1.15rem'
                  }}
                >
                  <v.icon size={23} />
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, marginBottom: '0.65rem', color: '#0F172A' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.62 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          ROADMAP & TIMELINE
          ======================================================== */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <SectionHeader 
            badge="Our Trajectory"
            title="The Evolution of Excellence"
            subtitle="A chronology of sustained growth, technological milestones, and continuous innovation."
          />

          <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative' }}>
            <div 
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '20px',
                width: '3px',
                background: 'linear-gradient(180deg, #0062FF, #00E5FF)',
                borderRadius: '9999px'
              }} 
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '3.2rem' }}>
              {milestones.map((m, idx) => (
                <div 
                  key={idx} 
                  className="glass-card"
                  style={{
                    padding: '1.5rem 1.85rem',
                    background: '#F8FAFC',
                    position: 'relative'
                  }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      left: '-3.45rem',
                      top: '1.5rem',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      border: '3.5px solid #0062FF',
                      boxShadow: '0 0 10px rgba(0, 98, 255, 0.4)'
                    }} 
                  />

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.45rem' }}>
                    <span 
                      style={{ 
                        fontSize: '0.8rem', 
                        fontWeight: 800, 
                        color: 'var(--primary)', 
                        background: 'rgba(0, 98, 255, 0.1)',
                        padding: '0.15rem 0.55rem',
                        borderRadius: '5px'
                      }}
                    >
                      {m.year}
                    </span>
                    <h3 style={{ fontSize: '1.12rem', fontWeight: 700, color: '#0F172A' }}>
                      {m.title}
                    </h3>
                  </div>

                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.62 }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT PAGE CTA
          ======================================================== */}
      <section style={{ padding: '0 0 5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              background: 'linear-gradient(135deg, #0062FF 0%, #0099FF 100%)',
              color: '#FFFFFF',
              borderRadius: '1.75rem',
              padding: '3.5rem 2rem',
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(0, 98, 255, 0.3)'
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, marginBottom: '0.85rem' }}>
              Want to partner with our senior engineering team?
            </h2>
            <p style={{ fontSize: '1.05rem', opacity: 0.95, maxWidth: '580px', margin: '0 auto 1.85rem auto', lineHeight: 1.6 }}>
              Whether you need strategic IT consulting, full product engineering, or team augmentation, let’s talk.
            </p>
            <Link to="/contact" className="btn btn-secondary" style={{ padding: '0.85rem 2rem', fontSize: '0.98rem', color: '#0062FF' }}>
              <span>Reach Out Today</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
