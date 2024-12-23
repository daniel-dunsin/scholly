import { OpenAI } from 'openai';
const openAiKey = process.env.OPEN_AI_API_KEY;

if (!openAiKey) throw new Error('Provide gemini key');

export const getOpenAi = (): OpenAI => {
  const openai = new OpenAI({
    apiKey: openAiKey,
  });

  return openai;
};
