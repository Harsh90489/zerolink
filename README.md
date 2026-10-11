# Zerolink Landing Page

A premium, modern landing page for Zerolink - an AI platform designed to make Large Language Model (LLM) creation accessible to everyone.

## Features

- Premium dark mode design with electric violet and cyan accents
- Fully responsive layout
- Interactive animations using Framer Motion
- Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- SEO optimized with Open Graph and Twitter card metadata
- Accessible and semantic HTML

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm start
```

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

- `src/app` - Next.js app router pages and layouts
- `src/components` - Reusable React components
- `public` - Static assets (favicon, OG image, etc.)
- `styles` - Global CSS styles

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- Background: `#08090D`
- Foreground: `#F8FAFC`
- Surface: `#11131A`
- Accent Violet: `#8B5CF6`
- Accent Cyan: `#22D3EE`
- Muted: `#9CA3AF`

### Fonts

The template uses Geist font by default. To switch to Inter, update the `fontFamily` in `tailwind.config.js` and import Inter in `src/app/layout.tsx`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
