import FadeIn from './FadeIn';

const SKILLS = [
  {
    number: '01',
    name: 'Backend Engineering',
    description:
      'Building production-grade APIs and services in Python and Java, with FastAPI, Playwright, and clean data pipelines feeding downstream systems.',
  },
  {
    number: '02',
    name: 'Generative AI & LLMs',
    description:
      'Designing multi-agent LLM workflows, RAG pipelines with hybrid retrieval and reranking, and agentic tools using Google ADK and MCP.',
  },
  {
    number: '03',
    name: 'Systems Programming',
    description:
      'Strong foundations in C++ and C, applied to performance-minded logic and coursework alongside higher-level application development.',
  },
  {
    number: '04',
    name: 'Cloud & Data Engineering',
    description:
      'Working with Google Cloud Pub/Sub and SQL/MySQL to collect, clean, and structure data that powers reliable AI and analytics workflows.',
  },
  {
    number: '05',
    name: 'Frontend & Product',
    description:
      'Shipping clean, functional interfaces in JavaScript to wrap AI systems in experiences people can actually use, from HUDs to chat frontends.',
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: 'var(--panel-bg)', color: 'var(--panel-text)' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: 'var(--panel-text)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid var(--panel-border)' }}
            >
              <span
                className="font-black shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: 'var(--panel-text)' }}
              >
                {skill.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: 'var(--panel-text)' }}
                >
                  {skill.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', color: 'var(--panel-text)' }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
