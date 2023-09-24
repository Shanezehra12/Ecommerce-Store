import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Category from './Component/Category'
import FeatureSectionFruits from './Component/FeatureSectionFruits'
import FeatureSectionBreakfast from './Component/FeatureSectionBreakfast'
import Banner from './Component/Banner'
import BlogSection from './Component/BlogSection'
import NewsLetter from './Component/NewsLetter'
import FeatureSection from './Component/FeatureSection'
import Footer from './Component/Footer'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
      <FeatureSectionBreakfast/>
      <Banner/>
      <BlogSection/>
      <NewsLetter/>
      <FeatureSection/>
      <Footer/>
    </main>
  )
}

export default App
