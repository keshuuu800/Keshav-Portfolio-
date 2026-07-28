import { Github, Linkedin, Instagram, Mail, Phone, ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import ResumeButton from './ResumeButton';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'keshavgupta1511@gmail.com',
    href: 'mailto:keshavgupta1511@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 70152 21418',
    href: 'tel:+917015221418',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'in/keshav-gupta-it',
    href: 'https://www.linkedin.com/in/keshav-gupta-it/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'keshuuu800',
    href: 'https://github.com/keshuuu800',
    icon: Github,
  },
  {
    label: 'Instagram',
    value: 'im.keshavgupta',
    href: 'https://www.instagram.com/im.keshavgupta/',
    icon: Instagram,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <FadeIn delay={0} y={40}>
          <span
            className="uppercase tracking-widest text-xs sm:text-sm opacity-50 block mb-4"
            style={{ color: 'var(--text)' }}
          >
            06 — Contact
          </span>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(2.75rem, 11vw, 130px)' }}
          >
            Let&apos;s Talk.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="font-light max-w-lg text-base sm:text-lg leading-relaxed opacity-70"
            style={{ color: 'var(--text)' }}
          >
            Open to internship opportunities, hackathons, collaborations, and startup projects.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center gap-4">
            <ContactButton href="mailto:keshavgupta1511@gmail.com" />
            <ResumeButton />
          </div>
        </FadeIn>

        <div className="flex flex-col" style={{ borderTop: '1px solid var(--border-soft)' }}>
          {CONTACT_LINKS.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.label} delay={0.1 + i * 0.05}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between gap-4 py-5 sm:py-6 group"
                  style={{ borderBottom: '1px solid var(--border-soft)' }}
                >
                  <span className="flex items-center gap-3 sm:gap-4">
                    <Icon size={18} style={{ color: 'var(--text)' }} className="opacity-60" />
                    <span
                      className="uppercase tracking-widest text-xs sm:text-sm opacity-50"
                      style={{ color: 'var(--text)' }}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-base" style={{ color: 'var(--text)' }}>
                      {item.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    style={{ color: 'var(--text)' }}
                    className="opacity-40 group-hover:opacity-90 transition-opacity"
                  />
                </a>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-xs uppercase tracking-widest opacity-30 text-center" style={{ color: 'var(--text)' }}>
            © 2026 Keshav Gupta · Building at the intersection of code and intelligence.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
