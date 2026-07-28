import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ── Icons (inline SVG — no extra dependency) ─────────────────────────────────

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Internship — Shorthills AI',
    name: 'Agentic Web Scraper',
    description:
      'A generalized navigation-crawling-extraction agent pipeline using Python, FastAPI, Playwright, and BeautifulSoup, orchestrated by multi-agent LLM workflows (Google ADK, MCP) that crawl and extract structured data from any website based on a natural-language prompt — no site-specific scraping logic required. Results export to Excel via Pandas/OpenPyXL, with OpenRouter LLMs improving retrieval accuracy. It\'s the project that took my understanding of agent orchestration from theory to a genuinely production-shaped pipeline.',
    tags: ['Multi-Agent', 'LLM', 'Playwright', 'FastAPI', 'MCP'],
    githubUrl: 'https://github.com/SHAI-sarthak-makkar/WebScraping',
  },
  {
    number: '02',
    category: 'Personal Project',
    name: 'DeepQuery — RAG Chatbot',
    description:
      'An AI-powered chatbot that live-scrapes Wikipedia articles with typo-tolerant topic resolution and answers questions with context-aware, retrieval-augmented responses. Hybrid BM25 + MiniLM vector retrieval with cross-encoder reranking feeds top-ranked chunks to Groq Llama-3.3-70B / Gemma2 / Mixtral, with OpenRouter fallback on rate limits. Deployed on Hugging Face Spaces with a persistent-history chat frontend. A hands-on look at how far retrieval and reranking can push an LLM\'s answers toward genuinely precise.',
    tags: ['RAG', 'BM25 + Embeddings', 'Flask', 'Hugging Face'],
    githubUrl: 'https://github.com/keshuuu800/Deepquery',
    liveUrl: 'https://keshavgupta1511-deepqueryy-backend.hf.space',
  },
  {
    number: '03',
    category: '24hr Makeathon — TIET Patiala',
    name: 'Nursing Handoff System',
    description:
      'Built during a 24-hour Makeathon at TIET Patiala among 100+ teams, organized by Microsoft Learn Student Chapter. An AI-powered clinical handoff tool that applies LLMs to automate and standardize patient shift-handoff reports, reducing manual documentation errors and improving patient-safety continuity through an end-to-end pipeline covering data input, summarization, and structured report generation. A fast, high-pressure sprint that turned messy shift handoffs into a clear, structured workflow.',
    tags: ['LLMs', 'Healthcare AI', 'Hackathon'],
    githubUrl: 'https://github.com/shivanshsinghh-ops/backend-files',
  },
  {
    number: '04',
    category: 'Personal Project',
    name: 'Friday — AI Voice Assistant',
    description:
      'A voice-controlled AI assistant in Python powered by Ollama for fully local LLM inference, with real-time internet search and autonomous browser control. Features a JARVIS-style animated 3D HUD interface built with CustomTkinter for an immersive, futuristic user experience. A fun sandbox for pushing fully offline, local-only LLM inference as far as it can go.',
    tags: ['Ollama', 'Voice AI', 'Python', 'Automation'],
    githubUrl: 'https://github.com/keshuuu800/Friday-mini-project',
  },
];

// ── Tooltip ───────────────────────────────────────────────────────────────────

function Tooltip({ label }: { label: string }) {
  return (
    <span
      role="tooltip"
      style={{
        position: 'absolute',
        bottom: 'calc(100% + 8px)',
        left: '50%',
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '4px 10px',
        borderRadius: '6px',
        background: 'var(--text)',
        color: 'var(--bg)',
        pointerEvents: 'none',
        opacity: 1,
        zIndex: 10,
      }}
    >
      {label}
    </span>
  );
}

// ── Icon button with independent hover animation + tooltip ────────────────────

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation(); // Don't trigger card click
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      {hovered && <Tooltip label={label} />}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        animate={hovered ? { scale: 1.18, rotate: label === 'View Source' ? -8 : 12 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1.5px solid var(--border-soft)',
          color: 'var(--text)',
          background: hovered ? 'var(--border-soft)' : 'transparent',
          cursor: 'pointer',
          outline: 'none',
          transition: 'background 0.2s ease',
          flexShrink: 0,
        }}
      >
        {children}
      </motion.a>
    </div>
  );
}

// ── Project Card ──────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Primary destination: liveUrl if available, else githubUrl
  const primaryUrl = project.liveUrl ?? project.githubUrl;

  const handleCardClick = () => {
    window.open(primaryUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(primaryUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      ref={cardRef}
      className="sticky flex items-center"
      style={{ top: `${96 + index * 28}px`, minHeight: '52vh' }}
    >
      <motion.div
        role="article"
        tabIndex={0}
        aria-label={`${project.name} — ${project.category}. Press Enter to ${project.liveUrl ? 'open live demo' : 'view source on GitHub'}.`}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={{
          scale,
          background: 'var(--bg)',
          cursor: 'pointer',
          outline: 'none',
          // Border glow: intensifies on hover
          borderColor: hovered
            ? 'rgba(118,33,176,0.7)'
            : 'var(--text)',
          boxShadow: hovered
            ? '0 0 0 1px rgba(118,33,176,0.35), 0 20px 60px rgba(118,33,176,0.12), 0 8px 24px rgba(0,0,0,0.18)'
            : '0 4px 20px rgba(0,0,0,0.06)',
          transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
        }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 p-6 sm:p-8 md:p-10 flex flex-col gap-6 origin-top"
      >
        {/* ── Top row ── */}
        <div className="flex flex-wrap items-center justify-between gap-4">

          {/* Number + category + title */}
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <span
              className="font-black leading-none flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: 'var(--text)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span
                className="uppercase tracking-widest text-xs sm:text-sm opacity-60"
                style={{ color: 'var(--text)' }}
              >
                {project.category}
              </span>
              {/* Title lifts slightly on hover */}
              <motion.h3
                animate={hovered ? { y: -2 } : { y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="font-medium uppercase"
                style={{
                  fontSize: 'clamp(1.25rem, 3vw, 2.5rem)',
                  color: 'var(--text)',
                }}
              >
                {project.name}
              </motion.h3>
            </div>
          </div>

          {/* ── Icon buttons (stop propagation — don't trigger card click) ── */}
          <div
            className="flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton href={project.githubUrl} label="View Source">
              <GitHubIcon className="w-[18px] h-[18px]" />
            </IconButton>

            {project.liveUrl && (
              <IconButton href={project.liveUrl} label="Live Demo">
                <ExternalLinkIcon className="w-[17px] h-[17px]" />
              </IconButton>
            )}
          </div>
        </div>

        {/* ── Description ── */}
        <p
          className="font-light leading-relaxed opacity-70 max-w-3xl"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)', color: 'var(--text)' }}
        >
          {project.description}
        </p>

        {/* ── Tags ── */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs sm:text-sm uppercase tracking-wider rounded-full px-3 py-1 opacity-70"
              style={{ color: 'var(--text)', border: '1px solid var(--border-soft)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24"
      style={{ background: 'var(--bg)' }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      <div className="flex flex-col gap-7 max-w-5xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
