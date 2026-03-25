import type { ChatMessage as ChatMessageType, WebsiteExplanation } from '../hooks/useChat';

type ChatMessageProps = {
  message: ChatMessageType;
};

function ExplanationCard({ explanation }: { explanation: WebsiteExplanation }) {
  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/95 p-4 text-sm text-slate-700 shadow-sm">
      <Section icon="🧠" title="What this website does" content={explanation.summary} />
      <Section icon="🎯" title="Who it's for" content={explanation.audience} />
      <Section
        icon="💡"
        title="Key features"
        content={explanation.features.length > 0 ? explanation.features.join(', ') : 'No clear features detected yet.'}
      />
      <Section icon="💰" title="Pricing" content={explanation.pricing} />
      <Section icon="🧒" title="Simple explanation" content={explanation.simpleExplanation} />
    </div>
  );
}

function Section({ icon, title, content }: { icon: string; title: string; content: string }) {
  return (
    <div>
      <div className="font-semibold text-slate-900">
        {icon} {title}
      </div>
      <p className="mt-1 leading-6 text-slate-600">{content}</p>
    </div>
  );
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === 'assistant';

  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
          isAssistant ? 'bg-slate-100 text-slate-700' : 'bg-brand-600 text-white'
        }`}
      >
        {message.explanation ? (
          <ExplanationCard explanation={message.explanation} />
        ) : (
          <p className="whitespace-pre-wrap leading-6">{message.content}</p>
        )}
      </div>
    </div>
  );
}
