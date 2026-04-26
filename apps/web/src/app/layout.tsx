import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { PageTransition } from '@/components/ui/PageTransition'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'PoliIntel — The Public Record',
    template: '%s | PoliIntel',
  },
  description:
    'A structured public record for American politicians. Votes, statements, funding, and legislative history — organized, cited, and interpreted without partisan framing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col font-sans`}>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function(){
            var t=localStorage.getItem('theme');
            var dark=t==='dark'||(t===null&&!window.matchMedia('(prefers-color-scheme: light)').matches);
            if(dark)document.documentElement.classList.add('dark');
          })()
        `}</Script>
        <Nav />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
