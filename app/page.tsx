import BestSelling from '@/components/BestSelling'
import Catogery from '@/components/Catogery'
import FeatureProducts from '@/components/FeatureProducts'
import Hero from '@/components/Hero'
import Promotion from '@/components/Promotion'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className=" min-h-screen items-center justify-between">
  <Hero />
  <FeatureProducts/>
  <Services/>
  <Promotion/>
  <Catogery/>
  <BestSelling/>
    </main>
  )
}
