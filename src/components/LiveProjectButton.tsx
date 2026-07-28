interface LiveProjectButtonProps {
  href?: string;
  label?: string;
}

export default function LiveProjectButton({ href = '#', label = 'Live Project' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target={href !== '#' ? '_blank' : undefined}
      rel={href !== '#' ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center rounded-full border-2 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest whitespace-nowrap transition-opacity duration-200 hover:opacity-70"
      style={{ borderColor: 'var(--text)', color: 'var(--text)' }}
    >
      {label}
    </a>
  );
}
