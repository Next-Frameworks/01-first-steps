

// Layouts anidados
// snipet -> lrc

import { Navbar } from "@/components";

// http://localhost:3000/general/about
export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
      <>
        <Navbar />
        <main className='flex flex-col items-center p-24'>
          { children }
        </main>
      </>
  );
}