# AI Website Explainer Widget
🔗 Live Demo: https://ai-website-explainer.vercel.app/

Production-ready AI widget built with React, TypeScript, and Tailwind that can be embedded into any website or run as a standalone app.

## Features

- AI-powered website explanation using OpenAI
- Embeddable widget via a single script tag
- Reusable React component architecture
- Real-time chat with follow-up questions
- Secure API handling through backend proxy
- Clean and responsive UI design
- A normal Vite app for local development

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and fill in `OPENAI_API_KEY`.

3. Run the backend proxy:

```bash
npm run server
```

4. In a separate terminal, run the frontend:

```bash
npm run dev
```

The frontend uses `VITE_EXPLAINER_API_URL` locally. In production on Vercel, it can use the built-in `/api/explain` route automatically.

## Environment variables

```bash
VITE_EXPLAINER_API_URL=http://localhost:8787/api/explain
VITE_DEMO_MODE=false
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4.1-mini
PORT=8787
```

## Vercel deployment

1. Push this repo to GitHub.

2. Import the repo into Vercel.

3. Add these environment variables in Vercel:

```bash
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4.1-mini
```

4. Deploy.

Vercel will:
- build the Vite frontend
- serve the app statically
- run the OpenAI proxy from `api/explain.js`

The frontend will call `/api/explain` by default in production.

## Embed usage

During development, this repo includes a loader at `public/widget.js`:

```html
<script src="http://localhost:5173/widget.js"></script>
```

For production, build the project and serve the generated `dist/widget.js`:

```bash
npm run build
```

```html
<script src="https://your-cdn.example.com/widget.js"></script>
```

The script injects a root node into `document.body` and mounts the React widget automatically.

You can also pass runtime config from the host page:

```html
<script
  src="https://your-cdn.example.com/widget.js"
  data-api-base-url="https://your-api.example.com/api/explain"
  data-demo-mode="false"
></script>
```

Or set a global before loading the script:

```html
<script>
  window.AIWebsiteExplainerConfig = {
    apiBaseUrl: "https://your-api.example.com/api/explain",
    demoMode: false
  };
</script>
<script src="https://your-cdn.example.com/widget.js"></script>
```

When deployed on Vercel, the widget can use the same deployment's API route automatically, or you can still override it with `data-api-base-url`.

## Security

The browser never receives the OpenAI key directly. Frontend requests go to your backend proxy in `server.js` locally, or `api/explain.js` on Vercel, which calls OpenAI from the server.

## Project structure

```text
src/
  components/
    ChatWidget.tsx
    ChatMessage.tsx
    FloatingButton.tsx
  hooks/
    useChat.ts
  utils/
    extractContent.ts
    openai.ts
  App.tsx
  embed.tsx
  main.tsx
public/
  widget.js
```
