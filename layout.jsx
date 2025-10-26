import './globals.css'
import Link from 'next/link'
export const metadata = { title: "Anna's Secret Garden", description: 'Plant flowers on the island — Next.js recreation' }
export default function RootLayout({ children }) {
  return (<html lang="en"><body><header className="topbar"><h1>Anna's Secret Garden</h1><nav><Link href="/">Garden</Link><Link href="/gallery">Flower Gallery</Link></nav></header><main className="container">{children}</main><footer className="footer">Made with 🌱 — Next.js recreation</footer></body></html>)
}