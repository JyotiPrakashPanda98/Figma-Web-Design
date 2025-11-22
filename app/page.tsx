import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrendyPlants from '@/components/TrendyPlants'
import TopSellingPlants from '@/components/TopSellingPlants'
import DeskDecorations from '@/components/DeskDecorations'
import ProductCards from '@/components/ProductCards'
import BestO2 from '@/components/BestO2'
import CustomerReviews from '@/components/CustomerReviews'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrendyPlants />
      <TopSellingPlants />
      <DeskDecorations />
      <ProductCards />
      <BestO2 />
      <CustomerReviews />
      <Footer />
    </main>
  )
}

