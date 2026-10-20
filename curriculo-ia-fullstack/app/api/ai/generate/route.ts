import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { profile, mode, tone } = await req.json();
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = mode === 'cover_letter'
      ? `Escreva uma Carta de Apresentação persuasiva em português (tom: ${tone || 'executivo'}) para ${profile.name}, candidato(a) à vaga de ${profile.targetRole || profile.role} na empresa ${profile.targetCompany || 'contratante'}. Destaque as experiências (${JSON.stringify(profile.experiences)}) e habilidades (${(profile.skills || []).join(', ')}).`
      : `Otimize o resumo profissional e as conquistas do currículo de ${profile.name} (${profile.role}) visando a vaga de ${profile.targetRole || profile.role}. Use verbos de ação no método STAR e palavras-chave para sistemas ATS (Gupy, Greenhouse, LinkedIn).`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({ result: text });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
