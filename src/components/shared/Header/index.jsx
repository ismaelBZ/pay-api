import {useState} from 'react';
import { Link } from 'react-router-dom';
import Menu from './../../../assets/imgs/shared/menu-icon.svg';
import Logo from './../../../assets/imgs/shared/logo.svg';
import MobileMenu from './MobileMenu';
import Btn from '../utils/Buttons/Default';

const Header = () => {
  const [displayHamburguer, setDisplayHamburguer] = useState('hidden')

  const handleDisplayHamburguer = () => {
    setDisplayHamburguer((prevDisplay) => {
      if (prevDisplay === 'hidden') {
        return 'block';
      }
      if (prevDisplay === 'block') {
        return 'hidden';
      }
    })
  }

  const handleClose = () => {
    setDisplayHamburguer('hidden');
  };
  
  return (
    <div
      className="py-8 pt-11 flex items-center justify-between
        md:pt-10
        xl:m-auto xl:max-w-[1110px]
        2xl:max-w-[1280px]
      "
    >
      <header
        className={`flex items-center grow justify-between 
        md:justify-start`}
      >
        <h1 className="sr-only">PayAPI</h1>

        {/* HOME */}
        <Link to="/" className="cursor-mickey">
          <img src={Logo} alt="" />
        </Link>

        {/* Menu Hamburguer*/}
        <button className="md:hidden cursor-mickey" onClick={()=>handleDisplayHamburguer()}>
          <img src={Menu} className="" />
        </button>
        <MobileMenu 
          displayHamburguer={displayHamburguer} 
          handleClose={handleClose} />

        {/* Links */ }
        <nav className="hidden md:flex ml-16 gap-x-10 ">
          <Link
            className="font-sans text-light-blue font-bold text-base
              active:text-blue hover:text-semibold cursor-mickey
            "
            to="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="font-sans text-light-blue font-bold text-base
              active:text-blue hover:text-semibold cursor-mickey
            "
            to="/about"
          >
            About
          </Link>
          <Link
            className="font-sans text-light-blue font-bold text-base
              active:text-blue hover:text-semibold cursor-mickey
            "
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <div>
        <Btn
          addStyles={`hidden md:block md:w-[178px] 
          md:mt-0`}
        >
          Schedule a Demo
        </Btn>
      </div>
    </div>
  )
}

export default Header
