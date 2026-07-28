import FadeIn from './FadeIn';

const EXPERIENCE = [
  {
    period: 'Summer 2026',
    location: 'Gurugram',
    title: 'AI & Data Engineering Summer Intern — Shorthills AI',
    description:
      'Building an agentic web scraper with Python, FastAPI, and Playwright, orchestrated by multi-agent LLM workflows (Google ADK, MCP), plus core data engineering work feeding downstream AI systems.',
  },
  {
    period: 'May 2026 – Aug 2026',
    location: 'Remote',
    title: 'Open Source Contributor — GirlScript Summer of Code (GSSoC 2026)',
    description:
      'Selected from 35,000+ applicants nationwide, contributing to real-world open-source repositories under the Open Source Track with mentors and a distributed developer community.',
  },
  {
    period: 'Dec 2025 – Feb 2026',
    location: 'New Delhi',
    title: 'Campus Ambassador — EDC IIT Delhi',
    description:
      'Ranked among the top-performing Campus Ambassadors for BECon ’26, driving social media growth and event footfall through targeted outreach and networking.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28" style={{ background: 'var(--bg)' }}>
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto relative">
        {/* Continuous Vertical Timeline Line */}
        <div
          className="absolute left-4 md:left-[35%] top-3 bottom-3 w-[2px] transition-colors duration-300"
          style={{ background: 'var(--border-soft)' }}
        />

        <div className="flex flex-col gap-12 sm:gap-16">
          {EXPERIENCE.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.15}>
              <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-12 pl-12 md:pl-0">
                
                {/* Left side: Date + Location (Desktop) */}
                <div className="md:w-[35%] md:text-right flex flex-col md:pr-8">
                  <span
                    className="font-mono text-sm sm:text-base uppercase tracking-widest font-semibold"
                    style={{ color: 'var(--text-strong)' }}
                  >
                    {item.period}
                  </span>
                  <span
                    className="text-xs sm:text-sm uppercase tracking-wider mt-1 opacity-60 font-light"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.location}
                  </span>
                </div>

                {/* Glowing Node Dot (Adapts to Light / Dark theme automatically) */}
                <div
                  className="absolute left-4 md:left-[35%] top-1 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--text-strong)',
                    boxShadow: '0 0 12px var(--text-strong)',
                  }}
                />

                {/* Right side: Content */}
                <div className="flex-1 flex flex-col gap-3">
                  <h3
                    className="font-medium uppercase text-lg sm:text-xl md:text-2xl leading-snug tracking-tight"
                    style={{ color: 'var(--text-strong)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl opacity-70 text-sm sm:text-base"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.description}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
