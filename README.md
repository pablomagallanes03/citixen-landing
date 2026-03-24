# Citixen Landing Page

Landing page for Citixen, a GovTech platform that allows citizens to decide the allocation of part of their taxes to social projects in their city.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

Push the code to a GitHub repository and connect it to Vercel for automatic deployment.

## Technologies Used

- **Next.js**: React framework for production.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React**: JavaScript library for building user interfaces.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Minimalist and Professional**: Clean, institutional aesthetic with social purpose.
- **SEO Optimized**: Basic meta tags and semantic HTML.
- **Accessible**: Good practices for screen readers and navigation.
- **Fast Loading**: Minimal dependencies and optimized code.
- **Smooth Animations**: Subtle transitions and hover effects.
- **Clear CTAs**: Visible and effective call-to-action buttons.
- **Waitlist Form**: Simple email signup (frontend only; integrate backend for production).

## Project Structure

```
citixen-landing/
├── components/
│   ├── Hero.js
│   ├── Problem.js
│   ├── Solution.js
│   ├── HowItWorks.js
│   ├── Impact.js
│   ├── Product.js
│   ├── CTA.js
│   ├── SocialProof.js
│   ├── Waitlist.js
│   └── Footer.js
├── pages/
│   ├── _app.js
│   └── index.js
├── styles/
│   └── globals.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.json
└── README.md
```

## Customization

- Colors: Defined in `tailwind.config.js` (primary: #2F80ED, accent: #F2994A).
- Fonts: Inter for body, Poppins for headings (loaded from Google Fonts).
- Content: Edit the components to update text, images, or links.

## Notes

- The waitlist form currently shows an alert. For production, connect to a backend service or email API.
- Mockups are placeholders; replace with actual images.
- No secrets or credentials included.

## License

This project is for Citixen. All rights reserved.