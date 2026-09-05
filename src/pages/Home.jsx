import React from 'react';
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
  Zap,
  Workflow,
  Rocket
} from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  // Concise, High-Value & Attractive Services (No tech-stack badging clutter)
  const services = [
    {
      id: 'fullstack',
      icon: Code2,
      title: 'Full-Stack Web Engineering',
      desc: 'High-performance web platforms engineered for sub-second page loads, intuitive UX, and seamless enterprise scale.',
      metric: '< 10ms Latency',
      link: '/services'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      desc: 'Resilient multi-cloud architectures with automated scaling, infrastructure as code, and zero-downtime deployment pipelines.',
      metric: '99.99% Uptime',
      link: '/services'
    },
    {
      id: 'ai',
      icon: Cpu,
      title: 'AI & Cognitive Automation',
      desc: 'Integrating custom intelligent models, autonomous task agents, and real-time predictive analytics into core workflows.',
      metric: '10x Speedup',
      link: '/services'
    },
    {
      id: 'security',
      icon: ShieldCheck,
      title: 'Cybersecurity & Zero-Trust',
      desc: 'Bank-grade defense architectures with end-to-end data encryption, continuous vulnerability auditing, and compliance readiness.',
      metric: 'Bank-Grade',
      link: '/services'
    }
  ];

  // 3 Core Pillars (Why Shadab Tech)
  const pillars = [
    {
      icon: Zap,
      title: 'Architectural Precision',
      desc: 'Clean, decoupled codebases engineered with zero technical debt, high cohesion, and infinite horizontal scalability.'
    },
    {
      icon: Activity,
      title: 'Cloud-Native Speed',
      desc: 'Automated CI/CD pipelines, container orchestration, and instant autoscaling for sub-second user latency.'
    },
    {
      icon: ShieldCheck,
      title: 'Security by Default',
      desc: 'Zero-Trust verification on every API request, end-to-end cryptographic encryption, and enterprise compliance.'
    }
  ];

  // 3-Step Delivery Framework
  const steps = [
    {
      step: '01',
      title: 'Discovery & System Design',
      desc: 'We analyze your core business objectives, identify bottlenecks, and engineer an immutable technical blueprint.'
    },
    {
      step: '02',
      title: 'Agile Sprints & Staging Previews',
      desc: 'Bi-weekly sprint deliveries with direct staging environment access, continuous integration, and automated testing.'
    },
    {
      step: '03',
      title: 'Production Release & 24/7 SLA',
      desc: 'Zero-downtime deployment, infrastructure telemetry monitoring, and dedicated senior engineering support.'
    }
  ];

  // Verified Endorsements
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
          1. HERO SECTION (High-Impact, Clean & Focused)
          ======================================================== */}
      <section 
        style={{
          position: 'relative',
          padding: '7.5rem 0 4rem 0',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F6F9FE 100%)',
          overflow: 'hidden'
        }}
      >
        <NetworkBackground theme="light" nodeCount={35} opacity={0.6} />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>

            {/* Eyebrow Badge */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="tech-badge" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
                <Sparkles size={14} color="var(--primary)" />
                Next-Gen Software & Cloud Engineering
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{
                fontSize: 'clamp(2.1rem, 4.2vw, 3.3rem)',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: '1.25rem',
                lineHeight: 1.18,
                letterSpacing: '-0.025em'
              }}
            >
              We Build Scalable Software That Powers <span className="gradient-text">High-Growth Companies</span>.
            </h1>

            {/* Subtitle */}
            <p 
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                color: '#475569',
                lineHeight: 1.68,
                marginBottom: '2.25rem',
                maxWidth: '660px',
                margin: '0 auto 2.25rem auto'
              }}
            >
              From high-throughput MERN applications to resilient multi-cloud architectures and AI automation, Shadab Technologies turns complex blueprints into production reality.
            </p>

            {/* Primary Action Buttons */}
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
                <span>Start a Project</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn btn-secondary" style={{ padding: '0.85rem 2rem', fontSize: '0.98rem' }}>
                <Layers size={17} />
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Clean Metrics Bar */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem'
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
          2. CORE SERVICES (Less Content, Highly Valuable, Attractive)
          ======================================================== */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <SectionHeader 
            badge="Core Capabilities"
            title="Engineered for Exponential Scale"
            subtitle="Explore our specialized engineering offerings designed for enterprise speed, security, and velocity."
          />

          {/* Attractive, Concise Service Cards Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {services.map((srv) => (
              <div 
                key={srv.id}
                className="feature-card"
                style={{ height: '100%' }}
              >
                <div>
                  {/* Top: Icon + Metric Pill */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'rgba(0, 98, 255, 0.08)',
                        color: 'var(--primary)',
                        border: '1px solid rgba(0, 98, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <srv.icon size={26} />
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
                      {srv.metric}
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
                    {srv.title}
                  </h3>

                  {/* High-Value, Punchy Description */}
                  <p 
                    style={{ 
                      fontSize: '0.92rem', 
                      color: '#475569', 
                      lineHeight: '1.62',
                      marginBottom: '1.25rem' 
                    }}
                  >
                    {srv.desc}
                  </p>

                </div>

                {/* Direct Action Link */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.15rem' }}>
                  <Link 
                    to={srv.link}
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
          3. WHY SHADAB TECH (3 Core Engineering Pillars)
          ======================================================== */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <SectionHeader 
            badge="The Shadab Advantage"
            title="Why Forward-Thinking Leaders Choose Us"
            subtitle="We blend architectural discipline with startup execution velocity to deliver durable software systems."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {pillars.map((p, idx) => (
              <div 
                key={idx}
                className="clean-card"
                style={{ padding: '2rem' }}
              >
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(0, 98, 255, 0.08)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <p.icon size={24} />
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.65rem' }}>
                  {p.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.62 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. HOW WE DELIVER (Simple 3-Step Framework)
          ======================================================== */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <SectionHeader 
            badge="Delivery Blueprint"
            title="How We Turn Visions Into Reality"
            subtitle="A streamlined, transparent engagement process with zero guesswork or agency bloat."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {steps.map((st, idx) => (
              <div key={idx} className="step-card">
                <div className="step-number">{st.step}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.65rem' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.62 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CLIENT TESTIMONIALS & TRUST
          ======================================================== */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <SectionHeader 
            badge="Client Endorsements"
            title="Trusted by Modern Engineering Teams"
            subtitle="Discover what engineering executives and founders say about collaborating with Shadab Technologies."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {testimonials.map((testi, i) => (
              <div 
                key={i}
                className="clean-card"
                style={{
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
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
          6. BOTTOM CALL TO ACTION BANNER
          ======================================================== */}
      <section style={{ padding: '0 0 5rem 0', background: '#F8FAFC' }}>
        <div className="container">
          <div 
            style={{
              background: 'linear-gradient(135deg, #0A1435 0%, #060B1E 100%)',
              borderRadius: '1.5rem',
              padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 98, 255, 0.2)'
            }}
          >
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
                Whether you need a full MERN application, multi-cloud DevOps setup, or custom AI agent integration, our engineers are ready.
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
