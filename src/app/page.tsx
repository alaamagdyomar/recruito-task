'use client'
import Features from '@/components/Features'
import HomePage from '../components/Home'
import Benifits from '../components/Benifits'
import Faqs from '@/components/Faqs'
import TesTimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
          <HomePage/>
          <Features/>
          <Benifits/>
          <Faqs/>
          <TesTimonials/>
    </main>
  )
}
