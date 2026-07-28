import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import AvatarPortrait from './AvatarPortrait';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center pt-24 md:pt-28" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Two-column grid: text left, avatar right */}
      <div className="hero-grid relative flex-1 px-6 md:px-10 py-10 md:py-12 items-center">
        {/* Left column */}
        <div
          className="flex flex-col items-center text-center md:items-start md:text-left gap-6 min-w-0"
          style={{ isolation: 'isolate' }}
        >
          <FadeIn delay={0.15} y={40}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-[0.95] break-words"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
            >
              Hi, i&apos;m
              <br />
              keshav Gupta
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} y={20}>
            <div className="flex flex-col items-center md:items-start gap-4 max-w-xs">
              <span
                className="h-[3px] w-14 rounded-full"
                style={{ background: 'linear-gradient(90deg, #7621B0, #B600A8)' }}
              />
              <p
                className="font-light uppercase tracking-wide leading-snug text-sm sm:text-base"
                style={{ color: 'var(--text)' }}
              >
                an ai engineer driven by turning llms and backend systems into products people rely on
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <ContactButton />
            </div>
          </FadeIn>
        </div>

        {/* Right column: avatar */}
        <div
          className="relative w-full flex justify-center md:justify-end"
          style={{ isolation: 'isolate' }}
        >
          <AvatarPortrait />
        </div>
      </div>
    </section>
  );
}
