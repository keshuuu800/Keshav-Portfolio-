import { useEffect, useRef, useState } from 'react';

interface Line {
  type: 'input' | 'output';
  text: string;
}

const RESPONSES: Record<string, string[]> = {
  help: ['Available commands: about, skills, projects, contact, whoami, clear'],
  about: [
    "2nd year B.Tech IT student at MAIT, New Delhi.",
    'Currently an AI & Data Engineering Summer Intern at Shorthills AI.',
  ],
  skills: ['Python · Java · C++ · C · SQL/MySQL · Google Cloud · JavaScript · LLMs / GenAI'],
  projects: [
    'Agentic Web Scraper, DeepQuery RAG Chatbot,',
    'Nursing Handoff System, Friday AI Voice Assistant.',
    'Scroll down to see them all.',
  ],
  contact: ['keshavgupta1511@gmail.com', 'github.com/keshuuu800'],
  whoami: ['keshav — ai engineer, builder, hackathon regular.'],
  'sudo make coffee': ['Nice try. Permission denied: humans only. \u2615'],
};

const INITIAL_LINES: Line[] = [
  { type: 'output', text: 'Welcome. Type a command to get started.' },
  { type: 'output', text: "Try: help" },
];

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>(INITIAL_LINES);
  const [value, setValue] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    const output = RESPONSES[cmd] ?? [`command not found: ${cmd} — type "help" for options`];
    setLines((prev) => [
      ...prev,
      { type: 'input', text: raw },
      ...output.map((text) => ({ type: 'output' as const, text })),
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(value);
    setValue('');
  };

  return (
    <div
      className="rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col"
      style={{ border: '1px solid var(--border-soft)', background: 'var(--bg-elevated)' }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: '1px solid var(--border-soft)' }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
        <span
          className="ml-2 text-xs uppercase tracking-widest opacity-50"
          style={{ color: 'var(--text)' }}
        >
          keshav@portfolio
        </span>
      </div>

      <div className="px-4 sm:px-5 py-4 font-mono text-xs sm:text-sm flex flex-col gap-1.5 h-[180px] sm:h-[210px] overflow-y-auto">
        {lines.map((line, i) => (
          <div
            key={i}
            style={{ color: 'var(--text)' }}
            className={line.type === 'input' ? 'opacity-90' : 'opacity-60'}
          >
            {line.type === 'input' ? <span className="opacity-50">{'> '}</span> : null}
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 sm:px-5 pb-4">
        <span className="font-mono text-xs sm:text-sm opacity-50" style={{ color: 'var(--text)' }}>
          {'>'}
        </span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="type a command..."
          autoComplete="off"
          spellCheck={false}
          className="flex-1 bg-transparent outline-none font-mono text-xs sm:text-sm placeholder:opacity-40"
          style={{ color: 'var(--text)' }}
        />
      </form>
    </div>
  );
}
