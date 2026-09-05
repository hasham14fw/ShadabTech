import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Smartphone, 
  GitMerge, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Sliders,
  Calculator,
  Terminal,
  Clock,
  Briefcase
} from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';
import SectionHeader from '../components/SectionHeader';

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);

  // Estimator interactive state
  const [projectType, setProjectType] = useState('fullstack');
  const [platformScale, setPlatformScale] = useState('growth');
  const [aiIntegration, setAiIntegration] = useState(true);

  const services = [
    {
      id: 'mern-dev',
      icon: Code2,
      title: 'Full-Stack MERN Engineering',
      tagline: 'High-concurrency web systems powered by React 18 & Node.js',
      description: 'We engineer fast, scalable web applications with sub-second page loads, modular component systems, and resilient database clustering.',
      tags: ['React 18', 'Node.js API', 'MongoDB Replica', 'Zustand/Redux'],
      metric: '< 10ms Latency'
    },
    {
      id: 'cloud-devops',
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      tagline: 'Automated multi-cloud deployments with zero downtime',
      description: 'We architect containerized ecosystems on AWS and Google Cloud with Kubernetes, infrastructure as code, and continuous self-healing monitoring.',
      tags: ['AWS & GCP', 'Docker & K8s', 'Terraform', 'CI/CD Automation'],
      metric: '99.99% Uptime'
    },
    {
      id: 'ai-ml',
      icon: Cpu,
      title: 'AI, LLMs & Intelligent Automation',
      tagline: 'Custom AI agents and cognitive workflows embedded into your product',
      description: 'Supercharge operations with private vector RAG pipelines, fine-tuned neural models, and autonomous task execution bots.',
      tags: ['Vector DBs', 'Custom AI Agents', 'RAG Pipelines', 'Predictive Analytics'],
      metric: '10x Speedup'
    },
    {
      id: 'cybersecurity',
      icon: ShieldCheck,
      title: 'Cybersecurity & Zero-Trust Defense',
      tagline: 'Bank-grade security protocols safeguarding enterprise data',
      description: 'Enforcing identity verification on every request with modern OAuth2, end-to-end AES-256 encryption, and automated vulnerability auditing.',
      tags: ['Zero-Trust', 'AES-256', 'OAuth2 / SAML', 'SOC2 Readiness'],
      metric: 'Bank-Grade'
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Cross-Platform Mobile Engineering',
      tagline: 'Native 60 FPS mobile apps built from a single codebase',
      description: 'High-performance iOS and Android applications with offline-first local synchronization, biometric security, and app store automation.',
      tags: ['React Native', 'Expo', 'Offline Sync', 'App Store CI/CD'],
      metric: '60 FPS Native'
    },
    {
      id: 'consulting',
      icon: GitMerge,
      title: 'Digital Transformation & Advisory',
      tagline: 'Strategic technical direction from senior software architects',
      description: 'We audit legacy systems, eliminate technical debt, optimize cloud spend, and design future-proof architecture roadmaps for leadership.',
      tags: ['Legacy Modernization', 'Cloud FinOps', 'CTO-as-a-Service', 'Architecture Audit'],
      metric: 'Advisory'
    }
  ];

  // Estimation calculation
  const getEstimate = () => {
    let weeks = 6;
    let stackName = 'React + Node.js + MongoDB';

    if (projectType === 'fullstack') {
      weeks = 8;
      stackName = 'Full MERN Stack + Express API';
    } else if (projectType === 'cloud') {
      weeks = 5;
      stackName = 'AWS / GCP + Docker + Kubernetes';
    } else if (projectType === 'ai') {
      weeks = 10;
      stackName = 'MERN + Python FastAPI + Vector LLM';
    } else if (projectType === 'mobile') {
      weeks = 8;
      stackName = 'React Native + Node.js Microservices';
    }

    if (platformScale === 'enterprise') {
      weeks += 4;
    } else if (platformScale === 'mvp') {
      weeks = Math.max(4, weeks - 2);
    }

    if (aiIntegration) {
      weeks += 2;
      stackName += ' + Cognitive AI Layer';
    }

    return { weeks, stackName };
  };

  const estimate = getEstimate();

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* ========================================================
          SERVICES HERO with Canvas Network Background & Refined Heading
          ======================================================== */}
      <section 
        style={{
          position: 'relative',
          padding: '5rem 0 4rem 0',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F6FE 100%)',
          overflow: 'hidden'
        }}
      >
        <NetworkBackground theme="light" nodeCount={65} opacity={0.85} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="tech-badge" style={{ marginBottom: '1.15rem' }}>
              <span className="pulse-dot"></span>
              Engineering Catalog
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
              Enterprise-Grade <span className="gradient-text">Software & Cloud</span> Solutions.
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.68, marginBottom: '2.25rem' }}>
              We design, construct, and manage resilient digital architectures. Select an offering below to inspect technical specifications, tech stacks, and deployment deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICES CATALOG (Clean, Simple & Modern Grid)
          ======================================================== */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <SectionHeader 
            badge="Full Spectrum Delivery"
            title="Explore Our Core Services"
            subtitle="Enterprise-grade software engineering, cloud infrastructure, and intelligent automation built to scale."
          />

          {/* Clean 3-Column Grid of Concise & Attractive Service Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem', 
              marginTop: '1.5rem' 
            }}
          >
            {services.map((srv, idx) => (
              <div 
                key={srv.id}
                className="feature-card"
                style={{
                  height: '100%'
                }}
              >
                <div>
                  {/* Card Header: Icon + Metric Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: '52px',
                        height: '52px',
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

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.45rem', lineHeight: 1.25 }}>
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.95rem' }}>
                    {srv.tagline}
                  </p>

                  {/* Concise Description */}
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.62, marginBottom: '1.35rem' }}>
                    {srv.description}
                  </p>

                  {/* Deliverable Tags Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
                    {srv.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="value-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.15rem' }}>
                  <Link 
                    to="/contact"
                    className="btn btn-secondary"
                    style={{ width: '100%', padding: '0.7rem', fontSize: '0.88rem' }}
                  >
                    <span>Consult on This Service</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          INTERACTIVE PROJECT SCOPE & ROADMAP ESTIMATOR
          ======================================================== */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <SectionHeader 
            badge="Interactive Calculator"
            title="Estimate Your Project Scope"
            subtitle="Configure your project parameters to preview estimated development timeline and recommended architecture."
          />

          <div 
            className="glass-card"
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              padding: 'clamp(1.25rem, 4vw, 2.5rem)',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0'
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.75rem'
              }}
            >
              {/* Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '0.55rem' }}>
                    1. Core Architecture Type
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem' }}>
                    {[
                      { id: 'fullstack', label: 'Full MERN Stack' },
                      { id: 'cloud', label: 'Cloud & DevOps' },
                      { id: 'ai', label: 'AI & Data Engine' },
                      { id: 'mobile', label: 'Mobile App' }
                    ].map(type => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setProjectType(type.id)}
                        style={{
                          padding: '0.7rem',
                          borderRadius: '0.5rem',
                          border: projectType === type.id ? '2px solid #0062FF' : '1px solid #CBD5E1',
                          background: projectType === type.id ? '#EFF6FF' : '#FFFFFF',
                          color: projectType === type.id ? '#0062FF' : '#334155',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          cursor: 'pointer'
                        }}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '0.55rem' }}>
                    2. Scale & Maturity Level
                  </label>
                  <div style={{ display: 'flex', gap: '0.55rem' }}>
                    {[
                      { id: 'mvp', label: 'MVP / Fast Launch' },
                      { id: 'growth', label: 'Growth Scale' },
                      { id: 'enterprise', label: 'Enterprise Critical' }
                    ].map(lvl => (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setPlatformScale(lvl.id)}
                        style={{
                          flex: 1,
                          padding: '0.7rem 0.4rem',
                          borderRadius: '0.5rem',
                          border: platformScale === lvl.id ? '2px solid #0062FF' : '1px solid #CBD5E1',
                          background: platformScale === lvl.id ? '#EFF6FF' : '#FFFFFF',
                          color: platformScale === lvl.id ? '#0062FF' : '#334155',
                          fontWeight: 600,
                          fontSize: '0.82rem',
                          cursor: 'pointer'
                        }}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '0.55rem' }}>
                    3. Add-on Intelligent Capabilities
                  </label>
                  <label 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.7rem', 
                      padding: '0.8rem', 
                      borderRadius: '0.5rem', 
                      border: '1px solid #E2E8F0', 
                      background: '#F8FAFC',
                      cursor: 'pointer'
                    }}
                  >
                    <input 
                      type="checkbox" 
                      checked={aiIntegration} 
                      onChange={(e) => setAiIntegration(e.target.checked)}
                      style={{ width: '17px', height: '17px', accentColor: '#0062FF' }}
                    />
                    <span style={{ fontSize: '0.86rem', color: '#1E293B', fontWeight: 600 }}>
                      Include Generative AI / Custom Agent Layer (+2 weeks)
                    </span>
                  </label>
                </div>
              </div>

              {/* Estimate Summary Box */}
              <div 
                style={{
                  background: 'linear-gradient(135deg, #0A122E 0%, #050B1B 100%)',
                  borderRadius: '1rem',
                  padding: '1.85rem',
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(0, 229, 255, 0.3)',
                  boxShadow: '0 15px 35px rgba(0, 98, 255, 0.2)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00E5FF', marginBottom: '1.15rem' }}>
                    <Calculator size={18} />
                    <span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
                      PROJECT_ESTIMATE_SUMMARY
                    </span>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '0.2rem' }}>
                      Estimated Sprint Duration
                    </div>
                    <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#38BDF8', fontFamily: 'var(--font-heading)' }}>
                      ~{estimate.weeks} Weeks
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                      Includes architecture, staging, QA, and production launch
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.15rem', marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '0.3rem' }}>
                      Recommended Architecture
                    </div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {estimate.stackName}
                    </div>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.8rem', fontSize: '0.92rem' }}
                >
                  <span>Lock in This Roadmap</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
