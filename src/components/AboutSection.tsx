import { Brain, Cpu, Terminal, Database } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

const ABOUT_TEXT =
  "I turn large language models and backend systems into products people actually rely on, from clinical tools to agentic web scrapers. I'm a 2nd year b.tech it student at mait, new delhi, currently an ai & data engineering summer intern at shorthills ai. Hackathons are where i do my best thinking. Let's build something incredible together!";

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] opacity-20" style={{ color: 'var(--text)' }}>
        <Brain className="w-[90px] sm:w-[120px] md:w-[150px] h-[90px] sm:h-[120px] md:h-[150px]" strokeWidth={0.8} />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] opacity-20" style={{ color: 'var(--text)' }}>
        <Terminal className="w-[80px] sm:w-[110px] md:w-[140px] h-[80px] sm:h-[110px] md:h-[140px]" strokeWidth={0.8} />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] opacity-20" style={{ color: 'var(--text)' }}>
        <Cpu className="w-[90px] sm:w-[120px] md:w-[150px] h-[90px] sm:h-[120px] md:h-[150px]" strokeWidth={0.8} />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] opacity-20" style={{ color: 'var(--text)' }}>
        <Database className="w-[100px] sm:w-[130px] md:w-[160px] h-[100px] sm:h-[130px] md:h-[160px]" strokeWidth={0.8} />
      </FadeIn>

      <div className="flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: 'var(--text)' }}
          />
        </div>

        <FadeIn delay={0.1}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
