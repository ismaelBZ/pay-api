import Header from './../../components/shared/Header';
import Title from '../../components/shared/utils/Title';
import Cta from './../../components/shared/CallToAction'
import Footer from './../../components/shared/Footer'
import PlanList from '../../components/Pricing/PlanList';

const Pricing = () => {
  return (
    <div className="bg-appBackground px-6 md:px-9 xl:px-20">
      <Header />
      <main>
        <Title >Pricing</Title>
        <PlanList />
        <div className="mt-20 md:mt-28 ">
          <Cta />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Pricing
