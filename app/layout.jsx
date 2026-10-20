import React from 'react';

export const metadata = {
  title: 'CurrículoIA Pro — Gerador de Currículos e Carta de Apresentação com IA',
  description: 'Gere seu currículo otimizado para Gupy/ATS e Carta de Apresentação em PDF A4 por R$ 9,90.',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className="bg-slate-100 text-slate-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
