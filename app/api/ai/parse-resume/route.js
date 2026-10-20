import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const { rawText } = await req.json();
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: { responseMimeType: 'application/json' },
    });

    const prompt = `Extraia os dados profissionais do texto abaixo em JSON: ${rawText}`;
    const result = await model.generateContent(prompt);
    return NextResponse.json({ profile: JSON.parse(result.response.text()) });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
