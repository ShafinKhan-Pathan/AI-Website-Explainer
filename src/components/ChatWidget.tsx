import { FormEvent, useEffect, useRef, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { FloatingButton } from './FloatingButton';
import { useChat } from '../hooks/useChat';

type ChatWidgetProps = {
  apiBaseUrl?: string;
  demoMode?: boolean;
  embedded?: boolean;
};

function LoadingSkeleton() {
  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
      {[0, 1, 2].map((row) => (
        <div key={row} className="relative h-4 overflow-hidden rounded bg-slate-200">
          <div className="absolute inset-y-0 left-[-40%] w-[40%] bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
        </div>
      ))}
    </div>
  );
}

export function ChatWidget({ apiBaseUrl, demoMode = false, embedded = false }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(!embedded);
  const [input, setInput] = useState('');
  const [eli10, setEli10] = useState(true);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const { messages, loading, error, hasAnalyzed, analyzePage, askQuestion, resetConversation } = useChat({
    apiBaseUrl,
    demoMode,
    explainLikeIm10: eli10
  });

  useEffect(() => {
    if (isOpen && !hasAnalyzed) {
      void analyzePage();
    }
  }, [analyzePage, hasAnalyzed, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const container = messagesContainerRef.current;
    if (!container) return;

    const frame = window.requestAnimationFrame(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [messages, loading, error, isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setInput('');
    await askQuestion(question);
  };

  const toggleOpen = () => {
    const next = !isOpen;
    setIsOpen(next);

    if (!next) {
      setInput('');
    }
  };

  const bodyClassName = embedded
    ? 'flex h-[70vh] max-h-[620px] min-h-[520px] flex-col bg-gradient-to-b from-slate-50 to-white'
    : 'flex flex-col bg-gradient-to-b from-slate-50 to-white';

  const messagesClassName = embedded
    ? 'chat-scrollbar flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-5'
    : 'chat-scrollbar max-h-[420px] space-y-3 overflow-y-auto px-4 py-4 sm:px-5';

  return (
    <>
      {embedded && <FloatingButton isOpen={isOpen} onClick={toggleOpen} />}

      {isOpen && (
        <section
          className={`animate-slide-up overflow-hidden rounded-[28px] border border-white/60 bg-white/90 shadow-soft backdrop-blur-xl ${
            embedded
              ? 'fixed bottom-24 right-5 z-[999999] w-[calc(100vw-1.5rem)] max-w-[420px] sm:bottom-24 sm:right-6'
              : 'relative w-full'
          }`}
        >
          <div className="bg-slate-900 px-5 py-4 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300">AI Website Explainer</p>
                <h2 className="mt-1 text-lg font-semibold">Understand this page in seconds</h2>
              </div>
              <button
                type="button"
                onClick={embedded ? toggleOpen : resetConversation}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white transition hover:bg-white/20"
              >
                {embedded ? 'Close' : 'Reset'}
              </button>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setEli10((value) => !value)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  eli10 ? 'bg-brand-500 text-white' : 'bg-white/10 text-slate-200'
                }`}
              >
                Explain Like I&apos;m 10
              </button>
              {demoMode && (
                <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-medium text-amber-200">
                  Demo mode
                </span>
              )}
            </div>
          </div>

          <div className={bodyClassName}>
            <div ref={messagesContainerRef} className={messagesClassName}>
              {!hasAnalyzed && (
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600">
                  Analyzing this website...
                </div>
              )}

              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {loading && <LoadingSkeleton />}

              {error && (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {error}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white px-4 py-4 sm:px-5">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask a follow-up question..."
                  className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
