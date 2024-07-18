import { Link } from 'react-router-dom'
import Feature from '../../Feature'
import Btn from '../../../shared/utils/Buttons/Outlined'

const PricingCard = ({
  cardName,
  planDescription,
  planValue,
  Transactions = true,
  Auth = true,
  Identity = true,
  Investments,
  Assets,
  Liabilities,
  Income,
}) => {
  return (
    <div>
      <h3
        className="mt-11 text-2xl text-center text-pink
          xl:mx-auto xl:text-3xl xl:text-left
        "
      >
        {cardName}
      </h3>
      <p
        className="sr-only 
          md:not-sr-only md:w-[85%] md:h-[115px] md:m-auto md:text-center md:mt-5 md:leading-7 
          xl:h-min xl:ml-0 xl:text-left "
      >
        {planDescription}
      </p>
      <p
        className="mt-20 font-serif text-[55px] text-center text-blue
          md:mt-1 md:text-5xl
          xl:mt-2 xl:text-6xl xl:text-left  
        "
      >
        ${planValue}
      </p>
      <hr
        className="m-auto mt-4 w-[87.5%] opacity-20
          md:mt-9
        "
      ></hr>
      <ul className="mt-6">
        <div
          className="flex flex-col items-center gap-[13px]
            xl:items-start
          "
        >
          <Feature name="Transactions" checked={Transactions} />
          <Feature name="Auth" checked={Auth} />
          <Feature name="Identity" checked={Identity} />
          <Feature name="Investments" checked={Investments} />
          <Feature name="Assets" checked={Assets} />
          <Feature name="Liabilities" checked={Liabilities} />
          <Feature name="Income" checked={Income} />
        </div>
      </ul>
      <hr className="m-auto mt-7 w-[90%] opacity-20"></hr>
      <form>
        <Link to='/'>
          <Btn
            addStyles="m-auto mt-7 p-3 px-7
            xl:ml-0
            active:bg-blue active:text-white active:font-bold 
            cursor-mickey
            "
            text="Request Acess"
          />
        </Link>
      </form>
    </div>
  )
}

export default PricingCard
