import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
      apiVersion: '2024-06-20',
    });
    const body = await req.json();
    const { includeCoverLetterBump, upsellOnly, customerEmail, resumeId } = body;

    const lineItems = [];

    if (upsellOnly) {
      lineItems.push({
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Upsell: Carta de Apresentação Automática com IA (PDF A4)',
          },
          unit_amount: 990,
        },
        quantity: 1,
      });
    } else {
      lineItems.push({
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Currículo Profissional em PDF (Padrão A4 & Otimizado para ATS)',
          },
          unit_amount: 990,
        },
        quantity: 1,
      });

      if (includeCoverLetterBump) {
        lineItems.push({
          price_data: {
            currency: 'brl',
            product_data: {
              name: 'Order Bump: Carta de Apresentação Automática com IA (+R$ 9,90)',
            },
            unit_amount: 990,
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
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || ''}/?pago=sim&pacote=completo`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || ''}/?payment=cancelled`,
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
