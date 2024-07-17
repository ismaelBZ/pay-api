import Header from '../../components/shared/Header';
import Title from './../../components/shared/utils/Title';
import Vision from '../../components/About/Vision';
import ImageCard from '../../components/About/ImageCard';
import Stats from './../../components/About/Stats'
import Cta from './../../components/shared/CallToAction';
import Footer from '../../components/shared/Footer';
import Culture from '../../components/About/Culture';



const About = () => {
  return (
    <div className="bg-appBackground px-6 md:px-9 xl:px-20">
      <Header />
      <Title>
        We empower <span className="block md:inline">innovators</span> by
        delivering access to the financial system
      </Title>
      <Vision />
      <ImageCard />
      <Stats />
      <Culture />
      <Cta /> 
      <Footer />
    </div>
  )
}

export default About
