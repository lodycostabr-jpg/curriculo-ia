import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { includeCoverLetterBump, upsellOnly, customerEmail, resumeId } = body;

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    if (upsellOnly) {
      lineItems.push({
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Upsell: Carta de Apresentação Automática com IA (PDF A4)',
            description: 'Carta personalizada para a vaga e empresa alvo, pronta para envio.',
          },
          unit_amount: 990, // R$ 9,90 em centavos
        },
        quantity: 1,
      });
    } else {
      lineItems.push({
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Currículo Profissional em PDF (Padrão A4 & Otimizado para ATS)',
            description: 'Download imediato em alta resolução e sem marca d’água.',
          },
          unit_amount: 990, // R$ 9,90 em centavos
        },
        quantity: 1,
      });

      if (includeCoverLetterBump) {
        lineItems.push({
          price_data: {
            currency: 'brl',
            product_data: {
              name: 'Order Bump: Carta de Apresentação Automática com IA (+R$ 9,90)',
              description: 'Carta personalizada em PDF A4 alinhada à vaga desejada.',
            },
            unit_amount: 990, // + R$ 9,90 (Total R$ 19,80)
          },
          quantity: 1,
        });
      }
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'pix'],
      mode: 'payment',
      customer_email: customerEmail || undefined,
      line_items: lineItems,
      metadata: {
        resumeId: resumeId || 'default',
        unlockResume: upsellOnly ? 'false' : 'true',
        unlockCoverLetter: (includeCoverLetterBump || upsellOnly) ? 'true' : 'false',
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?payment=cancelled`,
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
