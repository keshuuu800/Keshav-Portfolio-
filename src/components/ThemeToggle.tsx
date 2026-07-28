import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      className="inline-flex items-center justify-center rounded-full border transition-colors duration-200 hover:opacity-70"
      style={{
        width: '2.2rem',
        height: '2.2rem',
        borderColor: 'var(--text)',
        color: 'var(--text)',
      }}
    >
      {theme === 'dark' ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
    </button>
  );
}
