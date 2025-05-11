

// Layouts anidados
// snipet -> lrc
// http://localhost:3000/general/about
export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <main className='flex flex-col items-center p-24'>
        { children }
      </main>
    </div>
  );
}