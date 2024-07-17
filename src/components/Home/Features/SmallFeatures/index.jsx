import CardImage from "../../../shared/utils/CardImage";
import personalFinances from './../../../../assets/imgs/home/personal-finances.svg'
import bankingCoverge from './../../../../assets/imgs/home/banking-coverge.svg'
import consumerPayments from './../../../../assets/imgs/home/consumer-payments.svg'

const SmallFeatures = () => {
  return (
    <ul className="mt-20 flex flex-col gap-10 
    md:flex-row md:mt-24 md:gap-1 md:justify-between
    xl:mt-36">
      <div className=''>
        <CardImage
          imgRef={personalFinances}
          imgStyles="md:w-[90px] xl:w-[110px]"
          title="Personal Finances"
          titleStyle="mt-9 font-sans text-lg font-bold text-center text-blue 
          md:mt-7  md:text-center
          "
          content="Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. "
          contentStyle="mt-5 text-center
            md:w-[99%] md:leading-[1.5]
            2xl:w-[80%] 2xl:mx-auto 
          "
        />
      </div>
      <div>
        <CardImage
          imgRef={bankingCoverge}
          imgStyles="md:w-[90px] xl:w-[110px]"
          title="Banking & Coverage"
          titleStyle="mt-9 font-sans text-lg font-bold text-center text-blue 
          md:mt-7  md:text-center
          "
          content="With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."
          contentStyle="mt-5 text-center
            md:w-[99%] md:leading-[1.5]
            2xl:w-[80%] 2xl:mx-auto 
          "
        />
      </div>
      <div>
        <CardImage
          imgRef={consumerPayments}
          imgStyles="md:w-[90px] xl:w-[110px]"
          title="Consumer Payments"
          titleStyle="mt-9 font-sans text-lg font-bold text-center text-blue 
            md:mt-7  md:text-center
            "
          content="It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."
          contentStyle="mt-5 text-center
            md:w-[98%] md:leading-[1.5]
            2xl:w-[80%] 2xl:mx-auto 
          "
        />
      </div>
    </ul>
  )
}
export default SmallFeatures