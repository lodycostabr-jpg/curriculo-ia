import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export async function POST(req: Request) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature') || '';

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const { resumeId, unlockResume, unlockCoverLetter } = session.metadata || {};
      // Libera o download do Currículo (R$ 9,90) e/ou Carta de Apresentação (+R$ 9,90)
      console.log('Pagamento confirmado via Stripe:', {
        sessionId: session.id,
        resumeId,
        unlockResume,
        unlockCoverLetter,
      });
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }
}
