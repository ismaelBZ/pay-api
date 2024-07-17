import Header from '../../components/shared/Header'
import CallToAction from './../../components/Home/CallToAction'
import Partners from './../../components/Home/Partners'
import Features from './../../components/Home/Features'
import Cta from './../../components/shared/CallToAction'
import Footer from '../../components/shared/Footer'

const Home = () => {
  return (
    < div className="bg-appBackground px-6 md:px-9 xl:px-20">
      <Header />
      <main>
        <CallToAction />
        <Partners />
        <Features />
        <Cta/>
      </main>
      <Footer />
    </div>
  )
}

export default Home
