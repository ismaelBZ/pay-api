import Header from './../../components/shared/Header';
import Title from './../../components/shared/utils/Title';
import ContacForm from '../../components/Contact/Form';
import Partners from '../../components/Contact/Partners';
import Cta from './../../components/shared/CallToAction';
import Footer from './../../components/shared/Footer';

export const Contact = () => {
  return (
    <div className="bg-appBackground px-6 md:px-9 xl:px-20">
      <Header />
      <Title>Submit a help request and we’ll get in touch shortly.</Title>
      <div className='xl:grid xl:grid-cols-2 xl:max-w-[1110px] xl:m-auto 2xl:max-w-[1280px]'>
        <ContacForm />
        <div className='xl:relative'>
          <div className='xl:absolute xl:top-[22%]'>
            <Partners />
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  )
}
