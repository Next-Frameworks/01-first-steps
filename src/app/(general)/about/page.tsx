import type { Metadata } from 'next';

// snnipet -> mr
export const metadata: Metadata = {
 title: 'About Title',
 description: 'About Description',
 keywords: ["About Page", 'Angel', 'Información', '...'],
 authors: [{name: 'Angel'}]
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}