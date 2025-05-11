
// Se genera apartir del servidor por eso se muestra
// aunque desactivemos javascript

import Link from 'next/link';

// Next es SEO friendly por los metadatas
export default function HomePage() {
  return (
    <main className='flex flex-col items-center p-24'>

      <span className='text-5xl'>
        Hola Mundo
        {/* { new Date().getTime() } */}
      </span>

      <Link href={'/about'}>About Page</Link>

    </main>
  );
}
