import Card from "../../../shared/utils/Card";
import CodeImage from './../../../../assets/imgs/home/code.svg';
import Phones from './../../../../assets/imgs/home/Phones.svg'

const BigFeatures = () => {
  return (
    <ul className="flex flex-col gap-20 xl:gap-32">
      <div className="xl:flex 2xl:gap-20">
        <img src={CodeImage} className="m-auto md:w-[60%] xl:w-[65%] 2xl:w-[58%]" />
        <div className='xl:my-auto'>
          <Card
            title='Easy to implement'
            titleStyle='mt-14 text-4xl text-center text-blue
              md:mt-[40px] md:text-[48px]
              xl:mx-auto xl:w-[70%] xl:mt-0 xl:text-left
            '
            content='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.'
            contentStyle="-mx-1 mt-6 text-[15px] font-medium text-center leading-[1.75] text-blue
              md:mt-8 md:w-[90%] md:mx-auto
              xl:w-[70%] xl:text-left
            "
          />
        </div>
      </div>
      <div className="xl:flex xl:flex-row-reverse 2xl:-gap-20">
        <img src={Phones} className='m-auto xl:w-[72%] 2xl:w-[55%]'/>
        <div className='xl:my-auto'>
          <Card
            title='Simple UI & UX'
            titleStyle='mt-14 text-4xl text-center text-blue
              md:mt-16 md:text-[48px]
              xl:text-left xl:mt-0
            '
            content="Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. "
            contentStyle="-mx-1 mt-6 text-[15px] font-medium text-center leading-[1.75] text-blue
              md:mt-8 md:w-[90%] md:mx-auto
              xl:text-left xl:ml-0 xl:w-[70%]
            "
          />
        </div>
      </div>
    </ul>
  )
}

export default BigFeatures;