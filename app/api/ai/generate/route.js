import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const { profile, mode, tone } = await req.json();
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = mode === 'cover_letter'
      ? `Escreva uma Carta de Apresentação persuasiva em português (tom: ${tone || 'executivo'}) para ${profile.name}, candidato(a) à vaga de ${profile.targetRole || profile.role} na empresa ${profile.targetCompany || 'contratante'}.`
      : `Otimize o resumo profissional e as conquistas do currículo de ${profile.name} (${profile.role}) visando a vaga de ${profile.targetRole || profile.role}.`;

    const result = await model.generateContent(prompt);
    return NextResponse.json({ result: result.response.text() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
