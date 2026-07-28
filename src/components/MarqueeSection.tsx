import { useEffect, useRef, useState } from 'react';

const ROW_1 = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
];

const ROW_2 = [
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
];

function Tile({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 rounded-2xl shrink-0"
      style={{
        width: 420,
        height: 270,
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-soft)',
      }}
    >
      <img src={icon} alt={name} loading="lazy" className="w-20 h-20 object-contain" />
      <span className="uppercase tracking-widest text-sm font-medium" style={{ color: 'var(--text)' }}>
        {name}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1 = [...ROW_1, ...ROW_1, ...ROW_1];
  const row2 = [...ROW_2, ...ROW_2, ...ROW_2];

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {row1.map((item, i) => (
            <Tile key={`r1-${i}`} name={item.name} icon={item.icon} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {row2.map((item, i) => (
            <Tile key={`r2-${i}`} name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
