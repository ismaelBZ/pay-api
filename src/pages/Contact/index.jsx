import {useState} from 'react';
import Header from './../../components/shared/Header';
import Notification from './../../components/shared/Notification';
import Title from './../../components/shared/utils/Title';
import ContacForm from '../../components/Contact/Form';
import Partners from '../../components/Contact/Partners';
import Cta from './../../components/shared/CallToAction';
import Footer from './../../components/shared/Footer';

const Contact = () => {
  const [response, setResponse] = useState({
    responseStatus: null,
    message: 'Something is going wrong'
  })
  
  return (
    <div className="bg-appBackground px-6 md:px-9 xl:px-20">
      <Header />
      <Notification response={response} setResponse={setResponse}/>
      <Title>Submit a help request and we’ll get in touch shortly.</Title>
      <div className='xl:grid xl:grid-cols-2 xl:max-w-[1110px] xl:m-auto 2xl:max-w-[1280px]'>
        <ContacForm response={response} setResponse={setResponse} />
        <div className='xl:relative'>
          <div className='xl:absolute xl:top-[22%]'>
            <Partners />
          </div>
        </div>
      </div>
      <Cta setResponse={setResponse}/>
      <Footer />
    </div>
  )
}

export default Contact;