
// Se genera apartir del servidor por eso se muestra
// aunque desactivemos javascript

// Next es SEO friendly por los metadatas
export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">
        Hola Mundo
        {/* { new Date().getTime() } */}
        </span>
    </main>
  );
}
