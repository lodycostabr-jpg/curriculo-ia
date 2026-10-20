# Guia Passo a Passo de Deploy — CurrículoIA Pro (Vercel + Stripe PIX/Cartão + IA)

## 1. Configurar o Stripe Brasil (R$ 9,90 + Order Bump R$ 9,90)
1. Acesse [dashboard.stripe.com](https://dashboard.stripe.com) e ative sua conta brasileira em **BRL (R$)**.
2. Vá em **Configurações > Métodos de Pagamento** e ative **Cartões** e **PIX**.
3. Em **Desenvolvedores > Chaves da API**, copie sua `STRIPE_SECRET_KEY` (`sk_live_...` ou `sk_test_...`).

## 2. Gerar a Chave de IA (Custo < R$ 0,03 por currículo)
1. Acesse o [Google AI Studio](https://aistudio.google.com/) e crie uma chave `GEMINI_API_KEY`.
2. Os endpoints `/api/ai/generate` e `/api/ai/parse-resume` já estão configurados para usar o modelo `gemini-1.5-flash`.

## 3. Deploy na Vercel (Web + Mobile PWA com HTTPS)
1. Suba esta pasta em um repositório privado no seu GitHub.
2. No painel da [Vercel](https://vercel.com), clique em **Add New Project**, selecione o repositório e adicione as variáveis de ambiente:
   - `NEXT_PUBLIC_APP_URL`: `https://seu-dominio.com.br`
   - `STRIPE_SECRET_KEY`: `sk_live_...`
   - `STRIPE_WEBHOOK_SECRET`: `whsec_...`
   - `GEMINI_API_KEY`: `AIzaSy...`
3. Clique em **Deploy**.

## 4. Conectar o Webhook de Liberação Automática
1. No painel do Stripe, acesse **Desenvolvedores > Webhooks > Adicionar Endpoint**.
2. Informe a URL: `https://seu-dominio.com.br/api/stripe/webhook`.
3. Selecione o evento `checkout.session.completed`, copie o segredo (`whsec_...`) e salve em `STRIPE_WEBHOOK_SECRET` na Vercel.
