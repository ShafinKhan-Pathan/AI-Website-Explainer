import { ChatWidget } from './components/ChatWidget';

export default function App() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-6 sm:p-10 lg:flex-row lg:items-start lg:gap-8">
      <div className="w-full rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur sm:p-10 lg:flex-1">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Embeddable AI Widget
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Explain any website with one script tag.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            This demo shows the same widget you can embed into any site. It reads the page, sends a summarized context
            to your backend, and answers follow-up questions in a polished chat UI.
          </p>
        </div>

        <div className="mt-8 grid gap-4 text-sm text-slate-600 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="font-semibold text-slate-900">Auto analysis</div>
            <p className="mt-2">Opens and immediately starts explaining the page without extra clicks.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="font-semibold text-slate-900">Safe API design</div>
            <p className="mt-2">The browser talks to your backend proxy so the OpenAI key stays on the server.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="font-semibold text-slate-900">Universal embed</div>
            <p className="mt-2">Builds a standalone `widget.js` bundle and also includes a dev loader in `public/`.</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:max-w-[420px] lg:flex-none">
        <ChatWidget apiBaseUrl={import.meta.env.VITE_EXPLAINER_API_URL} demoMode={import.meta.env.VITE_DEMO_MODE === 'true'} />
      </div>
    </main>
  );
}
