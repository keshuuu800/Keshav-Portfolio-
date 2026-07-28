import { Download } from 'lucide-react';

export default function ResumeButton() {
  return (
    <a
      href="/Keshav_Gupta_Resume.pdf"
      download
      className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium uppercase tracking-widest whitespace-nowrap transition-opacity duration-200 hover:opacity-70"
      style={{ borderColor: 'var(--text)', color: 'var(--text)' }}
    >
      <Download size={14} strokeWidth={1.75} />
      Resume
    </a>
  );
}
