const MAX_CONTENT_LENGTH = 12000;

export function extractContent() {
  const metaDescription =
    document.querySelector<HTMLMetaElement>("meta[name='description']")?.content?.trim() ?? '';

  const rawBody = document.body?.innerText?.replace(/\s+/g, ' ').trim() ?? '';
  const websiteContent = rawBody.slice(0, MAX_CONTENT_LENGTH);

  return {
    metaDescription,
    websiteContent
  };
}
