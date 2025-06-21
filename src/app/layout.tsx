import './globals.css'
import React from 'react'
import { getPayload } from 'payload'
import config from '../payload.config'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  return {
    title: settings.siteName,
    description: settings.metaDescription,
  }
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const payload = await getPayload({ config })
    const header = await payload.findGlobal({
        slug: 'header',
    })
    const footer = await payload.findGlobal({
        slug: 'footer',
    })

  return (
    <html lang="en">
      <body>
        <Header navItems={header.navItems} />
        {children}
        <Footer copyright={footer.copyright} />
      </body>
    </html>
  )
} 