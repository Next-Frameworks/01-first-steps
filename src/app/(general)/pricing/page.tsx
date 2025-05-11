import type { Metadata } from 'next';

// snnipet -> mr
export const metadata: Metadata = {
  title: 'Pracing Page',
  description: 'Pracing description',
  keywords: ["Pracing Page", 'Angel', 'Información', '...'],
  authors: [{name: 'Angel'}]
 };

export default function PricingPage() {
  return (
    <>
      <span className="text-5xl">Pricing Page</span>
    </>
  );
}