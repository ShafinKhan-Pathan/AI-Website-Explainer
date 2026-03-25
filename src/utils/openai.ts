import type { WebsiteExplanation } from '../hooks/useChat';

type ConversationMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type ExplainWebsiteParams = {
  apiBaseUrl?: string;
  websiteContent: string;
  metaDescription?: string;
  explainLikeIm10?: boolean;
  messages?: ConversationMessage[];
};

export async function explainWebsite({
  apiBaseUrl,
  websiteContent,
  metaDescription,
  explainLikeIm10 = true,
  messages
}: ExplainWebsiteParams): Promise<WebsiteExplanation> {
  const resolvedApiBaseUrl = apiBaseUrl || '/api/explain';

  const response = await fetch(resolvedApiBaseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      websiteContent,
      metaDescription,
      explainLikeIm10,
      messages
    })
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(payload?.error || 'The AI explainer request failed.');
  }

  return {
    summary: payload.summary ?? 'No summary available.',
    audience: payload.audience ?? 'No audience information available.',
    features: Array.isArray(payload.features) ? payload.features : [],
    pricing: payload.pricing ?? 'Pricing was not found.',
    simpleExplanation: payload.simpleExplanation ?? 'No simple explanation available.',
    answer: payload.answer ?? payload.simpleExplanation ?? 'No answer available.'
  };
}
