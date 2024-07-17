import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import Button from "./../../../../components/shared/utils/Buttons/Default"

const MobileMenu = ({displayHamburguer, handleClose}) => {

  return (
    <div
      className={`absolute right-0 top-0 
        w-[80%] max-w-[360px] p-5 h-lvh bg-dark-blue
        ${displayHamburguer}
        md:hidden
      `}
    >
      <div className='py-5 flex justify-end border-b-[1px] border-[#aaa]'>
        <button onClick={handleClose}>
          <MdClose className='text-4xl text-white cursor-mickey'/>
        </button>
      </div>
      <nav className="pt-11 pb-3 flex flex-col items-center gap-7">
        <Link to={'/'} 
          className="font-sans text-xl font-bold text-white opacity-65 cursor-mickey">
          Home
        </Link>
        <Link to={'/pricing'} 
          className="font-sans text-xl font-bold text-white opacity-65 cursor-mickey">
          Pricing
        </Link>
        <Link to={'/about'}
          className="font-sans text-xl font-bold text-white opacity-65 cursor-mickey">
          About
        </Link>
        <Link to={'/contact'} 
          className="font-sans text-xl font-bold text-white opacity-65 cursor-mickey">
          Contact
        </Link>
      </nav>
      <Button>Schedule a Demo</Button>
    </div>
  )
}

export default MobileMenu
