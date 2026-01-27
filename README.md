## Live link

Url to preview: [https://novello-speklr.vercel.app/](https://novello-speklr.vercel.app/)

## Getting Started Locally

First, run the development server:

```bash
npm i && npm run dev
# or
bun i && bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Theming Architecture

I used mix of both **React Context + CSS Variables** approach and used localStorage with key `novello-theme` for storing data.
I used NexJs font tool for theme fonts with variables approach. This approach is efficient and clean.

### Theme files

| File                           | Purpose                                            |
|--------------------------------|----------------------------------------------------|
| `src/context/ThemeContext.tsx` | Theme state, persistence, and CSS variable updates |
| `src/app/globals.css`          | CSS custom properties                              |


## Trade-offs

1. I tried to reduce the use of AI. Not sure if it's good or bad in your view.
2. I made entire design initially using lucide-icon but later moved to design icons so it took a lot of time.
3. I didn't used [nextjs dynamic](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) because we'll need entire structure to show dynamic page which isn't required yet.
