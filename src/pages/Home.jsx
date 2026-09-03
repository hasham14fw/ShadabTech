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
  // Dynamic animated typewriter headline
  const phrases = [
    "Digital Intelligence & Cloud Systems.",
    "Enterprise MERN Applications.",
    "Cognitive AI & Autonomous Agents.",
    "Zero-Trust Cloud Architectures.",
    "High-Throughput Microservices."
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullPhrase = phrases[phraseIndex];
    let timeoutSpeed = isDeleting ? 38 : 75;

    if (!isDeleting && currentText === fullPhrase) {
      timeoutSpeed = 2200; // Pause at completed text
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      timeoutSpeed = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== fullPhrase) {
        setCurrentText(fullPhrase.slice(0, currentText.length + 1));
      } else if (isDeleting && currentText !== '') {
        setCurrentText(fullPhrase.slice(0, currentText.length - 1));
      } else if (!isDeleting && currentText === fullPhrase) {
        setIsDeleting(true);
      }
    }, timeoutSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  // Touch-friendly flip state for mobile responsiveness
  const [flippedCards, setFlippedCards] = useState({});
  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const capabilities = [
    {
      id: 'mern',
      icon: Code2,
      title: 'Full-Stack MERN Solutions',
      summary: 'High-throughput, reactive applications built on MongoDB, Express.js, React, and Node.js with pixel-perfect responsiveness.',
      badge: 'Core Specialty',
      metric: 'Sub-10ms Latency',
      status: 'High Concurrency',
      specs: 'End-to-end full stack architecture integrating React 18 reactive interfaces with distributed Node.js/Express microservices and scalable MongoDB clusters. Optimized for sub-second Core Web Vitals and infinite horizontal elasticity.',
      highlights: [
        'Modular React 18 frontend with micro-animations',
        'High-concurrency Express REST & GraphQL gateway',
        'Optimized MongoDB schema indexing & replica sets',
        'State synchronization via Zustand / Redux Toolkit'
      ],
      metricsList: [
        { label: 'Throughput', val: '50k+ req/s' },
        { label: 'Latency', val: '< 12ms' },
        { label: 'Core Vitals', val: '99/100' }
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
      status: 'Multi-Region Distributed',
      specs: 'Immutable cloud architectures built on AWS and Google Cloud. We implement containerized environments via Docker & Kubernetes, Infrastructure as Code with Terraform, and zero-downtime deployment pipelines.',
      highlights: [
        'Kubernetes clustering with automated horizontal pod autoscaling',
        'Zero-downtime blue/green & canary deployments',
        'Infrastructure as Code (Terraform) across multi-cloud',
        '24/7 telemetry monitoring (Prometheus, Grafana, Datadog)'
      ],
      metricsList: [
        { label: 'Uptime SLA', val: '99.99%' },
        { label: 'Deploy Time', val: '< 4 mins' },
        { label: 'Failover', val: 'Auto < 2s' }
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
      status: 'Autonomous Neural Loops',
      specs: 'Supercharge your digital platforms with state-of-the-art artificial intelligence. We integrate retrieval-augmented generation (RAG) vector pipelines, fine-tuned neural models, and autonomous task execution bots into your operations.',
      highlights: [
        'Custom LLM integrations with Vector DBs (Pinecone, Chroma)',
        'Autonomous task planning and multi-agent execution',
        'Predictive analytics, forecasting, and anomaly detection',
        'Private and secure on-premise AI model deployments'
      ],
      metricsList: [
        { label: 'Inference', val: '140 t/s' },
        { label: 'Accuracy', val: '98.6%' },
        { label: 'Cost Reduction', val: '-45%' }
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
      status: 'Continuous Threat Defense',
      specs: 'Military-grade defense architectures that protect critical customer data and proprietary intellectual property. Enforcing identity verification on every request, automated vulnerability auditing, and ISO compliance.',
      highlights: [
        'Zero-Trust Network Access (ZTNA) with modern OAuth2/SAML',
        'End-to-end cryptographic encryption (AES-256, TLS 1.3)',
        'Continuous automated penetration testing and code analysis',
        'SOC2 Type II and GDPR engineering readiness'
      ],
      metricsList: [
        { label: 'Security Score', val: 'A+ Rating' },
        { label: 'Encryption', val: 'AES-256' },
        { label: 'Audit SLA', val: 'Immediate' }
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
      quote: "The speed of execution and attention to detail from the Shadab Tech engineering squad was world-class. The interactive network visualization and AI integration blew our board away.",
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
          HERO SECTION (Clean, Modern, No redundant top pills)
          ======================================================== */}
      <section 
        style={{
          position: 'relative',
          padding: '8rem 0 5rem 0',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F6FE 55%, #E5EFFB 100%)',
          overflow: 'hidden'
        }}
      >
        {/* Dynamic HTML5 Canvas Interconnected Network Background */}
        <NetworkBackground theme="light" nodeCount={70} opacity={0.88} />

        {/* Floating Animated Geometric Rings in Background */}
        <div 
          className="animate-spin-slow"
          style={{
            position: 'absolute',
            top: '8%',
            right: '5%',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            border: '1.5px dashed rgba(0, 98, 255, 0.18)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        <div 
          className="animate-spin-reverse"
          style={{
            position: 'absolute',
            top: '12%',
            right: '8%',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            border: '1px solid rgba(0, 229, 255, 0.25)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Ambient Glow Gradients */}
        <div 
          className="glow-orb" 
          style={{ 
            top: '15%', 
            left: '10%', 
            width: '420px', 
            height: '420px', 
            background: 'rgba(0, 98, 255, 0.12)' 
          }} 
        />
        <div 
          className="glow-orb" 
          style={{ 
            bottom: '10%', 
            right: '12%', 
            width: '480px', 
            height: '480px', 
            background: 'rgba(0, 229, 255, 0.14)' 
          }} 
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>

            {/* Main Headline - Animated Typewriter */}
            <h1 
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.1rem)',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: '1.25rem',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                minHeight: '2.5em'
              }}
            >
              Architecting High-Performance{' '}
              <span className="gradient-text">
                {currentText}
              </span>
              <span className="typewriter-cursor">|</span>
            </h1>

            {/* Subtitle */}
            <p 
              style={{
                fontSize: 'clamp(0.98rem, 1.6vw, 1.15rem)',
                color: '#475569',
                lineHeight: 1.68,
                marginBottom: '2.25rem',
                maxWidth: '680px',
                margin: '0 auto 2.25rem auto'
              }}
            >
              Shadab Technologies engineers responsive MERN web applications, scalable cloud ecosystems, and AI-driven workflows built for enterprise speed and security.
            </p>

            {/* Modern Call to Actions */}
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
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Interactive Floating Metric Badges Bar with Micro Animations (Responsive 2x2 on Mobile) */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '0.75rem',
                marginTop: '1rem'
              }}
            >
              {[
                { icon: Server, label: 'Cloud Uptime SLA', value: '99.99%', sub: 'Zero downtime' },
                { icon: CheckCircle2, label: 'Projects Shipped', value: '150+', sub: 'Worldwide clients' },
                { icon: Activity, label: 'Speed Optimization', value: '3.5x', sub: 'Faster load time' },
                { icon: Star, label: 'Client Satisfaction', value: '4.95', sub: '5-Star average' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className={`glass-card ${idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
                  style={{
                    padding: '1rem 0.75rem',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.88)',
                    border: '1.5px solid rgba(0, 98, 255, 0.16)',
                    cursor: 'default'
                  }}
                >
                  <div 
                    style={{ 
                      fontSize: 'clamp(1.35rem, 4vw, 1.75rem)', 
                      fontWeight: 800, 
                      color: 'var(--primary)', 
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1.15
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E293B', marginTop: '0.2rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          ENTERPRISE CAPABILITIES: 3D FLIP ON HOVER & TAP CARDS
          Cards flip on hover (desktop) or tap (mobile)
          ======================================================== */}
      <section className="section-py" style={{ background: '#FFFFFF', position: 'relative' }}>
        <div className="container">
          <SectionHeader 
            badge="Enterprise Capabilities"
            title="Engineered for Exponential Scale"
            subtitle="Hover or tap any service card below to inspect its architecture specifications and key deliverables."
          />

          {/* 3D Flip on Hover & Tap Cards Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'clamp(1.25rem, 3vw, 2rem)'
            }}
          >
            {capabilities.map((cap) => (
              <div 
                key={cap.id}
                className="flip-card-perspective"
                onClick={() => toggleCardFlip(cap.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className={`flip-card-inner ${flippedCards[cap.id] ? 'is-flipped' : ''}`}>
                  {/* =========================================
                      FRONT FACE OF FLIP CARD
                      ========================================= */}
                  <div 
                    className="flip-card-face flip-card-front"
                    style={{
                      padding: 'clamp(1.25rem, 4vw, 2rem)'
                    }}
                  >
                    <div>
                      {/* Header with Icon */}
                      <div style={{ marginBottom: '1.15rem' }}>
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
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0, 98, 255, 0.12)'
                          }}
                        >
                          <cap.icon size={24} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 
                        style={{ 
                          fontSize: '1.24rem', 
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
                          fontSize: '0.9rem', 
                          color: '#475569', 
                          lineHeight: '1.6',
                          marginBottom: '1.15rem' 
                        }}
                      >
                        {cap.summary}
                      </p>

                      {/* Key Metric Pill */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.15rem' }}>
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
                        <span style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
                          {cap.status}
                        </span>
                      </div>
                    </div>

                    {/* Explore Button inside the Front of Card */}
                    <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem', marginTop: 'auto' }}>
                      <Link 
                        to={cap.link}
                        className="btn btn-secondary"
                        onClick={(e) => e.stopPropagation()}
                        style={{ width: '100%', padding: '0.65rem', fontSize: '0.86rem' }}
                      >
                        <span>Explore Service</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* =========================================
                      BACK FACE OF FLIP CARD (No explore button on other side)
                      ========================================= */}
                  <div 
                    className="flip-card-face flip-card-back"
                    style={{
                      padding: 'clamp(1.25rem, 4vw, 2rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      {/* Header */}
                      <div style={{ marginBottom: '0.85rem' }}>
                        <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.72rem' }}>
                          Architectural Specs
                        </span>
                      </div>

                      {/* Title */}
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.65rem' }}>
                        {cap.title}
                      </h4>

                      {/* Highlights List */}
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0, marginBottom: '1.15rem' }}>
                        {cap.highlights.slice(0, 4).map((h, hIdx) => (
                          <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#E2E8F0' }}>
                            <div style={{ marginTop: '0.15rem', color: '#00E5FF', flexShrink: 0 }}>
                              <CheckCircle2 size={14} />
                            </div>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Live Benchmark Row */}
                      <div 
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: '0.35rem',
                          background: 'rgba(255, 255, 255, 0.06)',
                          borderRadius: '0.75rem',
                          padding: '0.65rem 0.4rem',
                          textAlign: 'center',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {cap.metricsList.map((m, mIdx) => (
                          <div key={mIdx}>
                            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#00E5FF' }}>
                              {m.val}
                            </div>
                            <div style={{ fontSize: '0.68rem', color: '#94A3B8' }}>
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
