import {
  GenerationConfig,
  GenerativeModel,
  GoogleGenerativeAI,
} from '@google/generative-ai';

const geminiKey = process.env.GEMINI_AI_API_KEY;

if (!geminiKey) throw new Error('Provide gemini key');

export const getGemini = (
  generationConfig?: GenerationConfig
): GenerativeModel => {
  const genAI = new GoogleGenerativeAI(geminiKey);
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig,
  });

  return model;
};
