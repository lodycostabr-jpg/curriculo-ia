# CurrículoIA Pro — Web App + Mobile PWA (Next.js + Stripe + IA)

Aplicação completa de geração de currículos otimizados para ATS e cartas de apresentação com Inteligência Artificial, monetizada via microtransação de **R$ 9,90** + Order Bump/Upsell de **+R$ 9,90** no Stripe (Cartão de Crédito e PIX).

## Estrutura do Projeto
- `app/page.jsx`: Aplicação Front-End Responsiva (Web Split-View + Mobile PWA) com exportador nativo de PDF A4.
- `app/api/stripe/checkout/route.ts`: Criação da sessão do Stripe Checkout em BRL (`R$ 9,90` base + `R$ 9,90` Order Bump da Carta de Apresentação).
- `app/api/stripe/webhook/route.ts`: Webhook para validação de pagamento confirmado (`checkout.session.completed`).
- `app/api/ai/generate/route.ts`: Integração com Gemini 1.5 Flash para reescrita no padrão STAR e geração de Carta de Apresentação.
- `public/manifest.json`: Configuração Progressive Web App (PWA) para instalação na tela inicial no Android e iOS.

## Variáveis de Ambiente (`.env.local`)
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
GEMINI_API_KEY=AIzaSy...
```
