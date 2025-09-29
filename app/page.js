"use client";
import HeroSection from '../components/HeroSection'
import ProductFilter from '../components/ProductFilter'
import FeaturedProducts from '../components/FeaturedProducts'
import ProductCategories from '../components/ProductCategories'
import MobileService from '../components/MobileService'
import TrustSection from '../components/TrustSection'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductFilter />
      <FeaturedProducts />
      <ProductCategories />
      <MobileService />
      <TrustSection />
      <Testimonials />
    </>
  );
}
