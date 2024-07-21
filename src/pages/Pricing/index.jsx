import {useState} from 'react';
import Header from './../../components/shared/Header';
import Title from '../../components/shared/utils/Title';
import Cta from './../../components/shared/CallToAction'
import Footer from './../../components/shared/Footer'
import PlanList from '../../components/Pricing/PlanList';
import Notification from '../../components/shared/Notification';

const Pricing = () => {

  const [response, setResponse] = useState({
    responseStatus: null,
    message: 'Something is going wrong'
  })

  return (
    <div className="bg-appBackground px-6 md:px-9 xl:px-20">
      <Header />
      <Notification response={response} setResponse={setResponse}/>
      <main>
        <Title >Pricing</Title>
        <PlanList />
        <div className="mt-20 md:mt-28 ">
          <Cta response={response} setResponse={setResponse} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Pricing
