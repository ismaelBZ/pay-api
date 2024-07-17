import {Link} from 'react-router-dom'
import Card from '../../shared/utils/Card'
import PartnerList from './../../shared/PartnersList'

const Parners = () => {
  return (
    <section
      className="bg-dark-blue -mx-6 px-6 pt-[88px] pb-20
        md:-mx-9 md:pb-20 md:pt-24
        xl:-mx-20 xl:pt-10
      "
    >
      <div
        className="xl:max-w-[1110px] xl:mx-auto xl:flex         xl:flex-row-reverse
        2xl:max-w-[1280px]
        "
      >
        <PartnerList />
        <div className="pt-8 xl:w-fit">
          <Card
            title="Who we work with"
            titleStyle="mt-4 text-[30px] text-center text-white tracking-wide
              md:text-[46px] md:mt-[23px]
              xl:text-left
            "
            content="Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users."
            contentStyle="-mx-1 m-auto mt-3 text-[15px] text-center font-light text-white opacity-[70%] leading-7
              md:max-w-[65%] md:mx-auto md:mt-6 md:leading-[1.9] md:tracking-[0.02rem]
              xl:mx-0 xl:text-left xl:max-w-[85%]
            "
          />
          <Link
            to='/about'
            className="block m-auto mt-14 px-8 py-3 w-fit
              text-white border-[1px] rounded-full border-white 
              md:mt-8
              xl:mx-0 xl:mt-7
               active:hover:bg-white active:text-dark-blue active:font-bold
               cursor-mickey
          "
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Parners
