import cors from "cors";
import express from "express";

const app = express(); // Creates an Express server instance and app will be used for backend server logic and API routes
const port = Number(process.env.PORT || 8787); // Sets the port for the server to listen on, defaulting to 8787 if not specified in environment variables
const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

app.use(cors()); // Allows frontend to communicate with backend
app.use(express.json({ limit: "1mb" })); // Parses incoming requests into JSON format with a size limit

app.post("/api/explain", async (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "Missing OPENAI_API_KEY on the server.",
    });
  }

  const { websiteContent, metaDescription, messages, explainLikeIm10 } =
    req.body ?? {};

  if (!websiteContent && !messages) {
    return res.status(400).json({
      error: "Missing website content or messages.",
    });
  }

  const baseInstruction =
    "You explain websites clearly and briefly. Always return valid JSON with keys: summary, audience, features, pricing, simpleExplanation, answer. Keep language concise and practical.";

  const initialPrompt = [
    "Explain this website in simple terms like a 10-year-old.",
    "Also include:",
    "- What this website does",
    "- Who it is for",
    "- Key features",
    "- Pricing (if available)",
    "Keep it short and simple.",
    explainLikeIm10 ? "Use extra simple language and friendly examples." : "",
    metaDescription ? `Meta description: ${metaDescription}` : "",
    websiteContent ? `Website content:\n${websiteContent}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const inputMessages =
    Array.isArray(messages) && messages.length > 0
      ? messages
      : [{ role: "user", content: initialPrompt }];

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },  
      body: JSON.stringify({
        model,
        input: [
          { role: "system", content: baseInstruction },
          ...inputMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        ],
        text: {
          format: {
            type: "json_schema",
            name: "website_explainer",
            strict: true,
            schema: {
              type: "object",
              properties: {
                summary: { type: "string" },
                audience: { type: "string" },
                features: { type: "array", items: { type: "string" } },
                pricing: { type: "string" },
                simpleExplanation: { type: "string" },
                answer: { type: "string" },
              },
              required: [
                "summary",
                "audience",
                "features",
                "pricing",
                "simpleExplanation",
                "answer",
              ],
              additionalProperties: false,
            },
          },
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: errorText || "OpenAI request failed.",
      });
    }

    const data = await response.json();
    const outputText =
      data.output?.[0]?.content?.find((item) => item.type === "output_text")
        ?.text ?? "{}";
    const parsed = JSON.parse(outputText);

    return res.json(parsed);
  } catch (error) {
    return res.status(500).json({
      error:
        error instanceof Error ? error.message : "Unexpected server error.",
    });
  }
});

app.listen(port, () => {
  console.log(`AI Website Explainer API listening on http://localhost:${port}`);
});
