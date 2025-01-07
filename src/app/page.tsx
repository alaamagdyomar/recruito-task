'use client';

import Features from '@/components/Features';
import HomePage from '../components/Home';
import Benifits from '../components/Benifits';
import Faqs from '@/components/Faqs';
import TesTimonials from '@/components/Testimonials';
import Enhance from '@/components/Enhance';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Sections with IDs */}
      <div id="home">
        <HomePage />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="benefits">
        <Benifits />
      </div>

      <div id="faqs">
        <Faqs />
      </div>

      <div id="testimonials">
        <TesTimonials />
      </div>

      <div id="enhance">
        <Enhance />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}