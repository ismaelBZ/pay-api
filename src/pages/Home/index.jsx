import {useState} from 'react';
import RsponseContext from './../../components/context/ResponseContext';
import Header from '../../components/shared/Header';
import Notification from '../../components/shared/Notification';
import CallToAction from './../../components/Home/CallToAction';
import Partners from './../../components/Home/Partners';
import Features from './../../components/Home/Features';
import Cta from './../../components/shared/CallToAction';
import Footer from '../../components/shared/Footer';
import ResponseContext from './../../components/context/ResponseContext';

const Home = () => {
  
  const [response, setResponse] = useState({
    responseStatus: null,
    message: 'Something is going wrong'
  })

  
  return (
    < div className="bg-appBackground px-6 md:px-9 xl:px-20">
      <Header />
      <Notification response={response} setResponse={setResponse}/>
      <main>
        <CallToAction setResponse={setResponse} />
        <Partners />
        <Features />
        <Cta setResponse={setResponse} />
      </main>
      <Footer />
    </div>
  )
}

export default Home
