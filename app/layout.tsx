import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Media Studio Pro | All-in-One Browser Media Editor',
  description: 'All-in-one browser media editor: image studio, video & audio trimmers, filters, snapshot capture, and developer text suite.',
  openGraph: {
    title: 'Media Studio Pro | All-in-One Browser Media Editor',
    description: 'All-in-one browser media editor: image studio, video & audio trimmers, filters, snapshot capture, and developer text suite.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Studio Pro | All-in-One Browser Media Editor',
    description: 'All-in-one browser media editor: image studio, video & audio trimmers, filters, snapshot capture, and developer text suite.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning className="bg-[#090d16] text-slate-100 antialiased overflow-hidden m-0 p-0">
        {children}
      </body>
    </html>
  );
}
