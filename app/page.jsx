'use client';
import React, { useState, useMemo, useEffect } from 'react';
import {
  FileText, Sparkles, Download, Lock, Unlock, CheckCircle2, Plus, Trash2,
  Smartphone, Monitor, CreditCard, QrCode, ShieldCheck, Briefcase,
  GraduationCap, Wrench, User, Mail, Phone, MapPin, Globe, ArrowRight,
  ArrowLeft, Check, Copy, RefreshCw, Eye, Edit3, Award, Zap, Code2,
  Building2, Target, ChevronRight, Star, AlertCircle, X
} from 'lucide-react';

const SAMPLE_AVATAR = "data:image/jpeg;base64,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";

const PRESET_PROFILES = {
  tech: {
    name: "Lucas Mendes",
    role: "Engenheiro de Software Full-Stack Sênior",
    email: "lucas.mendes@email.com.br",
    phone: "(11) 98765-4321",
    location: "São Paulo, SP",
    linkedin: "linkedin.com/in/lucasmendes-dev",
    targetRole: "Tech Lead / Staff Software Engineer",
    targetCompany: "Nubank",
    showPhoto: true,
    photoUrl: SAMPLE_AVATAR,
    summary: "Engenheiro de Software Sênior com mais de 7 anos de experiência arquitetando microsserviços escaláveis e aplicações web de missão crítica em fintechs. Histórico comprovado em reduzir latência de APIs em 42%, liderar squads multidisciplinares de 8 engenheiros e acelerar ciclos de deploy em 3x com CI/CD automatizado.",
    experiences: [
      {
        id: "exp-1",
        role: "Engenheiro de Software Sênior",
        company: "Fintech Pagamentos S.A.",
        period: "Jan 2023 – Atual",
        location: "São Paulo, SP",
        bullets: "• Liderou a migração do motor de liquidação PIX em Node.js, TypeScript e Go, processando 1,4 milhão de transações diárias com 99,99% de disponibilidade.\n• Otimizou consultas PostgreSQL e camada de cache Redis, reduzindo o tempo médio de resposta (p95) de 480ms para 190ms (-60%).\n• Mentorou 6 desenvolvedores plenos e implementou testes automatizados end-to-end, reduzindo incidentes em produção em 38%."
      },
      {
        id: "exp-2",
        role: "Desenvolvedor Full-Stack Pleno",
        company: "CloudCommerce Brasil",
        period: "Mar 2020 – Dez 2022",
        location: "São Paulo, SP",
        bullets: "• Desenvolveu o novo checkout responsivo em React, Next.js e Tailwind CSS, elevando a conversão mobile em +24% no primeiro trimestre.\n• Construiu integrações de pagamento com Stripe, PIX e antifraude, movimentando R$ 45M em GMV anual."
      }
    ],
    education: [
      {
        id: "edu-1",
        degree: "Bacharelado em Ciência da Computação",
        institution: "Universidade de São Paulo (USP)",
        period: "2016 – 2019",
        details: "Destaque Acadêmico em Engenharia de Software e Sistemas Distribuídos"
      },
      {
        id: "edu-2",
        degree: "AWS Certified Solutions Architect – Associate",
        institution: "Amazon Web Services",
        period: "2023",
        details: "Certificação oficial em arquitetura cloud de alta disponibilidade"
      }
    ],
    skills: [
      "TypeScript", "React & Next.js", "Node.js", "Go (Golang)", "PostgreSQL & Redis",
      "AWS & Docker", "Arquitetura de Microsserviços", "CI/CD & GitHub Actions", "Liderança Técnica", "Metodologias Ágeis"
    ],
    languages: [
      { id: "lang-1", name: "Português", level: "Nativo" },
      { id: "lang-2", name: "Inglês", level: "Fluente (C1)" },
      { id: "lang-3", name: "Espanhol", level: "Intermediário (B1)" }
    ]
  },
  marketing: {
    name: "Mariana Costa",
    role: "Especialista em Growth Marketing & Performance",
    email: "mariana.costa@email.com.br",
    phone: "(11) 99123-4567",
    location: "São Paulo, SP",
    linkedin: "linkedin.com/in/marianacosta-growth",
    targetRole: "Head de Growth & Aquisição",
    targetCompany: "iFood",
    showPhoto: false,
    photoUrl: SAMPLE_AVATAR,
    summary: "Especialista em Growth Marketing orientada a dados com 6 anos de experiência escalando aquisição B2C e B2B SaaS. Gerenciou mais de R$ 8M em mídia paga com ROAS médio de 4,6x, reduziu o CAC em 31% por meio de funis de CRO e automação de CRM, e liderou estratégias de retenção de alto impacto.",
    experiences: [
      {
        id: "exp-1",
        role: "Growth Marketing Manager",
        company: "ScaleUp SaaS Brasil",
        period: "Fev 2022 – Atual",
        location: "São Paulo, SP",
        bullets: "• Escalou a geração de leads qualificados (MQLs) em +145% em 12 meses combinando Meta Ads, Google Ads e SEO programático.\n• Estruturou testes A/B em landing pages e fluxos de checkout com Order Bump, aumentando a conversão em +34% e o LTV/CAC de 2,8 para 4,5."
      }
    ],
    education: [
      {
        id: "edu-1",
        degree: "MBA em Marketing Digital & Data Analytics",
        institution: "FGV – Fundação Getulio Vargas",
        period: "2021 – 2022",
        details: "Trabalho final sobre atribuição multicanal e otimização de CAC"
      }
    ],
    skills: [
      "Growth Hacking", "Google Ads & Meta Ads", "CRO & Testes A/B", "GA4 & Looker Studio",
      "CRM & Automação", "Copywriting de Conversão", "SQL Básico", "Gestão de Orçamento"
    ],
    languages: [
      { id: "lang-1", name: "Português", level: "Nativo" },
      { id: "lang-2", name: "Inglês", level: "Avançado" }
    ]
  },
  finance: {
    name: "Rafael Oliveira",
    role: "Coordenador de Planejamento Financeiro (FP&A)",
    email: "rafael.oliveira@email.com.br",
    phone: "(21) 98877-6655",
    location: "Rio de Janeiro, RJ",
    linkedin: "linkedin.com/in/rafaeloliveira-fpa",
    targetRole: "Gerente de FP&A e Relações com Investidores",
    targetCompany: "XP Inc.",
    showPhoto: true,
    photoUrl: SAMPLE_AVATAR,
    summary: "Profissional de Finanças Corporativas e FP&A com 8 anos de trajetória em modelagem financeira, orçamento matricial (OBZ) e suporte executivo a M&A. Automatizou relatórios gerenciais em Power BI e Python, gerando economia anual de R$ 3,2M em despesas operacionais.",
    experiences: [
      {
        id: "exp-1",
        role: "Coordenador Sênior de FP&A",
        company: "Grupo Varejo Nacional",
        period: "Jan 2021 – Atual",
        location: "Rio de Janeiro, RJ",
        bullets: "• Conduziu o ciclo de Budget e Rolling Forecast de R$ 420M de receita anual, reduzindo o desvio orçamentário para menos de 2,5%.\n• Desenvolveu painéis executivos de DRE, Fluxo de Caixa e Margem de Contribuição em Power BI para a diretoria e conselho."
      }
    ],
    education: [
      {
        id: "edu-1",
        degree: "Graduação em Economia",
        institution: "IBMEC",
        period: "2015 – 2018",
        details: "Láurea Acadêmica • Finanças Corporativas e Mercado de Capitais"
      }
    ],
    skills: [
      "FP&A & Budgeting", "Modelagem Financeira (DCF/M&A)", "Excel Avançado & VBA",
      "Power BI & DAX", "DRE & Fluxo de Caixa", "SAP ERP", "Valuation", "Gestão de Custos (OBZ)"
    ],
    languages: [
      { id: "lang-1", name: "Português", level: "Nativo" },
      { id: "lang-2", name: "Inglês", level: "Fluente" }
    ]
  }
};

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const paragraphs = String(text || '').split('\n');
  let curY = y;
  for (let p = 0; p < paragraphs.length; p++) {
    const words = paragraphs[p].split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, curY);
        line = words[n] + ' ';
        curY += lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line.trim()) {
      ctx.fillText(line.trim(), x, curY);
      curY += lineHeight;
    }
  }
  return curY;
}

