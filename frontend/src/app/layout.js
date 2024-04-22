import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: 'M. Furqan Nasir Portfolio',
  description: 'MERN Stack, DevOps',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_mono.variable} scrollbar2`}>
          {children}
        
      </body>
    </html>
  )
}
