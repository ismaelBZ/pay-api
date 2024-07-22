import {useState} from 'react';
import Header from '../../components/shared/Header';
import Notification from '../../components/shared/Notification';
import Title from './../../components/shared/utils/Title';
import Vision from '../../components/About/Vision';
import ImageCard from '../../components/About/ImageCard';
import Stats from './../../components/About/Stats'
import Cta from './../../components/shared/CallToAction';
import Footer from '../../components/shared/Footer';
import Culture from '../../components/About/Culture';



const About = () => {
  const [response, setResponse] = useState({
    responseStatus: null,
    message: 'Something is going wrong'
  })

  return (
    <div className="bg-appBackground px-6 md:px-9 xl:px-20">
      <Header />
      <Notification response={response} setResponse={setResponse}/>
      <Title>
        We empower <span className="block md:inline">innovators</span> by
        delivering access to the financial system
      </Title>
      <Vision />
      <ImageCard />
      <Stats />
      <Culture />
      <Cta setResponse={setResponse} /> 
      <Footer />
    </div>
  )
}

export default About
