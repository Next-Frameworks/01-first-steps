import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact description',
  keywords: ["Contact Page", 'Angel', 'Información', '...'],
  authors: [{name: 'Angel'}]
 };
 
export default function ContactaPage() {
  return (
    <>
      <span className="text-7xl flex justify-center">
        Contact Page
        </span>
    </>
  );
}