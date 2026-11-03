'use client';

export default function Home() {
  return (
    <main className="w-screen h-screen m-0 p-0 overflow-hidden bg-[#080c14]">
      <iframe
        src="/index.html"
        className="w-full h-full border-0 block"
        title="Media Studio Pro"
        allow="clipboard-read; clipboard-write; camera; microphone"
      />
    </main>
  );
}
