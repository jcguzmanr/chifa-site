import React from 'react'
import { getPayload } from 'payload'
import config from '../payload.config'
import { Page } from '../payload-types'
import Hero from '../components/Hero'
import DishCard from '../components/DishCard'
import ReservationCTA from '../components/ReservationCTA'
import { Metadata } from 'next'

const componentMap = {
  hero: Hero,
  menuShowcase: ({ title, featuredDishes }) => (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  ),
  reservationCta: ReservationCTA,
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  const { metaDescription, title } = page.docs[0] as Page

  return {
    title,
    description: metaDescription,
    openGraph: {
        title,
        description: metaDescription,
    }
  }
}

const Page = async () => {
  const payload = await getPayload({ config })
  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  const { layout } = page.docs[0] as Page

  return (
    <main>
      {layout.map((block) => {
        const BlockComponent = componentMap[block.blockType]
        if (BlockComponent) {
          return <BlockComponent key={block.id} {...block} />
        }
        return null
      })}
    </main>
  )
}

export default Page 