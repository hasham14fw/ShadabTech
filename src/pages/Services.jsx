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
      tagline: 'High-concurrency, responsive web systems powered by React & Node.js',
      description: 'We build end-to-end web applications leveraging the power of MongoDB, Express.js, React, and Node.js. Designed with component reusability, server-side caching, and intuitive reactive user interfaces that scale to millions of concurrent users.',
      features: [
        'Custom Single Page & Multi-Page React Applications',
        'High-Throughput Node.js / Express REST & GraphQL APIs',
        'Optimized MongoDB Schema Design & Indexing',
        'State Management with Redux Toolkit or Zustand',
        'Micro-Frontend & Component Library Architecture',
        'Sub-second Page Load Speeds and Core Web Vitals Optimization'
      ],
      tech: ['React 18', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Vite', 'Redux'],
      deliverables: 'Production-ready web application, full test suite, automated Docker configs, and architecture documentation.'
    },
    {
      id: 'cloud-devops',
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      tagline: 'Resilient multi-cloud deployments with automated CI/CD pipelines',
      description: 'Transition from slow, manual deployments to fully automated, immutable infrastructure. We architect containerized ecosystems on AWS and Google Cloud with Kubernetes, ensuring your platform never goes down under sudden traffic spikes.',
      features: [
        'Container Orchestration with Docker & Kubernetes (EKS/GKE)',
        'Zero-Downtime CI/CD Pipelines (GitHub Actions, GitLab CI)',
        'Infrastructure as Code using Terraform & Pulumi',
        'Automated Serverless Functions (AWS Lambda, Cloud Run)',
        'Distributed Caching with Redis & Edge CDN Optimization',
        'Real-time Observability & Telemetry (Prometheus, Grafana, Datadog)'
      ],
      tech: ['AWS', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions'],
      deliverables: 'Fully automated deployment pipeline, self-healing cluster configuration, and monitoring dashboards.'
    },
    {
      id: 'ai-ml',
      icon: Cpu,
      title: 'AI, LLMs & Machine Learning',
      tagline: 'Infusing intelligent cognitive capabilities directly into your workflow',
      description: 'Supercharge your digital products with artificial intelligence. From retrieval-augmented generation (RAG) knowledge systems to custom fine-tuned neural models and predictive analytics engines.',
      features: [
        'Custom LLM Integration with Vector Databases (Pinecone, Chroma)',
        'Autonomous Agent Workflows & Task Execution Bots',
        'Predictive Maintenance & Customer Churn Modeling',
        'Computer Vision & Automated Document Parsing',
        'Natural Language Semantic Search Engines',
        'Secure On-Premises & Private Cloud AI Hosting'
      ],
      tech: ['Python', 'PyTorch', 'OpenAI APIs', 'Hugging Face', 'LangChain', 'FastAPI'],
      deliverables: 'Trained or integrated AI pipeline, fine-tuning scripts, evaluation metrics, and API endpoints.'
    },
    {
      id: 'cybersecurity',
      icon: ShieldCheck,
      title: 'Cybersecurity & Zero-Trust Defense',
      tagline: 'Impenetrable defense perimeters protecting your data and intellectual property',
      description: 'Safeguard your applications against sophisticated cyber attacks. We implement bank-grade encryption, role-based access control, security audits, and continuous vulnerability scans.',
      features: [
        'Zero-Trust Network Access & Modern Identity Architecture (OAuth2, OIDC)',
        'End-to-End Cryptographic Protocols (AES-256, TLS 1.3)',
        'Full-Spectrum Penetration Testing & Vulnerability Assessment',
        'Automated Secret Management (Vault, AWS Secrets Manager)',
        'OWASP Top 10 Mitigation & Security Code Reviews',
        'SOC2 & GDPR Compliance Engineering Readiness'
      ],
      tech: ['Zero-Trust', 'Vault', 'OWASP ZAP', 'OAuth2/SAML', 'TLS 1.3', 'SonarQube'],
      deliverables: 'Comprehensive security audit report, remediation patches, and verified compliance certificate.'
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Cross-Platform Mobile Engineering',
      tagline: 'Native-feel iOS and Android mobile apps from a unified codebase',
      description: 'Reach your customers across all devices. We develop high-performance cross-platform mobile apps with seamless 60 FPS transitions, offline-first synchronization, and hardware device integrations.',
      features: [
        'Cross-Platform iOS & Android Apps via React Native',
        'Progressive Web Applications (PWA) with Offline Capabilities',
        'Biometric Authentication & Native Hardware Sensors',
        'Push Notifications & Background Job Queues',
        'In-App Purchases & Payment Gateway Integrations (Stripe, Apple Pay)',
        'App Store and Google Play Automated Release Pipelines'
      ],
      tech: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Native APIs', 'Fastlane'],
      deliverables: 'Store-published mobile apps, source code repository, and OTA update pipeline.'
    },
    {
      id: 'consulting',
      icon: GitMerge,
      title: 'Digital Transformation & Advisory',
      tagline: 'Strategic roadmap planning from veteran software architects',
      description: 'Evaluate your existing tech stack, identify bottlenecks, and plan a high-impact digital transformation roadmap. We assist leadership in making confident, future-proof architectural decisions.',
      features: [
        'Legacy Modernization & Monolith-to-Microservices Roadmap',
        'Database Optimization & Distributed Scaling Analysis',
        'Engineering Team Best Practices & Agile Sprints Setup',
        'Cost Optimization for Cloud Infrastructure (FinOps)',
        'Technical Due Diligence for Investors & M&A',
        'CTO-as-a-Service Advisory for Rapid Growth Startups'
      ],
      tech: ['FinOps', 'Agile', 'Enterprise Architecture', 'Tech Due Diligence'],
      deliverables: 'Executive technical report, architectural blueprint, and step-by-step migration roadmap.'
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
          SERVICES CATALOG (Alternating 2-Part Layout)
          ======================================================== */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <SectionHeader 
            badge="Full Spectrum Delivery"
            title="Explore Our Core Services"
            subtitle="Enterprise-grade software engineering, cloud infrastructure, and intelligent automation built to scale."
          />

          {/* Alternating 2-Part Services List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginTop: '1rem' }}>
            {services.map((srv, idx) => {
              const isEven = idx % 2 === 0;

              // Part 1: Content (Detailed description, key deliverables, tech tags, CTA)
              const contentPart = (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="tech-badge" style={{ fontSize: '0.78rem' }}>
                      Capability 0{idx + 1}
                    </span>
                  </div>

                  <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.72, margin: 0 }}>
                    {srv.description}
                  </p>

                  {/* Features / Deliverables Checklist */}
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>
                      Key Architectural Specifications
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0, margin: 0 }}>
                      {srv.features.slice(0, 4).map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: '#334155' }}>
                          <div style={{ marginTop: '0.15rem', color: '#0062FF', flexShrink: 0 }}>
                            <CheckCircle2 size={16} />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );

              // Part 2: Service Card (Icon, Name, 2 Lines Description)
              const serviceCardPart = (
                <div 
                  className="glass-card"
                  style={{
                    padding: 'clamp(1.75rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2.25rem)',
                    borderRadius: '1.5rem',
                    background: 'linear-gradient(145deg, #FFFFFF 0%, #F0F6FE 100%)',
                    border: '1.5px solid rgba(0, 98, 255, 0.2)',
                    boxShadow: '0 12px 35px rgba(0, 98, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  {/* Icon */}
                  <div 
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: 'rgba(0, 98, 255, 0.09)',
                      color: 'var(--primary)',
                      border: '1px solid rgba(0, 98, 255, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      boxShadow: '0 6px 18px rgba(0, 98, 255, 0.12)'
                    }}
                  >
                    <srv.icon size={28} />
                  </div>

                  {/* Name */}
                  <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.25, marginBottom: '0.65rem' }}>
                    {srv.title}
                  </h3>

                  {/* 2 lines description */}
                  <p 
                    style={{ 
                      fontSize: '0.94rem', 
                      color: '#475569', 
                      lineHeight: 1.6, 
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {srv.tagline}
                  </p>
                </div>
              );

              return (
                <div 
                  key={srv.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 'clamp(1.5rem, 4vw, 3.5rem)',
                    alignItems: 'center',
                    paddingBottom: idx === services.length - 1 ? 0 : '3rem',
                    borderBottom: idx === services.length - 1 ? 'none' : '1px solid #E2E8F0'
                  }}
                >
                  {isEven ? (
                    <>
                      {contentPart}
                      {serviceCardPart}
                    </>
                  ) : (
                    <>
                      {serviceCardPart}
                      {contentPart}
                    </>
                  )}
                </div>
              );
            })}
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
