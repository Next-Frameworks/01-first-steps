import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact description',
  keywords: ["Contact Page", 'Angel', 'Información', '...'],
  authors: [{name: 'Angel'}]
 };
 
export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}