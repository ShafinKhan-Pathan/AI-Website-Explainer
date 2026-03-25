import { useCallback, useMemo, useState } from 'react';
import { extractContent } from '../utils/extractContent';
import { explainWebsite } from '../utils/openai';

export type WebsiteExplanation = {
  summary: string;
  audience: string;
  features: string[];
  pricing: string;
  simpleExplanation: string;
  answer: string;
};

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  explanation?: WebsiteExplanation;
};

type UseChatOptions = {
  apiBaseUrl?: string;
  demoMode?: boolean;
  explainLikeIm10?: boolean;
};

const demoExplanation: WebsiteExplanation = {
  summary: 'This website helps people understand and use AI tools for work.',
  audience: 'Teams, founders, and curious people exploring practical AI products.',
  features: ['Product overviews', 'Use case examples', 'Simple onboarding', 'Frequently asked questions'],
  pricing: 'Pricing is not clearly visible on this page.',
  simpleExplanation: 'It is like a helper page that shows what the AI product does and why someone might want it.',
  answer: 'This page is explaining an AI product in a friendly way.'
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function useChat({ apiBaseUrl, demoMode = false, explainLikeIm10 = true }: UseChatOptions) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const conversationMessages = useMemo(
    () =>
      messages.map((message) => ({
        role: message.role,
        content: message.content
      })),
    [messages]
  );

  const analyzePage = useCallback(async () => {
    if (loading || hasAnalyzed) return;

    setLoading(true);
    setError(null);

    try {
      const extracted = extractContent();
      const explanation = demoMode
        ? demoExplanation
        : await explainWebsite({
            apiBaseUrl,
            websiteContent: extracted.websiteContent,
            metaDescription: extracted.metaDescription,
            explainLikeIm10
          });

      setMessages([
        {
          id: createId(),
          role: 'assistant',
          content: explanation.answer,
          explanation
        }
      ]);
      setHasAnalyzed(true);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Something went wrong while analyzing this website.'
      );
    } finally {
      setLoading(false);
    }
  }, [apiBaseUrl, demoMode, explainLikeIm10, hasAnalyzed, loading]);

  const askQuestion = useCallback(
    async (question: string) => {
      setLoading(true);
      setError(null);

      const userMessage: ChatMessage = {
        id: createId(),
        role: 'user',
        content: question
      };

      setMessages((current) => [...current, userMessage]);

      try {
        const extracted = extractContent();
        const answer = demoMode
          ? {
              ...demoExplanation,
              answer: `Demo answer: ${question} -> this site is mainly about helping visitors quickly understand the page.`
            }
          : await explainWebsite({
              apiBaseUrl,
              websiteContent: extracted.websiteContent,
              metaDescription: extracted.metaDescription,
              explainLikeIm10,
              messages: [...conversationMessages, { role: 'user', content: question }]
            });

        setMessages((current) => [
          ...current,
          {
            id: createId(),
            role: 'assistant',
            content: answer.answer
          }
        ]);
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Something went wrong while answering your question.'
        );
      } finally {
        setLoading(false);
      }
    },
    [apiBaseUrl, conversationMessages, demoMode, explainLikeIm10]
  );

  const resetConversation = useCallback(() => {
    setMessages([]);
    setHasAnalyzed(false);
    setError(null);
  }, []);

  return {
    messages,
    loading,
    error,
    hasAnalyzed,
    analyzePage,
    askQuestion,
    resetConversation
  };
}
