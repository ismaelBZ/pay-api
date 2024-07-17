import PricingCard from './PricingCard'

const PlanList = () => {
  return (
    <section className='xl:m-auto xl:max-w-[1110px]'>
      <ul
        className="md:grid md:grid-cols-3 md:mt-9 
          xl:gap-8
        "
      >
        <PricingCard
          cardName="Free Plan"
          planDescription="Build and test using our core set of products with up to 100 API requests "
          planValue="0.00"
        />
        <PricingCard
          cardName="Basic Plan"
          planDescription="Launch your project with unlimited requests and no contractual minimums "
          planValue="249.00"
          Identity={true}
          Investments={true}
          Assets={true}
        />
        <PricingCard
          cardName="Premium Plan"
          planDescription="Get tailored solutions, volume pricing, and dedicated support for your team "
          planValue="499.00"
          Identity={true}
          Investments={true}
          Assets={true}
          Liabilities={true}
          Income={true}
        />
      </ul>
    </section>
  )
}

export default PlanList
