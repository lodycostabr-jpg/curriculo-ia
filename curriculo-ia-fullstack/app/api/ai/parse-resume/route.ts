import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { rawText } = await req.json();
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: { responseMimeType: 'application/json' },
    });

    const prompt = `Extraia os dados profissionais do texto abaixo e retorne um JSON estruturado com os campos:
    name, role, email, phone, location, linkedin, targetRole, summary (reescrito no padrão executivo ATS),
    experiences (array com id, role, company, period, location, bullets otimizados no método STAR com métricas),
    education (array com id, degree, institution, period, details) e skills (array de strings).
    Texto bruto:
    ${rawText}`;

    const result = await model.generateContent(prompt);
    const parsed = JSON.parse(result.response.text());

    return NextResponse.json({ profile: parsed });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
