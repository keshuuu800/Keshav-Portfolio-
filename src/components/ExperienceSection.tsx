import FadeIn from './FadeIn';

const EXPERIENCE = [
  {
    period: 'Summer 2026',
    title: 'AI & Data Engineering Summer Intern — Shorthills AI, Gurugram',
    description:
      'Building an agentic web scraper with Python, FastAPI, and Playwright, orchestrated by multi-agent LLM workflows (Google ADK, MCP), plus core data engineering work feeding downstream AI systems.',
  },
  {
    period: 'May 2026 – Aug 2026',
    title: 'Open Source Contributor — GirlScript Summer of Code (GSSoC 2026)',
    description:
      'Selected from 35,000+ applicants nationwide, contributing to real-world open-source repositories under the Open Source Track with mentors and a distributed developer community.',
  },
  {
    period: 'Dec 2025 – Feb 2026',
    title: 'Campus Ambassador — EDC IIT Delhi',
    description:
      'Ranked among the top-performing Campus Ambassadors for BECon \u201926, driving social media growth and event footfall through targeted outreach and networking.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28" style={{ background: 'var(--bg)' }}>
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col">
        {EXPERIENCE.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.1}>
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-10 py-8 sm:py-10"
              style={{ borderBottom: '1px solid var(--border-soft)' }}
            >
              <span className="uppercase tracking-widest text-sm shrink-0 sm:w-40 opacity-50" style={{ color: 'var(--text)' }}>
                {item.period}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium uppercase text-lg sm:text-xl" style={{ color: 'var(--text)' }}>
                  {item.title}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl opacity-60" style={{ color: 'var(--text)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