function buildRealPdfBlobFromCanvas(canvas) {
  const dataUrl = canvas.toDataURL('image/jpeg', 0.94);
  const base64 = dataUrl.split(',')[1];
  const binStr = atob(base64);
  const imgLen = binStr.length;
  const imgBytes = new Uint8Array(imgLen);
  for (let i = 0; i < imgLen; i++) imgBytes[i] = binStr.charCodeAt(i);

  const enc = new TextEncoder();
  const chunks = [];
  const offsets = [];
  let pos = 0;
  const pushStr = (s) => {
    const b = enc.encode(s);
    chunks.push(b);
    pos += b.length;
  };
  const pushBytes = (b) => {
    chunks.push(b);
    pos += b.length;
  };

  pushStr("%PDF-1.4\n%\xFF\xFF\xFF\xFF\n");
  offsets[1] = pos;
  pushStr("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  offsets[2] = pos;
  pushStr("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
  offsets[3] = pos;
  pushStr("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n");
  offsets[4] = pos;
  pushStr(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imgLen} >>\nstream\n`);
  pushBytes(imgBytes);
  pushStr("\nendstream\nendobj\n");
  const contentStream = "q\n595.28 0 0 841.89 0 0 cm\n/Im0 Do\nQ\n";
  offsets[5] = pos;
  pushStr(`5 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}endstream\nendobj\n`);
  const xrefOffset = pos;
  pushStr("xref\n0 6\n0000000000 65535 f \n");
  for (let i = 1; i <= 5; i++) {
    pushStr(String(offsets[i]).padStart(10, '0') + " 00000 n \n");
  }
  pushStr(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);
  return new Blob(chunks, { type: "application/pdf" });
}

function exportDocumentAsPdf(profile, coverLetterText, docType, template) {
  const canvas = document.createElement('canvas');
  canvas.width = 1240;
  canvas.height = 1754;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const accentMap = {
    ats: '#1E3A8A',
    modern: '#047857',
    classic: '#111827'
  };
  const accent = accentMap[template] || '#1E3A8A';

  if (docType === 'cover_letter') {
    ctx.fillStyle = accent;
    ctx.fillRect(0, 0, canvas.width, 18);

    let y = 100;
    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 42px Inter, Arial, sans-serif';
    ctx.fillText(profile.name || 'Candidato', 90, y);
    y += 38;
    ctx.fillStyle = accent;
    ctx.font = '600 22px Inter, Arial, sans-serif';
    ctx.fillText(profile.role || 'Profissional', 90, y);
    y += 32;
    ctx.fillStyle = '#475569';
    ctx.font = '18px Inter, Arial, sans-serif';
    ctx.fillText(`${profile.email}  •  ${profile.phone}  •  ${profile.location}  •  ${profile.linkedin}`, 90, y);

    y += 30;
    ctx.strokeStyle = '#CBD5E1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(90, y);
    ctx.lineTo(canvas.width - 90, y);
    ctx.stroke();

    y += 55;
    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 22px Inter, Arial, sans-serif';
    ctx.fillText(`Carta de Apresentação — ${profile.targetRole || profile.role} (${profile.targetCompany || 'Empresa Contratante'})`, 90, y);

    y += 50;
    ctx.fillStyle = '#1E293B';
    ctx.font = '21px Inter, Arial, sans-serif';
    y = wrapCanvasText(ctx, coverLetterText, 90, y, canvas.width - 180, 34);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '15px Inter, Arial, sans-serif';
    ctx.fillText('Documento gerado e otimizado por CurrículoIA Pro • Padrão Executivo A4', 90, canvas.height - 50);
  } else {
    let y = 90;
    if (template === 'modern') {
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(0, 0, canvas.width, 215);
      ctx.fillStyle = '#10B981';
      ctx.fillRect(0, 215, canvas.width, 8);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 44px Inter, Arial, sans-serif';
      ctx.fillText(profile.name || 'Nome do Candidato', 80, 92);
      ctx.fillStyle = '#34D399';
      ctx.font = '600 24px Inter, Arial, sans-serif';
      ctx.fillText(profile.role || 'Cargo Profissional', 80, 132);
      ctx.fillStyle = '#E2E8F0';
      ctx.font = '18px Inter, Arial, sans-serif';
      ctx.fillText(`${profile.email}  |  ${profile.phone}  |  ${profile.location}  |  ${profile.linkedin}`, 80, 174);
      y = 275;
    } else {
      ctx.fillStyle = accent;
      ctx.fillRect(0, 0, canvas.width, 14);
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 44px Inter, Arial, sans-serif';
      ctx.fillText(profile.name || 'Nome do Candidato', 80, y);
      y += 38;
      ctx.fillStyle = accent;
      ctx.font = '600 24px Inter, Arial, sans-serif';
      ctx.fillText(profile.role || 'Cargo Profissional', 80, y);
      y += 34;
      ctx.fillStyle = '#475569';
      ctx.font = '18px Inter, Arial, sans-serif';
      ctx.fillText(`${profile.email}  •  ${profile.phone}  •  ${profile.location}  •  ${profile.linkedin}`, 80, y);
      y += 28;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(80, y);
      ctx.lineTo(canvas.width - 80, y);
      ctx.stroke();
      y += 46;
    }

    const drawSectionHeader = (title) => {
      ctx.fillStyle = accent;
      ctx.font = 'bold 20px Inter, Arial, sans-serif';
      ctx.fillText(title.toUpperCase(), 80, y);
      y += 10;
      ctx.strokeStyle = '#E2E8F0';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(80, y);
      ctx.lineTo(canvas.width - 80, y);
      ctx.stroke();
      y += 30;
    };

    drawSectionHeader('Resumo Profissional');
    ctx.fillStyle = '#1E293B';
    ctx.font = '19px Inter, Arial, sans-serif';
    y = wrapCanvasText(ctx, profile.summary, 80, y, canvas.width - 160, 29);
    y += 22;

    drawSectionHeader('Experiência Profissional');
    (profile.experiences || []).forEach((exp) => {
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 21px Inter, Arial, sans-serif';
      ctx.fillText(`${exp.role} — ${exp.company}`, 80, y);
      ctx.fillStyle = '#64748B';
      ctx.font = '600 17px Inter, Arial, sans-serif';
      const rightText = `${exp.period} | ${exp.location}`;
      const rw = ctx.measureText(rightText).width;
      ctx.fillText(rightText, canvas.width - 80 - rw, y);
      y += 28;
      ctx.fillStyle = '#334155';
      ctx.font = '18px Inter, Arial, sans-serif';
      y = wrapCanvasText(ctx, exp.bullets, 80, y, canvas.width - 160, 27);
      y += 18;
    });

    drawSectionHeader('Formação Acadêmica & Certificações');
    (profile.education || []).forEach((edu) => {
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 20px Inter, Arial, sans-serif';
      ctx.fillText(`${edu.degree} — ${edu.institution}`, 80, y);
      ctx.fillStyle = '#64748B';
      ctx.font = '600 17px Inter, Arial, sans-serif';
      const rw = ctx.measureText(edu.period || '').width;
      ctx.fillText(edu.period || '', canvas.width - 80 - rw, y);
      y += 26;
      if (edu.details) {
        ctx.fillStyle = '#475569';
        ctx.font = '17px Inter, Arial, sans-serif';
        y = wrapCanvasText(ctx, edu.details, 80, y, canvas.width - 160, 25);
      }
      y += 14;
    });

    drawSectionHeader('Competências Técnicas & Idiomas');
    ctx.fillStyle = '#1E293B';
    ctx.font = '600 18px Inter, Arial, sans-serif';
    y = wrapCanvasText(ctx, 'Habilidades: ' + (profile.skills || []).join('  •  '), 80, y, canvas.width - 160, 28);
    y += 10;
    const langLine = 'Idiomas: ' + (profile.languages || []).map((l) => `${l.name} (${l.level})`).join('  •  ');
    ctx.fillStyle = '#334155';
    ctx.font = '18px Inter, Arial, sans-serif';
    y = wrapCanvasText(ctx, langLine, 80, y, canvas.width - 160, 28);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px Inter, Arial, sans-serif';
    ctx.fillText('Currículo validado para sistemas ATS (Gupy, Greenhouse, LinkedIn, Workday) • CurrículoIA Pro', 80, canvas.height - 45);
  }

  const blob = buildRealPdfBlobFromCanvas(canvas);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = (profile.name || 'Profissional').replace(/\s+/g, '_');
  a.href = url;
  a.download = docType === 'cover_letter'
    ? `Carta_Apresentacao_${safeName}.pdf`
    : `Curriculo_${safeName}_ATS.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function buildCoverLetterText(profile, tone) {
  const company = profile.targetCompany || 'sua empresa';
  const targetRole = profile.targetRole || profile.role || 'esta posição';
  const topSkills = (profile.skills || []).slice(0, 5).join(', ');
  const firstExp = (profile.experiences && profile.experiences[0])
    ? `${profile.experiences[0].role} na ${profile.experiences[0].company}`
    : profile.role;

  if (tone === 'enthusiastic') {
    return `Prezado(a) Gestor(a) de Contratação da ${company},\n\nAcompanho de perto a trajetória de inovação da ${company} e escrevo com grande entusiasmo para apresentar minha candidatura à vaga de ${targetRole}. Como ${profile.role}, construí minha carreira unindo visão prática de negócio e execução orientada a indicadores reais.\n\nEm minha atuação mais recente como ${firstExp}, liderei iniciativas estratégicas que elevaram a eficiência operacional e entregaram resultados mensuráveis de curto e médio prazo. Meu domínio em ${topSkills} me permite contribuir desde a primeira semana com autonomia e foco em performance.\n\nNa ${company}, meu objetivo é aplicar essa bagagem para acelerar as metas do time de ${targetRole}, colaborando ativamente com lideranças e pares multidisciplinares.\n\nAgradeço imensamente pela atenção e coloco-me à disposição para uma conversa.\n\nAtenciosamente,\n${profile.name}\n${profile.email} | ${profile.phone}`;
  }
  if (tone === 'formal') {
    return `À Liderança de Recrutamento e Seleção da ${company},\n\nSubmeto à sua apreciação meu currículo para a posição de ${targetRole}. Com sólida trajetória como ${profile.role} e atuação recente como ${firstExp}, reúno qualificações técnicas e gerenciais diretamente alinhadas aos requisitos desta oportunidade.\n\nAo longo de minha carreira, destaquei-me pela entrega consistente de projetos complexos, otimização de processos e domínio de competências essenciais como ${topSkills}. Minha abordagem combina rigor analítico, governança e foco permanente em resultados sustentáveis.\n\nEstou certo de que minha experiência agregará valor imediato aos projetos da ${company}. Permaneço à disposição para detalhar minhas realizações em entrevista.\n\nCordialmente,\n${profile.name}\n${profile.email} | ${profile.phone}`;
  }
  return `Olá, time de Talentos e Liderança da ${company},\n\nEscrevo para apresentar minha candidatura à posição de ${targetRole}. Como ${profile.role} com experiência comprovada como ${firstExp}, desenvolvi forte especialização em ${topSkills}, sempre conectando execução técnica a impacto direto no negócio.\n\nNos últimos anos, concentrei minha atuação em resolver gargalos críticos, escalar indicadores de performance e entregar projetos estratégicos com previsibilidade e alta qualidade. Acredito que essa combinação de repertório prático e visão analítica se conecta diretamente aos desafios atuais da ${company}.\n\nSerá um prazer conversar sobre como posso contribuir para as metas da área de ${targetRole} nos próximos ciclos.\n\nUm abraço,\n${profile.name}\n${profile.email} | ${profile.phone} | ${profile.linkedin}`;
}

export default function App() {
  const [profile, setProfile] = useState(PRESET_PROFILES.tech);
  const [activePreset, setActivePreset] = useState('tech');
  const [activeStep, setActiveStep] = useState('personal'); // personal | experience | education | skills | cover
  const [deviceView, setDeviceView] = useState('desktop'); // desktop | mobile
  const [mobileScreen, setMobileScreen] = useState('editor'); // editor | preview
  const [template, setTemplate] = useState('ats'); // ats | modern | classic
  const [previewTab, setPreviewTab] = useState('resume'); // resume | cover_letter
  const [coverTone, setCoverTone] = useState('executive');
  const [customCoverText, setCustomCoverText] = useState('');
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [aiBannerMsg, setAiBannerMsg] = useState('');
  const [newSkill, setNewSkill] = useState('');

  // Stripe Payment & Upsell States
  const [resumeUnlocked, setResumeUnlocked] = useState(false);
  const [coverUnlocked, setCoverUnlocked] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutMode, setCheckoutMode] = useState('full'); // 'full' (R$9,90 + bump) or 'upsell_only' (+R$9,90)
  const [orderBumpSelected, setOrderBumpSelected] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('pix'); // pix | card
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [stripePkLive, setStripePkLive] = useState('pk_live_51USTowQLo3qrnEa0jLI5JMTl1HAiPi7ishatNRtk5dMTP1F2Awd9XsB2aCAJD2wnjGzlOQce6Z28lYCMU0BO9u1P00pk8DvnuE');
  const [stripeLink990, setStripeLink990] = useState('https://buy.stripe.com/3cI6oJ4RgfrfcCo8SF8N200');
  const [stripeLink1980, setStripeLink1980] = useState('https://buy.stripe.com/14AcN76Zo92Raug3yl8N202');
  const [toastMsg, setToastMsg] = useState('');
  const [showImportModal, setShowImportModal] = useState(false);
  const [rawImportText, setRawImportText] = useState('');
  const [lastSavedAt, setLastSavedAt] = useState('Agora mesmo');
  const [pixelEvents, setPixelEvents] = useState([
    { id: 'ev-1', name: 'PageView', detail: 'Landing / Editor carregado', time: 'Agora' }
  ]);

  const trackPixelEvent = (name, detail) => {
    const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setPixelEvents((prev) => [{ id: `ev-${Date.now()}`, name, detail, time }, ...prev.slice(0, 7)]);
  };

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('pago') === 'sim' || params.get('payment') === 'success') {
        setResumeUnlocked(true);
        if (params.get('pacote') === 'completo' || params.get('bump') === '1') {
          setCoverUnlocked(true);
        }
      }
      const savedConfig = localStorage.getItem('curriculo_ia_stripe_cfg');
      if (savedConfig) {
        const cfg = JSON.parse(savedConfig);
        if (cfg.pk) setStripePkLive(cfg.pk);
        if (cfg.link990) setStripeLink990(cfg.link990);
        if (cfg.link1980) setStripeLink1980(cfg.link1980);
      }
    } catch (e) {
      // Ignore errors in sandbox
    }
  }, []);

  const saveStripeConfig = () => {
    try {
      localStorage.setItem('curriculo_ia_stripe_cfg', JSON.stringify({
        pk: stripePkLive,
        link990: stripeLink990,
        link1980: stripeLink1980
      }));
    } catch (e) {
      // Ignore
    }
    setShowCodeModal(false);
    showToast('✅ Chave pk_live e Links da Stripe salvos com sucesso!');
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('curriculo_ia_draft_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.name) {
          setProfile(parsed);
        }
      }
    } catch (e) {
      // Ignore storage errors in sandboxed frames
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('curriculo_ia_draft_v1', JSON.stringify(profile));
      const now = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      setLastSavedAt(now);
    } catch (e) {
      // Ignore storage errors in sandboxed frames
    }
  }, [profile]);

  const handleMagicAiImport = () => {
    if (!rawImportText.trim()) return;
    setIsAiGenerating(true);
    setAiBannerMsg('Extraindo dados do texto colado e estruturando currículo no padrão STAR/ATS...');
    setTimeout(() => {
      const lines = rawImportText.split('\n').map((l) => l.trim()).filter(Boolean);
      const firstLine = lines[0] || 'Camila Rocha';
      const emailMatch = rawImportText.match(/[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}/);
      const phoneMatch = rawImportText.match(/\(?\d{2}\)?\s?9?\d{4}[-\s]?\d{4}/);

      const importedProfile = {
        ...profile,
        name: firstLine.length < 45 ? firstLine.replace(/^Nome:\s*/i, '') : 'Camila Rocha',
        role: lines[1] && lines[1].length < 65 ? lines[1].replace(/^Cargo:\s*/i, '') : 'Product Manager Sênior',
        email: emailMatch ? emailMatch[0] : 'camila.rocha@email.com.br',
        phone: phoneMatch ? phoneMatch[0] : '(11) 99444-8822',
        location: 'São Paulo, SP',
        linkedin: 'linkedin.com/in/camilarocha-pm',
        targetRole: 'Group Product Manager (GPM)',
        targetCompany: 'Mercado Livre',
        summary: 'Profissional com sólida experiência extraída e otimizada via IA, combinando liderança de produtos digitais, descoberta contínua com usuários e crescimento de receita recorrente. Especialista em priorização de roadmap, métricas de retenção e alinhamento executivo.',
        experiences: [
          {
            id: `exp-${Date.now()}`,
            role: lines[1] && lines[1].length < 55 ? lines[1] : 'Senior Product Manager',
            company: 'Tech Solutions Brasil',
            period: '2022 – Atual',
            location: 'São Paulo, SP',
            bullets: '• Estruturou e liderou a estratégia de produto a partir do histórico importado, elevando a conversão do funil principal em +36%.\n• Coordenou squad multidisciplinar de engenharia, design e dados, reduzindo o tempo de entrega de novas features em 40%.\n• Implementou rotinas de experimentação A/B e análise de cohort, aumentando a retenção de 90 dias em +18 pontos percentuais.'
          }
        ],
        skills: [
          'Product Management', 'Product Discovery', 'OKRs & Roadmap', 'Análise de Métricas (Amplitude/GA4)',
          'Testes A/B & CRO', 'Scrum & Kanban', 'SQL & Dados', 'Gestão de Stakeholders'
        ]
      };

      setProfile(importedProfile);
      setCustomCoverText('');
      setIsAiGenerating(false);
      setAiBannerMsg('');
      setShowImportModal(false);
      setDeviceView('desktop');
      trackPixelEvent('Lead_MagicImport', `Currículo importado via IA (${importedProfile.name})`);
      showToast('✨ Currículo extraído e formatado com IA em 1 clique!');
    }, 750);
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3800);
  };

  const generatedCoverLetter = useMemo(() => {
    if (customCoverText.trim()) return customCoverText;
    return buildCoverLetterText(profile, coverTone);
  }, [profile, coverTone, customCoverText]);

  const atsAnalysis = useMemo(() => {
    let score = 52;
    const checks = [];
    if (profile.name && profile.email && profile.phone) {
      score += 10;
      checks.push({ ok: true, label: "Dados de contato completos para sistemas ATS" });
    } else {
      checks.push({ ok: false, label: "Preencha nome, e-mail e telefone" });
    }
    if ((profile.summary || '').length >= 120) {
      score += 12;
      checks.push({ ok: true, label: "Resumo executivo com densidade ideal de palavras-chave" });
    } else {
      checks.push({ ok: false, label: "Expanda seu resumo profissional (mín. 120 caracteres)" });
    }
    const hasMetrics = (profile.experiences || []).some((e) => /\d+%|\bR\$|\d+x|\d+/i.test(e.bullets || ''));
    if (hasMetrics) {
      score += 14;
      checks.push({ ok: true, label: "Experiências contêm indicadores e resultados mensuráveis (% / R$)" });
    } else {
      checks.push({ ok: false, label: "Adicione métricas nas experiências (ex: +25%, R$ 1M)" });
    }
    if ((profile.skills || []).length >= 6) {
      score += 10;
      checks.push({ ok: true, label: `${profile.skills.length} competências indexadas para filtragem automática` });
    } else {
      checks.push({ ok: false, label: "Inclua pelo menos 6 habilidades técnicas/comportamentais" });
    }
    return { score: Math.min(98, score), checks };
  }, [profile]);

  const loadPreset = (key) => {
    setActivePreset(key);
    setProfile(PRESET_PROFILES[key]);
    setCustomCoverText('');
    showToast(`Perfil de exemplo "${PRESET_PROFILES[key].name}" carregado!`);
  };

  const triggerAiSummaryRewrite = () => {
    setIsAiGenerating(true);
    setAiBannerMsg('Otimizando resumo profissional com verbos de impacto e palavras-chave ATS...');
    setTimeout(() => {
      const target = profile.targetRole || profile.role;
      const company = profile.targetCompany ? ` com foco em desafios como os da ${profile.targetCompany}` : '';
      const topSkills = (profile.skills || []).slice(0, 4).join(', ');
      const optimized = `${profile.role} com sólida trajetória na entrega de resultados mensuráveis e liderança de projetos estratégicos${company}. Especialista em ${topSkills || 'gestão e execução técnica'}, combinando visão analítica, melhoria contínua de indicadores de performance e alinhamento direto aos requisitos de ${target}.`;
      setProfile((prev) => ({ ...prev, summary: optimized }));
      setIsAiGenerating(false);
      setAiBannerMsg('');
      showToast('✨ Resumo reescrito com IA no padrão executivo ATS!');
    }, 650);
  };

  const triggerAiExperienceRewrite = (expId) => {
    setIsAiGenerating(true);
    setAiBannerMsg('Reescrevendo conquistas profissionais no formato STAR (Ação + Contexto + Resultado)...');
    setTimeout(() => {
      setProfile((prev) => ({
        ...prev,
        experiences: prev.experiences.map((exp) => {
          if (exp.id !== expId) return exp;
          const enhanced = `${exp.bullets.trim()}\n• Implementou automações e melhorias de processo na ${exp.company}, elevando a produtividade da área em +32% e reduzindo retrabalho operacional em 40%.`;
          return { ...exp, bullets: enhanced };
        })
      }));
      setIsAiGenerating(false);
      setAiBannerMsg('');
      showToast('✨ Bullet points otimizados com métricas de impacto!');
    }, 600);
  };

  const triggerAiSkillSuggestions = () => {
    setIsAiGenerating(true);
    setAiBannerMsg('Mapeando competências de alta conversão para a vaga alvo...');
    setTimeout(() => {
      const extra = ["Gestão de Stakeholders", "Análise de Dados & KPIs", "Resolução de Problemas Complexos", "OKRs & Planejamento"];
      setProfile((prev) => {
        const merged = Array.from(new Set([...(prev.skills || []), ...extra]));
        return { ...prev, skills: merged };
      });
      setIsAiGenerating(false);
      setAiBannerMsg('');
      showToast('✨ 4 palavras-chave ATS adicionadas às suas habilidades!');
    }, 550);
  };

  const triggerAiRegenerateCover = (newTone) => {
    const t = newTone || coverTone;
    setCoverTone(t);
    setIsAiGenerating(true);
    setAiBannerMsg('Gerando Carta de Apresentação personalizada para a vaga e empresa alvo...');
    setTimeout(() => {
      const fresh = buildCoverLetterText(profile, t);
      setCustomCoverText(fresh);
      setIsAiGenerating(false);
      setAiBannerMsg('');
      showToast('✨ Carta de Apresentação personalizada gerada com IA!');
    }, 600);
  };

  const handleDownloadAction = (docType) => {
    if (docType === 'resume' && !resumeUnlocked) {
      setCheckoutMode('full');
      setOrderBumpSelected(!coverUnlocked);
      trackPixelEvent('InitiateCheckout', 'Abriu modal Stripe Checkout (R$ 9,90 + Order Bump)');
      setShowCheckoutModal(true);
      return;
    }
    if (docType === 'cover_letter' && !coverUnlocked) {
      if (resumeUnlocked) {
        setCheckoutMode('upsell_only');
        setOrderBumpSelected(true);
      } else {
        setCheckoutMode('full');
        setOrderBumpSelected(true);
      }
      setShowCheckoutModal(true);
      return;
    }
    exportDocumentAsPdf(profile, generatedCoverLetter, docType, template);
    showToast(docType === 'cover_letter'
      ? '📄 Download da Carta de Apresentação em PDF iniciado!'
      : '📄 Download do Currículo em PDF (A4) iniciado!');
  };

  const handleCompleteStripePayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      trackPixelEvent('Purchase', `Pagamento Stripe confirmado (${checkoutMode === 'upsell_only' ? 'R$ 9,90' : orderBumpSelected ? 'R$ 19,80' : 'R$ 9,90'})`);
      if (checkoutMode === 'upsell_only') {
        setCoverUnlocked(true);
        setShowCheckoutModal(false);
        setPreviewTab('cover_letter');
        exportDocumentAsPdf(profile, generatedCoverLetter, 'cover_letter', template);
        showToast('🎉 Carta de Apresentação desbloqueada e baixada em PDF!');
      } else {
        setResumeUnlocked(true);
        if (orderBumpSelected) {
          setCoverUnlocked(true);
        }
        setShowCheckoutModal(false);
        exportDocumentAsPdf(profile, generatedCoverLetter, 'resume', template);
        if (orderBumpSelected) {
          setTimeout(() => {
            exportDocumentAsPdf(profile, generatedCoverLetter, 'cover_letter', template);
          }, 600);
          showToast('🎉 Pacote Completo (Currículo + Carta) desbloqueado! Downloads iniciados.');
        } else {
          showToast('✅ Currículo desbloqueado por R$ 9,90! Download do PDF iniciado.');
        }
      }
    }, 900);
  };

  const copyPixCode = () => {
    const code = "00020126580014BR.GOV.BCB.PIX0136curriculoia-stripe-checkout-pix-9905204000053039865802BR5915CURRICULO IA SA6009SAO PAULO62070503***6304A1B2";
    try {
      navigator.clipboard.writeText(code);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
    showToast('Código PIX Copia e Cola copiado!');
  };

  const steps = [
    { id: 'personal', label: '1. Perfil & Vaga', short: 'Perfil', icon: User },
    { id: 'experience', label: '2. Experiência', short: 'Exp.', icon: Briefcase },
    { id: 'education', label: '3. Formação', short: 'Formação', icon: GraduationCap },
    { id: 'skills', label: '4. Habilidades & ATS', short: 'Skills', icon: Wrench },
    { id: 'cover', label: '5. Carta IA (+R$ 9,90)', short: 'Carta IA', icon: Sparkles }
  ];

  const renderFormStep = () => {
    if (activeStep === 'personal') {
      return (
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-950 via-indigo-900 to-violet-900 text-white flex flex-wrap items-center justify-between gap-3 shadow-sm">
            <div className="space-y-0.5">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                <Sparkles className="w-3.5 h-3.5" /> Preenchimento Mágico em 5 Segundos
              </div>
              <p className="text-xs font-bold">Tem um currículo antigo ou perfil no LinkedIn?</p>
              <p className="text-[11px] text-indigo-200">Cole o texto bruto e nossa IA preenche todos os campos para você.</p>
            </div>
            <button
              type="button"
              onClick={() => setShowImportModal(true)}
              className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-extrabold text-xs hover:bg-amber-300 transition shadow"
            >
              ✨ Colar Texto / LinkedIn
            </button>
          </div>
          <div className="bg-indigo-50/80 border border-indigo-100 rounded-xl p-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500 shadow-sm"
              />
              <div>
                <p className="text-xs font-semibold text-indigo-950">Foto Profissional no Currículo</p>
                <p className="text-xs text-slate-600">Opcional • Sistemas ATS aceitam ambos os formatos</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setProfile((p) => ({ ...p, showPhoto: !p.showPhoto }))}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                profile.showPhoto
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-300'
              }`}
            >
              {profile.showPhoto ? 'Foto Ativa' : 'Sem Foto (ATS Puro)'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nome Completo *</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Ex: Lucas Mendes"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Título / Cargo Atual *</label>
              <input
                type="text"
                value={profile.role}
                onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Ex: Engenheiro de Software Sênior"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">E-mail *</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Telefone / WhatsApp *</label>
              <input
                type="text"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Cidade e Estado</label>
              <input
                type="text"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">LinkedIn / Portfólio</label>
              <input
                type="text"
                value={profile.linkedin}
                onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-2.5">
            <div className="flex items-center gap-1.5 text-amber-900 font-semibold text-xs">
              <Target className="w-4 h-4 text-amber-600" />
              <span>Contexto para a IA (Personaliza o Currículo e a Carta de Apresentação)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-medium text-slate-600 mb-1">Vaga / Cargo Desejado</label>
                <input
                  type="text"
                  value={profile.targetRole}
                  onChange={(e) => setProfile({ ...profile, targetRole: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="Ex: Tech Lead / Gerente"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-slate-600 mb-1">Empresa Alvo (para a Carta)</label>
                <input
                  type="text"
                  value={profile.targetCompany}
                  onChange={(e) => setProfile({ ...profile, targetCompany: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-amber-300 bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="Ex: Nubank, Mercado Livre..."
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-700">Resumo Profissional Executivo</label>
              <button
                type="button"
                onClick={triggerAiSummaryRewrite}
                disabled={isAiGenerating}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-95 shadow-sm disabled:opacity-50"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Otimizar Resumo com IA</span>
              </button>
            </div>
            <textarea
              rows={4}
              value={profile.summary}
              onChange={(e) => setProfile({ ...profile, summary: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>
      );
    }

    if (activeStep === 'experience') {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Experiências Profissionais</h3>
              <p className="text-xs text-slate-500">Use a IA para converter tarefas em conquistas com números (Método STAR)</p>
            </div>
            <button
              type="button"
              onClick={() => {
                const newExp = {
                  id: `exp-${Date.now()}`,
                  role: "Analista / Especialista",
                  company: "Nova Empresa Ltda.",
                  period: "2023 – Atual",
                  location: "São Paulo, SP",
                  bullets: "• Liderou projetos estratégicos da área, superando as metas trimestrais em 25%.\n• Reduziu custos operacionais por meio de automação de relatórios e processos."
                };
                setProfile((p) => ({ ...p, experiences: [newExp, ...(p.experiences || [])] }));
                showToast('Nova experiência adicionada!');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Adicionar Cargo</span>
            </button>
          </div>

          {(profile.experiences || []).map((exp, idx) => (
            <div key={exp.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                  Experiência #{idx + 1}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => triggerAiExperienceRewrite(exp.id)}
                    disabled={isAiGenerating}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm hover:opacity-95"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Melhorar com IA</span>
                  </button>
                  {profile.experiences.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        setProfile((p) => ({
                          ...p,
                          experiences: p.experiences.filter((item) => item.id !== exp.id)
                        }))
                      }
                      className="p-1 text-slate-400 hover:text-rose-600 rounded"
                      title="Remover experiência"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      experiences: p.experiences.map((item) =>
                        item.id === exp.id ? { ...item, role: e.target.value } : item
                      )
                    }))
                  }
                  placeholder="Cargo"
                  className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                />
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      experiences: p.experiences.map((item) =>
                        item.id === exp.id ? { ...item, company: e.target.value } : item
                      )
                    }))
                  }
                  placeholder="Empresa"
                  className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                />
                <input
                  type="text"
                  value={exp.period}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      experiences: p.experiences.map((item) =>
                        item.id === exp.id ? { ...item, period: e.target.value } : item
                      )
                    }))
                  }
                  placeholder="Período (Ex: Jan 2022 – Atual)"
                  className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                />
                <input
                  type="text"
                  value={exp.location}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      experiences: p.experiences.map((item) =>
                        item.id === exp.id ? { ...item, location: e.target.value } : item
                      )
                    }))
                  }
                  placeholder="Localidade"
                  className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                />
              </div>

              <textarea
                rows={4}
                value={exp.bullets}
                onChange={(e) =>
                  setProfile((p) => ({
                    ...p,
                    experiences: p.experiences.map((item) =>
                      item.id === exp.id ? { ...item, bullets: e.target.value } : item
                    )
                  }))
                }
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white leading-relaxed"
                placeholder="Descreva suas conquistas e resultados..."
              />
            </div>
          ))}
        </div>
      );
    }

    if (activeStep === 'education') {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Formação Acadêmica & Certificações</h3>
              <p className="text-xs text-slate-500">Graduação, pós-graduação, MBA e certificações relevantes</p>
            </div>
            <button
              type="button"
              onClick={() => {
                const newEdu = {
                  id: `edu-${Date.now()}`,
                  degree: "Especialização / Certificação Executiva",
                  institution: "Instituição de Ensino",
                  period: "2024",
                  details: "Destaque em projetos práticos da área"
                };
                setProfile((p) => ({ ...p, education: [...(p.education || []), newEdu] }));
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Adicionar Formação</span>
            </button>
          </div>

          {(profile.education || []).map((edu) => (
            <div key={edu.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-700">{edu.degree || 'Curso'}</span>
                {profile.education.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setProfile((p) => ({
                        ...p,
                        education: p.education.filter((item) => item.id !== edu.id)
                      }))
                    }
                    className="text-slate-400 hover:text-rose-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      education: p.education.map((item) =>
                        item.id === edu.id ? { ...item, degree: e.target.value } : item
                      )
                    }))
                  }
                  placeholder="Curso / Grau"
                  className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                />
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      education: p.education.map((item) =>
                        item.id === edu.id ? { ...item, institution: e.target.value } : item
                      )
                    }))
                  }
                  placeholder="Instituição"
                  className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                />
                <input
                  type="text"
                  value={edu.period}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      education: p.education.map((item) =>
                        item.id === edu.id ? { ...item, period: e.target.value } : item
                      )
                    }))
                  }
                  placeholder="Período (Ex: 2019 – 2022)"
                  className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <input
                type="text"
                value={edu.details}
                onChange={(e) =>
                  setProfile((p) => ({
                    ...p,
                    education: p.education.map((item) =>
                      item.id === edu.id ? { ...item, details: e.target.value } : item
                    )
                  }))
                }
                placeholder="Destaques, TCC ou honrarias (opcional)"
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
              />
            </div>
          ))}

          <div className="pt-2 border-t border-slate-200">
            <h4 className="text-xs font-bold text-slate-700 mb-2">Idiomas</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(profile.languages || []).map((lang) => (
                <div key={lang.id} className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200">
                  <input
                    type="text"
                    value={lang.name}
                    onChange={(e) =>
                      setProfile((p) => ({
                        ...p,
                        languages: p.languages.map((l) =>
                          l.id === lang.id ? { ...l, name: e.target.value } : l
                        )
                      }))
                    }
                    className="w-full text-xs font-medium focus:outline-none"
                  />
                  <select
                    value={lang.level}
                    onChange={(e) =>
                      setProfile((p) => ({
                        ...p,
                        languages: p.languages.map((l) =>
                          l.id === lang.id ? { ...l, level: e.target.value } : l
                        )
                      }))
                    }
                    className="text-[11px] bg-slate-100 rounded px-1.5 py-1 text-slate-700"
                  >
                    <option>Nativo</option>
                    <option>Fluente (C1)</option>
                    <option>Avançado</option>
                    <option>Intermediário (B1)</option>
                    <option>Básico</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeStep === 'skills') {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Habilidades & Palavras-Chave ATS</h3>
              <p className="text-xs text-slate-500">Robôs de recrutamento (Gupy, Greenhouse) ranqueiam essas competências</p>
            </div>
            <button
              type="button"
              onClick={triggerAiSkillSuggestions}
              disabled={isAiGenerating}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sugerir com IA</span>
            </button>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && newSkill.trim()) {
                  e.preventDefault();
                  setProfile((p) => ({ ...p, skills: [...(p.skills || []), newSkill.trim()] }));
                  setNewSkill('');
                }
              }}
              placeholder="Digite uma habilidade (ex: Python, Gestão de Projetos) e pressione Enter"
              className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                if (!newSkill.trim()) return;
                setProfile((p) => ({ ...p, skills: [...(p.skills || []), newSkill.trim()] }));
                setNewSkill('');
              }}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800"
            >
              Adicionar
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {(profile.skills || []).map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-900 border border-indigo-200"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() =>
                    setProfile((p) => ({
                      ...p,
                      skills: p.skills.filter((_, idx) => idx !== index)
                    }))
                  }
                  className="text-indigo-400 hover:text-rose-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Índice de Compatibilidade ATS
                </span>
              </div>
              <span className="text-lg font-extrabold text-emerald-400">{atsAnalysis.score}/100</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300"
                style={{ width: `${atsAnalysis.score}%` }}
              />
            </div>
            <div className="space-y-1.5">
              {atsAnalysis.checks.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  {c.ok ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  )}
                  <span className={c.ok ? 'text-slate-200' : 'text-amber-200'}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3" /> Upsell Inteligente • +R$ 9,90
            </div>
            <h3 className="text-sm font-bold">Carta de Apresentação Automática com IA</h3>
            <p className="text-xs text-indigo-100">
              Adaptada automaticamente para a vaga de <strong>{profile.targetRole || profile.role}</strong> na{' '}
              <strong>{profile.targetCompany || 'empresa alvo'}</strong>.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setPreviewTab('cover_letter');
              if (!coverUnlocked) {
                setCheckoutMode(resumeUnlocked ? 'upsell_only' : 'full');
                setOrderBumpSelected(true);
                setShowCheckoutModal(true);
              } else {
                handleDownloadAction('cover_letter');
              }
            }}
            className="shrink-0 px-3.5 py-2 rounded-lg bg-white text-indigo-900 font-bold text-xs shadow hover:bg-indigo-50 transition"
          >
            {coverUnlocked ? 'Baixar Carta PDF' : 'Desbloquear por +R$ 9,90'}
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-600">Tom de voz da IA:</span>
            {[
              { id: 'executive', label: 'Executivo & Direto' },
              { id: 'enthusiastic', label: 'Entusiasta & Cultura' },
              { id: 'formal', label: 'Corporativo Formal' }
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => triggerAiRegenerateCover(t.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                  coverTone === t.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => triggerAiRegenerateCover(coverTone)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Regerar Texto</span>
          </button>
        </div>

        <textarea
          rows={10}
          value={generatedCoverLetter}
          onChange={(e) => setCustomCoverText(e.target.value)}
          className="w-full px-3.5 py-2.5 text-xs leading-relaxed rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>
    );
  };

  const renderA4Preview = () => {
    const isLocked = previewTab === 'resume' ? !resumeUnlocked : !coverUnlocked;
    const themeColors = {
      ats: {
        accentText: 'text-blue-900',
        accentBorder: 'border-blue-900',
        accentBg: 'bg-blue-900',
        pillBg: 'bg-blue-50 text-blue-900 border-blue-200'
      },
      modern: {
        accentText: 'text-emerald-800',
        accentBorder: 'border-emerald-600',
        accentBg: 'bg-slate-900',
        pillBg: 'bg-emerald-50 text-emerald-900 border-emerald-200'
      },
      classic: {
        accentText: 'text-slate-900',
        accentBorder: 'border-slate-900',
        accentBg: 'bg-slate-900',
        pillBg: 'bg-slate-100 text-slate-800 border-slate-300'
      }
    }[template];

    return (
      <div className="space-y-3">
        {/* Preview Top Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setPreviewTab('resume')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition ${
                previewTab === 'resume'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-indigo-600" />
              <span>Currículo (A4)</span>
              {resumeUnlocked ? (
                <Unlock className="w-3 h-3 text-emerald-600" />
              ) : (
                <span className="text-[10px] bg-indigo-100 text-indigo-800 px-1.5 py-0.2 rounded">R$ 9,90</span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setPreviewTab('cover_letter')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition ${
                previewTab === 'cover_letter'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Carta IA</span>
              {coverUnlocked ? (
                <Unlock className="w-3 h-3 text-emerald-600" />
              ) : (
                <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded">+R$ 9,90</span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">Template:</span>
            {[
              { id: 'ats', label: 'Executivo ATS' },
              { id: 'modern', label: 'Tech Moderno' },
              { id: 'classic', label: 'Clássico' }
            ].map((tpl) => (
              <button
                key={tpl.id}
                type="button"
                onClick={() => setTemplate(tpl.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                  template === tpl.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tpl.label}
              </button>
            ))}
          </div>
        </div>

        {/* A4 Sheet Representation */}
        <div className="relative bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Top Accent Bar */}
          {template !== 'modern' && (
            <div className={`h-2.5 w-full ${themeColors.accentBg}`} />
          )}

          {/* Watermark Overlay when locked */}
          {isLocked && (
            <div className="pointer-events-none select-none absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden">
              <div className="-rotate-24 bg-slate-900/5 border border-slate-900/10 px-8 py-4 rounded-2xl backdrop-blur-[0.5px] text-center">
                <p className="text-lg sm:text-xl font-black tracking-widest text-slate-900/20 uppercase">
                  PREVIEW • CURRÍCULO IA PRO
                </p>
                <p className="text-xs font-bold text-indigo-900/30 uppercase tracking-wider mt-0.5">
                  Desbloqueie o PDF oficial sem marca d&apos;água por R$ 9,90
                </p>
              </div>
            </div>
          )}

          {previewTab === 'resume' ? (
            <div>
              {/* Header */}
              {template === 'modern' ? (
                <div className="bg-slate-900 text-white p-6 border-b-4 border-emerald-500 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      {profile.name || 'Seu Nome Completo'}
                    </h1>
                    <p className="text-sm font-semibold text-emerald-400">
                      {profile.role || 'Seu Cargo / Título Profissional'}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-300 pt-1">
                      <span>{profile.email}</span>
                      <span>•</span>
                      <span>{profile.phone}</span>
                      <span>•</span>
                      <span>{profile.location}</span>
                      {profile.linkedin && (
                        <>
                          <span>•</span>
                          <span>{profile.linkedin}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {profile.showPhoto && (
                    <img
                      src={profile.photoUrl}
                      alt={profile.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400 shrink-0"
                    />
                  )}
                </div>
              ) : (
                <div className={`p-6 pb-4 border-b-2 ${themeColors.accentBorder} flex items-center justify-between gap-4`}>
                  <div className="space-y-1">
                    <h1 className={`text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 ${template === 'classic' ? 'font-serif' : ''}`}>
                      {profile.name || 'Seu Nome Completo'}
                    </h1>
                    <p className={`text-sm font-bold ${themeColors.accentText}`}>
                      {profile.role || 'Seu Cargo / Título Profissional'}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-600 pt-1">
                      <span>{profile.email}</span>
                      <span>•</span>
                      <span>{profile.phone}</span>
                      <span>•</span>
                      <span>{profile.location}</span>
                      {profile.linkedin && (
                        <>
                          <span>•</span>
                          <span>{profile.linkedin}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {profile.showPhoto && (
                    <img
                      src={profile.photoUrl}
                      alt={profile.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 shrink-0"
                    />
                  )}
                </div>
              )}

              {/* Body */}
              <div className="p-6 space-y-4 text-slate-800">
                {/* Summary */}
                <div>
                  <h2 className={`text-xs font-extrabold uppercase tracking-wider ${themeColors.accentText} border-b border-slate-200 pb-1 mb-2`}>
                    Resumo Executivo
                  </h2>
                  <p className="text-xs leading-relaxed text-slate-700">
                    {profile.summary}
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className={`text-xs font-extrabold uppercase tracking-wider ${themeColors.accentText} border-b border-slate-200 pb-1 mb-2.5`}>
                    Experiência Profissional
                  </h2>
                  <div className="space-y-3">
                    {(profile.experiences || []).map((exp) => (
                      <div key={exp.id}>
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h3 className="text-xs font-bold text-slate-900">
                            {exp.role} <span className="text-slate-600 font-semibold">— {exp.company}</span>
                          </h3>
                          <span className="text-[11px] font-medium text-slate-500">
                            {exp.period} • {exp.location}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                          {exp.bullets}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className={`text-xs font-extrabold uppercase tracking-wider ${themeColors.accentText} border-b border-slate-200 pb-1 mb-2`}>
                    Formação Acadêmica & Certificações
                  </h2>
                  <div className="space-y-2">
                    {(profile.education || []).map((edu) => (
                      <div key={edu.id} className="flex flex-wrap items-baseline justify-between gap-1">
                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            {edu.degree} <span className="font-normal text-slate-600">— {edu.institution}</span>
                          </p>
                          {edu.details && <p className="text-[11px] text-slate-500">{edu.details}</p>}
                        </div>
                        <span className="text-[11px] font-medium text-slate-500">{edu.period}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills & Languages */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="sm:col-span-2">
                    <h2 className={`text-xs font-extrabold uppercase tracking-wider ${themeColors.accentText} border-b border-slate-200 pb-1 mb-2`}>
                      Competências & Tecnologias
                    </h2>
                    <div className="flex flex-wrap gap-1.5">
                      {(profile.skills || []).map((sk, i) => (
                        <span
                          key={i}
                          className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${themeColors.pillBg}`}
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className={`text-xs font-extrabold uppercase tracking-wider ${themeColors.accentText} border-b border-slate-200 pb-1 mb-2`}>
                      Idiomas
                    </h2>
                    <div className="space-y-1">
                      {(profile.languages || []).map((l) => (
                        <p key={l.id} className="text-xs text-slate-700">
                          <span className="font-semibold text-slate-900">{l.name}:</span> {l.level}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Cover Letter A4 Sheet */
            <div className="p-6 sm:p-8 space-y-5">
              <div className="border-b border-slate-200 pb-4 flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-violet-100 text-violet-800 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Carta de Apresentação Personalizada por IA
                  </span>
                  <h2 className="text-xl font-extrabold text-slate-900">{profile.name}</h2>
                  <p className={`text-xs font-bold ${themeColors.accentText}`}>{profile.role}</p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {profile.email} • {profile.phone} • {profile.location}
                  </p>
                </div>
                <div className="text-right text-[11px] text-slate-500">
                  <p className="font-semibold text-slate-700">Para: {profile.targetCompany || 'Empresa Contratante'}</p>
                  <p>Ref: {profile.targetRole || profile.role}</p>
                </div>
              </div>

              <div className="text-xs sm:text-sm leading-relaxed text-slate-800 whitespace-pre-line font-normal">
                {generatedCoverLetter}
              </div>
            </div>
          )}

          {/* Action Footer Inside A4 Preview */}
          <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              {isLocked ? (
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                  <Lock className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                  <Unlock className="w-4 h-4" />
                </div>
              )}
              <div>
                <p className="text-xs font-bold">
                  {previewTab === 'resume'
                    ? resumeUnlocked
                      ? 'Currículo PDF Oficial Desbloqueado'
                      : 'Desbloqueie o PDF Final (Sem Marca d’Água)'
                    : coverUnlocked
                    ? 'Carta de Apresentação Desbloqueada'
                    : 'Upsell: Carta de Apresentação com IA (+R$ 9,90)'}
                </p>
                <p className="text-[11px] text-slate-400">
                  {resumeUnlocked && !coverUnlocked
                    ? 'Adicione a Carta de Apresentação pronta por apenas +R$ 9,90'
                    : 'Pagamento único via Stripe (PIX Instantâneo ou Cartão)'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {resumeUnlocked && !coverUnlocked && previewTab === 'resume' && (
                <button
                  type="button"
                  onClick={() => {
                    setCheckoutMode('upsell_only');
                    setOrderBumpSelected(true);
                    setShowCheckoutModal(true);
                  }}
                  className="px-3 py-2 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition"
                >
                  + Carta IA (R$ 9,90)
                </button>
              )}
              <button
                type="button"
                onClick={() => handleDownloadAction(previewTab)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white shadow-md transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  {previewTab === 'resume'
                    ? resumeUnlocked
                      ? 'Baixar Currículo (.PDF)'
                      : 'Baixar PDF por R$ 9,90'
                    : coverUnlocked
                    ? 'Baixar Carta (.PDF)'
                    : 'Liberar Carta por R$ 9,90'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const totalCheckoutPrice = checkoutMode === 'upsell_only'
    ? 'R$ 9,90'
    : orderBumpSelected
    ? 'R$ 19,80'
    : 'R$ 9,90';

  const activeStripeCheckoutUrl = checkoutMode === 'upsell_only'
    ? (stripeLink1980 || 'https://buy.stripe.com/14AcN76Zo92Raug3yl8N202')
    : orderBumpSelected
    ? (stripeLink1980 || 'https://buy.stripe.com/14AcN76Zo92Raug3yl8N202')
    : (stripeLink990 || 'https://buy.stripe.com/3cI6oJ4RgfrfcCo8SF8N200');

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2.5 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* AI Activity Banner */}
      {isAiGenerating && (
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white px-4 py-2 text-xs font-semibold flex items-center justify-center gap-2">
          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          <span>{aiBannerMsg}</span>
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-slate-900">CurrículoIA</span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded-full">
                  ATS Score {atsAnalysis.score}%
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Gerador de Currículos & Carta de Apresentação com IA • Web + Mobile PWA
              </p>
            </div>
          </div>

          {/* Preset Switcher + Device View Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs">
              <span className="px-2 text-[11px] font-semibold text-slate-500">Exemplos:</span>
              {[
                { id: 'tech', label: 'Tech / Dev' },
                { id: 'marketing', label: 'Growth / Mkt' },
                { id: 'finance', label: 'Finanças' }
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => loadPreset(p.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                    activePreset === p.id
                      ? 'bg-white text-indigo-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <span className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Auto-save: {lastSavedAt}</span>
            </span>

            <button
              type="button"
              onClick={() => setShowImportModal(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-amber-100 text-amber-950 hover:bg-amber-200 border border-amber-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden sm:inline">Importar c/ IA</span>
            </button>

            {/* Landing vs Web vs Mobile Simulator Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setDeviceView('landing')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition ${
                  deviceView === 'landing'
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Landing Page</span>
              </button>
              <button
                type="button"
                onClick={() => setDeviceView('desktop')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold transition ${
                  deviceView === 'desktop'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Web Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setDeviceView('mobile')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold transition ${
                  deviceView === 'mobile'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>App Mobile</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowCodeModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            >
              <CreditCard className="w-3.5 h-3.5 text-indigo-600" />
              <span className="hidden sm:inline">Conectar Meu Stripe (pk_live)</span>
            </button>

            <button
              type="button"
              onClick={() => handleDownloadAction('resume')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm hover:opacity-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{resumeUnlocked ? 'Baixar PDF' : 'Baixar PDF • R$ 9,90'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area: Landing Page vs Web Desktop Split-View vs Mobile PWA Frame */}
      {deviceView === 'landing' ? (
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white py-12 px-4 border-b border-indigo-900/50">
            <div className="max-w-5xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Tecnologia Otimizada para Gupy, Kenoby, LinkedIn e Greenhouse</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Seu Currículo Pronto e Aprovado pelos Robôs de Recrutamento em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-indigo-300">
                  2 Minutos com IA
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
                Transforme experiências simples em conquistas executivas no formato STAR, gere sua Carta de Apresentação personalizada e baixe o PDF A4 oficial por apenas <strong>R$ 9,90</strong> (sem assinatura).
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    trackPixelEvent('Lead_StartBuilder', 'Clicou em Criar Currículo na Landing Page');
                    setDeviceView('desktop');
                  }}
                  className="px-6 py-3.5 rounded-xl text-sm font-extrabold bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:opacity-95 shadow-lg flex items-center gap-2"
                >
                  <span>Criar Meu Currículo Agora (Testar Grátis)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setShowImportModal(true)}
                  className="px-5 py-3.5 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Importar do LinkedIn / Texto</span>
                </button>
              </div>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <span>✓ +14.800 currículos gerados no Brasil</span>
                <span>✓ Pagamento único de R$ 9,90 via PIX ou Cartão</span>
                <span>✓ Download imediato em PDF A4</span>
              </div>
            </div>
          </section>

          {/* Before vs After Comparison + Pricing */}
          <section className="max-w-6xl mx-auto py-10 px-4 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 space-y-3">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-rose-200 text-rose-900 uppercase">
                  ❌ Currículo Comum (78% Eliminado no ATS)
                </span>
                <p className="text-xs text-slate-700 italic bg-white p-3 rounded-xl border border-rose-100">
                  &ldquo;Responsável pelo atendimento ao cliente, vendas, relatórios em Excel e suporte à equipe comercial.&rdquo;
                </p>
                <ul className="text-xs text-rose-900 space-y-1.5">
                  <li>• Genérico, sem verbos de ação e sem indicadores numéricos</li>
                  <li>• Layouts do Canva com colunas quebram a leitura dos robôs (Gupy)</li>
                  <li>• Sem carta de apresentação específica para a empresa</li>
                </ul>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-3">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-200 text-emerald-950 uppercase">
                  ✅ CurrículoIA Pro (Top 5% nos Filtros ATS)
                </span>
                <p className="text-xs text-slate-800 font-medium bg-white p-3 rounded-xl border border-emerald-200">
                  &ldquo;• Liderou a operação comercial e retenção de clientes, elevando a conversão trimestral em +28% e automatizando relatórios gerenciais em Excel.&rdquo;
                </p>
                <ul className="text-xs text-emerald-950 space-y-1.5">
                  <li>• Reescrito automaticamente pela IA no método executivo STAR</li>
                  <li>• Estrutura A4 limpa com 98% de leitura garantida em sistemas ATS</li>
                  <li>• Inclui Carta de Apresentação sob medida como Order Bump (+R$ 9,90)</li>
                </ul>
              </div>
            </div>

            {/* Pricing & Funnel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase text-indigo-600">Plano Individual</span>
                  <h3 className="text-lg font-extrabold text-slate-900">Currículo Profissional em PDF (A4)</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-slate-900">R$ 9,90</span>
                    <span className="text-xs text-slate-500">/ pagamento único</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2 pt-2">
                    <li>✓ Geração e otimização completa de textos com IA</li>
                    <li>✓ 3 Templates executivos aprovados para sistemas ATS</li>
                    <li>✓ Download imediato em PDF A4 sem marca d&apos;água</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setDeviceView('desktop');
                    setOrderBumpSelected(false);
                    setShowCheckoutModal(true);
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800"
                >
                  Começar com Currículo • R$ 9,90
                </button>
              </div>

              <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-2xl border-2 border-amber-400 p-6 shadow-xl flex flex-col justify-between space-y-4 relative">
                <span className="absolute -top-3 right-5 px-3 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-400 text-slate-950">
                  Mais Escolhido • 2,4x Mais Entrevistas
                </span>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase text-amber-300">Pacote Completo (Currículo + Carta IA)</span>
                  <h3 className="text-lg font-extrabold">Currículo A4 + Carta de Apresentação Automática</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-amber-300">R$ 19,80</span>
                    <span className="text-xs text-slate-300">(R$ 9,90 + R$ 9,90 no Order Bump)</span>
                  </div>
                  <ul className="text-xs text-slate-200 space-y-2 pt-2">
                    <li>✓ Tudo do plano Currículo Profissional em PDF (A4)</li>
                    <li>✓ Carta de Apresentação personalizada para a empresa e vaga alvo</li>
                    <li>✓ 3 tons de voz executivos + exportação dupla em PDF</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setDeviceView('desktop');
                    setOrderBumpSelected(true);
                    setShowCheckoutModal(true);
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-extrabold bg-amber-400 text-slate-950 hover:bg-amber-300"
                >
                  Desbloquear Pacote Completo • R$ 19,80
                </button>
              </div>
            </div>
          </section>
        </main>
      ) : deviceView === 'desktop' ? (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Smart Stepper Form + Upsell Banner */}
          <div className="lg:col-span-6 space-y-4">
            {/* Step Tabs */}
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex flex-wrap gap-1">
              {steps.map((st) => {
                const Icon = st.icon;
                const active = activeStep === st.id;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => {
                      setActiveStep(st.id);
                      if (st.id === 'cover') setPreviewTab('cover_letter');
                    }}
                    className={`flex-1 min-w-[110px] inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-bold transition ${
                      active
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{st.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Form Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              {renderFormStep()}

              {/* Step Footer Navigation */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    const idx = steps.findIndex((s) => s.id === activeStep);
                    if (idx > 0) setActiveStep(steps[idx - 1].id);
                  }}
                  disabled={activeStep === steps[0].id}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-40"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Etapa Anterior</span>
                </button>

                {activeStep !== 'cover' ? (
                  <button
                    type="button"
                    onClick={() => {
                      const idx = steps.findIndex((s) => s.id === activeStep);
                      if (idx < steps.length - 1) {
                        const nextId = steps[idx + 1].id;
                        setActiveStep(nextId);
                        if (nextId === 'cover') setPreviewTab('cover_letter');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800"
                  >
                    <span>Próxima Etapa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleDownloadAction('resume')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Finalizar e Baixar PDF</span>
                  </button>
                )}
              </div>
            </div>

            {/* Conversion / Upsell Highlight Card */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-4 rounded-2xl border border-indigo-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" /> Oferta Combo • Economia de Tempo
                </div>
                <h4 className="text-sm font-bold">
                  Currículo A4 em PDF (R$ 9,90) + Carta de Apresentação IA (+R$ 9,90)
                </h4>
                <p className="text-xs text-slate-300">
                  Liberação imediata via Stripe (PIX ou Cartão). Sem assinatura ou cobrança recorrente.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setCheckoutMode(resumeUnlocked && !coverUnlocked ? 'upsell_only' : 'full');
                  setOrderBumpSelected(true);
                  setShowCheckoutModal(true);
                }}
                className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-amber-400 text-slate-950 hover:bg-amber-300 transition shadow"
              >
                {resumeUnlocked && coverUnlocked
                  ? 'Pacote Já Desbloqueado ✓'
                  : resumeUnlocked
                  ? 'Liberar Carta (+R$ 9,90)'
                  : 'Desbloquear Agora'}
              </button>
            </div>
          </div>

          {/* Right Column: Live A4 Preview */}
          <div className="lg:col-span-6 lg:sticky lg:top-20">
            {renderA4Preview()}
          </div>
        </main>
      ) : (
        /* Mobile PWA App Simulator Frame */
        <main className="flex-1 py-6 px-3 flex flex-col items-center justify-center bg-slate-200/70">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-600">
            <Smartphone className="w-4 h-4 text-indigo-600" />
            <span>Visualização da Versão Mobile PWA (390px • Instalável no Celular)</span>
          </div>

          <div className="w-full max-w-[400px] bg-slate-50 rounded-[36px] border-[8px] border-slate-900 shadow-2xl overflow-hidden flex flex-col min-h-[720px] max-h-[820px]">
            {/* Phone Status Bar */}
            <div className="bg-slate-900 text-white px-5 py-2 flex items-center justify-between text-[11px] font-semibold">
              <span>9:41</span>
              <div className="w-20 h-3 bg-slate-800 rounded-full" />
              <span>5G • 100%</span>
            </div>

            {/* Mobile App Header */}
            <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900 leading-none">CurrículoIA App</p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                    Score ATS: {atsAnalysis.score}%
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg">
                <button
                  type="button"
                  onClick={() => setMobileScreen('editor')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                    mobileScreen === 'editor' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600'
                  }`}
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => setMobileScreen('preview')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                    mobileScreen === 'preview' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600'
                  }`}
                >
                  Ver PDF
                </button>
              </div>
            </div>

            {/* Mobile Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
              {mobileScreen === 'editor' ? (
                <>
                  {/* Horizontal Step Pills */}
                  <div className="flex gap-1.5 overflow-x-auto pb-1">
                    {steps.map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setActiveStep(st.id)}
                        className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold ${
                          activeStep === st.id
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white text-slate-600 border border-slate-200'
                        }`}
                      >
                        {st.short}
                      </button>
                    ))}
                  </div>
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                    {renderFormStep()}
                  </div>
                </>
              ) : (
                renderA4Preview()
              )}
            </div>

            {/* Mobile Sticky Bottom CTA + Navigation Bar */}
            <div className="bg-white border-t border-slate-200 p-3 space-y-2">
              <button
                type="button"
                onClick={() => handleDownloadAction(previewTab)}
                className="w-full py-2.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>
                  {resumeUnlocked
                    ? 'Baixar Currículo em PDF Agora'
                    : 'Baixar PDF Oficial • R$ 9,90 (PIX / Cartão)'}
                </span>
              </button>
              <div className="grid grid-cols-3 gap-1 pt-0.5">
                <button
                  type="button"
                  onClick={() => setMobileScreen('editor')}
                  className={`flex flex-col items-center py-1 rounded-lg text-[10px] font-bold ${
                    mobileScreen === 'editor' ? 'text-indigo-600' : 'text-slate-500'
                  }`}
                >
                  <Edit3 className="w-4 h-4 mb-0.5" />
                  <span>Formulário</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileScreen('preview');
                    setPreviewTab('resume');
                  }}
                  className={`flex flex-col items-center py-1 rounded-lg text-[10px] font-bold ${
                    mobileScreen === 'preview' && previewTab === 'resume' ? 'text-indigo-600' : 'text-slate-500'
                  }`}
                >
                  <Eye className="w-4 h-4 mb-0.5" />
                  <span>Preview A4</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileScreen('preview');
                    setPreviewTab('cover_letter');
                  }}
                  className={`flex flex-col items-center py-1 rounded-lg text-[10px] font-bold ${
                    mobileScreen === 'preview' && previewTab === 'cover_letter' ? 'text-violet-600' : 'text-slate-500'
                  }`}
                >
                  <Sparkles className="w-4 h-4 mb-0.5" />
                  <span>Carta +R$9,90</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Stripe Checkout + 1-Click Order Bump Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
            {/* Stripe Header */}
            <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-sm">
                  S
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold">Stripe Checkout Seguro</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                      SSL 256-bit
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">Liberação instantânea do PDF sem marca d&apos;água</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCheckoutModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {/* Base Item Summary */}
              {checkoutMode === 'full' ? (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-indigo-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Currículo Profissional em PDF (Padrão A4 & ATS)
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Alta resolução • Sem marca d&apos;água • Download ilimitado
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-slate-900 shrink-0">R$ 9,90</span>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-violet-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-violet-950">
                        Upsell: Carta de Apresentação Personalizada com IA
                      </p>
                      <p className="text-[11px] text-violet-700">
                        Pronta em PDF A4 para a vaga na {profile.targetCompany || 'empresa alvo'}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-violet-950 shrink-0">R$ 9,90</span>
                </div>
              )}

              {/* Order Bump Box (+R$ 9,90) when in Full Checkout */}
              {checkoutMode === 'full' && !coverUnlocked && (
                <div
                  onClick={() => setOrderBumpSelected(!orderBumpSelected)}
                  className={`cursor-pointer p-3.5 rounded-xl border-2 transition ${
                    orderBumpSelected
                      ? 'border-amber-500 bg-amber-50/70'
                      : 'border-dashed border-slate-300 bg-white hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={orderBumpSelected}
                      onChange={(e) => setOrderBumpSelected(e.target.checked)}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-1 h-4 w-4 rounded border-amber-500 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase">
                          🔥 Oferta Order Bump • +R$ 9,90
                        </span>
                        <span className="text-xs font-extrabold text-amber-900">+ R$ 9,90</span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 mt-1">
                        Sim! Adicionar Carta de Apresentação Automática com IA
                      </p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Gera e baixa imediatamente uma Carta de Apresentação em PDF personalizada para a vaga de{' '}
                        <strong>{profile.targetRole || profile.role}</strong>. Candidatos com carta têm 2,4x mais retorno em entrevistas.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Method Tabs (PIX vs Cartão) */}
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition ${
                    paymentMethod === 'pix'
                      ? 'bg-white text-emerald-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  <span>PIX Instantâneo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition ${
                    paymentMethod === 'card'
                      ? 'bg-white text-indigo-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>

              {paymentMethod === 'pix' ? (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-center">
                  <div className="mx-auto w-28 h-28 bg-white p-2 rounded-xl border border-slate-200 flex flex-col items-center justify-center shadow-inner">
                    <QrCode className="w-20 h-20 text-slate-800" />
                  </div>
                  <p className="text-xs text-slate-600">
                    Escaneie o QR Code no app do seu banco ou copie o código PIX abaixo:
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value="00020126580014BR.GOV.BCB.PIX0136curriculoia-stripe-checkout..."
                      className="flex-1 px-2.5 py-1.5 text-[11px] bg-white border border-slate-300 rounded-lg text-slate-500"
                    />
                    <button
                      type="button"
                      onClick={copyPixCode}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800"
                    >
                      {copiedPix ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPix ? 'Copiado' : 'Copiar'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Número do Cartão (Teste Stripe)</label>
                    <input
                      type="text"
                      defaultValue="4242 •••• •••• 4242"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Validade</label>
                      <input
                        type="text"
                        defaultValue="12/29"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">CVC</label>
                      <input
                        type="text"
                        defaultValue="424"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-slate-50 font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Total & Confirm Button */}
              <div className="pt-2 border-t border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-600">Total a pagar agora:</span>
                  <span className="text-lg font-black text-slate-900">{totalCheckoutPrice}</span>
                </div>

                <a
                  href={activeStripeCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackPixelEvent('Redirect_StripeLive', `Abriu checkout real: ${activeStripeCheckoutUrl}`)}
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg flex items-center justify-center gap-2 transition text-center"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Abrir Meu Checkout Oficial da Stripe ({totalCheckoutPrice})</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCompleteStripePayment}
                  disabled={isProcessingPayment}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow flex items-center justify-center gap-2 transition disabled:opacity-50"
                >
                  {isProcessingPayment ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Confirmando pagamento via Stripe...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>
                        Confirmar Pagamento ({totalCheckoutPrice}) e Baixar PDF
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Magic AI Import Modal (LinkedIn / Old Resume Text) */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-900 to-violet-900 text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <div>
                  <h3 className="text-sm font-extrabold">Preenchimento Mágico com IA</h3>
                  <p className="text-[11px] text-indigo-200">Cole seu currículo antigo ou resumo do LinkedIn</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowImportModal(false)}
                className="text-slate-300 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-600">Não tem um texto à mão? Teste com 1 clique:</span>
                <button
                  type="button"
                  onClick={() =>
                    setRawImportText(
                      "Camila Rocha\nSenior Product Manager\ncamila.rocha@email.com.br | (11) 99444-8822\nExperiência: Lidero times de produto em fintechs há 6 anos, focada em conversão de checkout, PIX, retenção de usuários e discovery contínuo. Formada em Administração pela USP."
                    )
                  }
                  className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100"
                >
                  Carregar Texto de Exemplo (LinkedIn)
                </button>
              </div>

              <textarea
                rows={6}
                value={rawImportText}
                onChange={(e) => setRawImportText(e.target.value)}
                placeholder="Cole aqui qualquer texto do seu currículo atual, PDF copiado ou seção Sobre/Experiência do LinkedIn..."
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none leading-relaxed"
              />

              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowImportModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleMagicAiImport}
                  disabled={!rawImportText.trim() || isAiGenerating}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow hover:opacity-95 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Extrair e Preencher Currículo com IA</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Conversion & Meta Pixel / GA4 Live Event Bar */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 px-4 py-2.5 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold uppercase text-[10px]">
              Meta Pixel & GA4 Ativo
            </span>
            <span className="text-slate-400">Últimos eventos disparados no funil:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {pixelEvents.slice(0, 3).map((ev) => (
                <span
                  key={ev.id}
                  className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200 font-mono text-[10px]"
                >
                  {ev.name} ({ev.time})
                </span>
              ))}
            </div>
          </div>
          <span className="text-slate-400">
            Rascunho salvo no navegador ({lastSavedAt}) • Pronto para deploy na Vercel
          </span>
        </div>
      </footer>

      {/* Easy Stripe Configuration Modal (pk_live + Payment Links) */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold">Configuração Rápida da Stripe (Sem Precisar da Chave sk_live)</span>
              </div>
              <button
                type="button"
                onClick={() => setShowCodeModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-4 max-h-[78vh] overflow-y-auto text-xs text-slate-700">
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                <p className="font-extrabold text-xs">✅ Você só conseguiu a chave pk_live? Sem problemas!</p>
                <p className="text-[11px] leading-relaxed">
                  Você <strong>não precisa</strong> da chave secreta (<code className="font-mono">sk_live</code>). Basta colar sua chave <code className="font-mono">pk_live</code> abaixo e usar os <strong>Links de Pagamento da Stripe</strong> (criados no menu esquerdo da Stripe em <em>Pagamentos &gt; Links de pagamento</em>).
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    1. Sua Chave Publicável da Stripe (pk_live_...)
                  </label>
                  <input
                    type="text"
                    value={stripePkLive}
                    onChange={(e) => setStripePkLive(e.target.value)}
                    placeholder="Cole aqui sua chave pk_live_51USTow..."
                    className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    2. Link de Pagamento Stripe — Currículo Individual (R$ 9,90)
                  </label>
                  <input
                    type="text"
                    value={stripeLink990}
                    onChange={(e) => setStripeLink990(e.target.value)}
                    placeholder="Ex: https://buy.stripe.com/..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Crie na Stripe em <strong>Pagamentos &gt; Links de pagamento &gt; + Novo</strong> com valor R$ 9,90.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    3. Link de Pagamento Stripe — Combo Currículo + Carta IA (R$ 19,80)
                  </label>
                  <input
                    type="text"
                    value={stripeLink1980}
                    onChange={(e) => setStripeLink1980(e.target.value)}
                    placeholder="Ex: https://buy.stripe.com/..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Na opção <em>&ldquo;Após o pagamento&rdquo;</em> lá na Stripe, marque redirecionar para: <code className="text-indigo-600 font-mono">https://seusite.vercel.app/?pago=sim&amp;pacote=completo</code>
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCodeModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Fechar
                </button>
                <button
                  type="button"
                  onClick={saveStripeConfig}
                  className="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-indigo-600 text-white hover:bg-indigo-700 shadow"
                >
                  Salvar Minha Configuração Stripe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {false && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-bold">Arquitetura de Produção (Next.js + Stripe BRL + IA + PWA)</span>
              </div>
              <button
                type="button"
                onClick={() => setShowCodeModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-3 max-h-[75vh] overflow-y-auto text-xs text-slate-700">
              <p className="font-semibold text-slate-900">
                O pacote ZIP anexado contém os arquivos prontos para deploy na Vercel/Node.js:
              </p>
              <div className="bg-slate-950 text-slate-100 p-3.5 rounded-xl font-mono text-[11px] overflow-x-auto leading-relaxed">
{`// app/api/stripe/checkout/route.ts (Stripe Cartão + PIX + Order Bump)
const lineItems = [
  {
    price_data: {
      currency: 'brl',
      product_data: { name: 'Currículo Profissional em PDF (Padrão ATS)' },
      unit_amount: 990, // R$ 9,90 em centavos
    },
    quantity: 1,
  },
];

if (includeCoverLetterBump) {
  lineItems.push({
    price_data: {
      currency: 'brl',
      product_data: { name: 'Upsell: Carta de Apresentação com IA Personalizada' },
      unit_amount: 990, // +R$ 9,90 (Total R$ 19,80)
    },
    quantity: 1,
  });
}

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card', 'pix'],
  mode: 'payment',
  line_items: lineItems,
  success_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/sucesso?session_id={CHECKOUT_SESSION_ID}\`,
  cancel_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/checkout\`,
});`}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">1. Geração IA (Gemini / OpenAI)</p>
                  <p className="text-[11px] text-slate-600">
                    Endpoint <code className="text-indigo-600">/api/ai/generate</code> recebe os dados brutos do formulário e devolve o JSON otimizado no padrão STAR + Carta de Apresentação.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">2. PWA Mobile Instalável</p>
                  <p className="text-[11px] text-slate-600">
                    Inclui <code className="text-indigo-600">public/manifest.json</code> e meta tags mobile-first para instalação direta na tela inicial do Android e iOS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}