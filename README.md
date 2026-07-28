# Keshav Gupta — AI Engineer Portfolio

A dark-themed, motion-driven portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion — adapted from a "3D Creator" template into an AI Engineer / Generative AI Developer landing page, using the real content from https://keshavv-gupta-portfolio.netlify.app/.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## What changed in this pass

- **Fixed the broken/ghosted hero layout**: the screenshot you sent showed the old giant heading and nav bleeding through behind the new layout — I checked the source and there's only ever one `<HeroSection />` render, so that was Vite's dev server not fully hot-swapping after the earlier structural rewrite (it happens after big JSX changes). **Stop `npm run dev` completely (Ctrl+C) and restart it, then hard-refresh the browser (Cmd+Shift+R)** — that clears it. I also added `min-w-0` / `break-words` safety to the heading column and trimmed its font size a bit so it can't overflow into the photo column even on very wide screens.
- **Eye tracking rebuilt properly**: the pupils now use the image's real pixel coordinates and account for exactly how much of the photo gets cropped by `object-cover` at your current screen size (recalculated live via `ResizeObserver`), so the dots land on the eyes and actually move a noticeably larger distance toward your cursor.
- **Resume button**: added next to the theme toggle in the navbar and again in the Contact section — downloads `Keshav_Gupta_Resume.pdf` directly, same as the "Download Resume" link on your live site.
- **Contact section rebuilt**: "Let's Talk." heading, your real details (email, phone, LinkedIn, GitHub, Instagram) as clickable rows, plus Contact + Resume buttons — styled in our own dark/light theme system rather than copying the red reference site's colors directly.

## What was adapted from the original brief

- **Hero**: "Hi, i'm keshav" with the tagline swapped to an AI/LLM-focused line. The portrait image was replaced with an original SVG "network" graphic (wrapped in the same Magnet hover effect) since no source photo was provided — swap `HeroSection.tsx`'s `<svg>` block for a real `<img>` of yourself whenever you like.
- **Nav**: About / Skills / Projects / Experience / Contact, matching your live site's structure (5 links instead of the template's 4).
- **Marquee**: Scroll-driven rows now show your tech stack (Python, Java, C++, C, MySQL, Google Cloud, JavaScript) instead of 3D-render GIFs.
- **About**: Your real bio, corner decorations swapped for `lucide-react` icons (Brain, Cpu, Terminal, Database) instead of external 3D renders.
- **Skills** (was "Services"): Five numbered rows — Backend Engineering, GenAI & LLMs, Systems Programming, Cloud & Data Engineering, Frontend & Product — written from your listed stack.
- **Projects**: The sticky-stacking card effect now holds your four real projects (Agentic Web Scraper, DeepQuery, Nursing Handoff System, Friday). Screenshots weren't available, so each card uses a gradient icon panel instead — drop in real project screenshots at the marked `IconPanel` spots in `ProjectsSection.tsx` for the full effect.
- **Experience** (new section): Your internship, GSSoC, and Campus Ambassador roles as a simple timeline.
- **Contact** (new section): Email / GitHub / LinkedIn, matching your live site's closing CTA.

## Next steps you may want

- Replace the hero SVG graphic with an actual photo.
- Drop real screenshots into the four project cards.
- Wire the "Live Project" buttons to each project's actual repo/demo URL (currently pointing at your GitHub profile).
