# TaskAI — AI Task Manager for Teams

A modern SaaS landing page built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion. Built as a portfolio project to showcase component architecture, scroll animations, and dark mode implementation.

## Tech Stack

- **Framework**: Next.js 16.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
src/
  app/
    page.tsx          # Root page — composes all sections
    layout.tsx        # Root layout with ThemeProvider
    globals.css       # Global styles + Tailwind config
  components/
    ui/
      FadeIn.tsx        # Reusable scroll animation wrapper (Framer Motion)
      ThemeProvider.tsx # next-themes provider wrapper
      ThemeToggle.tsx   # Sun/moon toggle button
    layout/
      Navbar.tsx        # Fixed top navigation with mobile menu
      Footer.tsx        # Site footer with links and socials
    sections/
      Hero.tsx          # Hero with dashboard mockup
      Features.tsx      # 6 feature cards
      HowItWorks.tsx    # 3-step process
      Pricing.tsx       # 3 pricing tiers
      Testimonials.tsx  # 3 quote cards + brand bar
      FAQ.tsx           # Accordion FAQ
      CTABanner.tsx     # Final conversion banner
```

## Sections

| Section | Description |
|---|---|
| Navbar | Fixed, frosted glass, mobile hamburger menu, theme toggle |
| Hero | Headline, CTAs, CSS dashboard mockup, stats |
| Features | 6 AI feature cards with icons |
| How it Works | 3-step process with connecting line |
| Pricing | Starter / Pro / Enterprise tiers |
| Testimonials | 3 quote cards + social proof brand bar |
| FAQ | Accordion with 7 questions |
| CTA Banner | Final conversion section |
| Footer | Links, socials, status indicator |

## Dark Mode

Dark mode is implemented using `next-themes` with Tailwind CSS v4's class-based variant.

### Configuration

```css
/* globals.css */
@custom-variant dark (&:where(.dark, .dark *));
```

`next-themes` adds the `.dark` class to `<html>` when dark mode is active, and Tailwind's `dark:` prefix applies styles accordingly.

### Color Tokens

| Role | Light | Dark |
|---|---|---|
| Page background | `bg-white` | `dark:bg-gray-900` |
| Section background (alt) | `bg-gray-50` | `dark:bg-gray-800` |
| Card background | `bg-white` | `dark:bg-gray-900` |
| Primary text | `text-gray-900` | `dark:text-white` |
| Secondary text | `text-gray-500` | `dark:text-gray-400` |
| Muted text | `text-gray-600` | `dark:text-gray-300` |
| Border | `border-gray-100` | `dark:border-gray-700` |
| Border (strong) | `border-gray-200` | `dark:border-gray-700` |
| Accent background | `bg-indigo-50` | `dark:bg-indigo-950` |
| Accent border | `border-indigo-200` | `dark:border-indigo-800` |

## Animations

All scroll animations use the reusable `FadeIn` wrapper component:

```tsx
<FadeIn delay={0.1} direction="up">
  <MyComponent />
</FadeIn>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `delay` | `number` | `0` | Seconds before animation starts |
| `direction` | `"up" \| "down" \| "left" \| "right"` | `"up"` | Slide-in direction |
| `className` | `string` | — | Passed to the wrapper div |

Animations trigger once when the element enters the viewport (`whileInView` + `once: true`).

## Lighthouse Scores

Audited on production (Vercel) with no throttling.

| Category | Score |
|---|---|
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Deployment

Deployed on Vercel with automatic deployments on every push to `main`. Feature branches get preview URLs automatically.
