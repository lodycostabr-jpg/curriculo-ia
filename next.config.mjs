import fs from 'fs';
import path from 'path';

// Auto-fix repository structure during Vercel build
try {
  const root = process.cwd();
  const appDir = path.join(root, 'app');
  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir, { recursive: true });
  }

  // 1. Remove old conflicting TypeScript/API folders from initial upload
  for (const oldPath of ['app/api', 'curriculo-ia-fullstack', 'tsconfig.json']) {
    const full = path.join(root, oldPath);
    if (fs.existsSync(full)) {
      fs.rmSync(full, { recursive: true, force: true });
    }
  }

  // 2. If page.jsx was uploaded to root, copy it into app/page.jsx
  const rootPage = path.join(root, 'page.jsx');
  const appPage = path.join(appDir, 'page.jsx');
  if (fs.existsSync(rootPage)) {
    fs.copyFileSync(rootPage, appPage);
  }

  // 3. Ensure app/page.jsx starts with 'use client';
  if (fs.existsSync(appPage)) {
    const content = fs.readFileSync(appPage, 'utf8');
    if (!content.trimStart().startsWith("'use client'") && !content.trimStart().startsWith('"use client"')) {
      fs.writeFileSync(appPage, "'use client';\n" + content, 'utf8');
    }
  }

  // 4. Always create/update app/layout.jsx so RootLayout is guaranteed to exist
  const layoutContent = `import React from 'react';

export const metadata = {
  title: 'CurrículoIA Pro — Gerador de Currículos e Carta de Apresentação com IA',
  description: 'Gere seu currículo otimizado para Gupy/ATS e Carta de Apresentação em PDF A4 por R$ 9,90.',
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
`;
  fs.writeFileSync(path.join(appDir, 'layout.jsx'), layoutContent, 'utf8');
} catch (err) {
  console.warn('Auto-fix warning:', err);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
