import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegistaModal from './components/modals/RegistaModal'
import ToasterProvider from './provider/ToasterProvider'

const font = Nunito({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Air Clone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegistaModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
