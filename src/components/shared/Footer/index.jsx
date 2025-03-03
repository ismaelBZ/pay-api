import { Link } from 'react-router-dom'
import Logo from './../../../assets/imgs/shared/logo.svg'

const Footer = () => {
  return (
    <div
      className="-mx-6 pt-12 pb-10
      md:-mx-9 md:px-7 md:pt-8 md:pb-5
      xl:w-lvw xl:-mx-20 bg-dark-blue "
    >
      <footer
        className="md:flex md:items-center 
          xl:px-0 xl:max-w-[1110px] xl:mx-auto 
          2xl:max-w-[1280px]
        "
      >
        {/* Logo - HOME */}
        <Link to='/' className="cursor-mickey">
          <img
            src={Logo}
            className="m-auto grayscale brightness-[5]
              md:max-w-fit md:m-0 md:ml-2
              xl:ml-0
            "
          />
        </Link>
        
        <nav
          className="mt-9 flex flex-col gap-7 text-center text-white 
            md:flex-row md:m-0 md:ml-16 md:gap-9
          "
        >
          {/* Pricing */}
          <Link to="/pricing" className="opacity-70 cursor-mickey active:opacity-100">
            Pricing
          </Link>

          {/* About */}
          <Link to="/about" className="opacity-70 cursor-mickey active:opacity-100">
            About
          </Link>

          {/* Contact */}
          <Link to="/contact" className="opacity-70 cursor-mickey active:opacity-100">
            Contact
          </Link>
        </nav>
        
        {/* Social Media */}
        <ul
          className="mt-10 flex justify-center gap-6
            md:m-0 md:mr-2 md:grow md:justify-end
            xl:-mr-2
          "
        >
          {/* Facebook */}
          <Link className='cursor-mickey'>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              className='fill-white active:fill-light-pink'
              xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" />
            </svg>
          </Link>

          {/* Twitter */}
          <Link className='cursor-mickey'>
            <svg 
              width="24" 
              height="20" 
              viewBox="0 0 24 20" 
              className='fill-white active:fill-light-pink'
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z" />
            </svg>
          </Link>

          {/* LindeIn  */}
          <Link className='cursor-mickey'>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              className='fill-white active:fill-light-pink'
              xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.4 0H21.6C22.92 0 24 1.08 24 2.4V21.6C24 22.92 22.92 24 21.6 24H2.4C1.08 24 0 22.92 0 21.6V2.4C0 1.08 1.08 0 2.4 0ZM3.6 20.4H7.2V9.6H3.6V20.4ZM5.4 7.56C4.2 7.56 3.24 6.6 3.24 5.4C3.24 4.2 4.2 3.24 5.4 3.24C6.6 3.24 7.56 4.2 7.56 5.4C7.56 6.6 6.6 7.56 5.4 7.56ZM16.8 20.4H20.4V13.56C20.4 11.28 18.48 9.36 16.2 9.36C15.12 9.36 13.8 10.08 13.2 11.04V9.6H9.6V20.4H13.2V14.04C13.2 13.08 14.04 12.24 15 12.24C15.96 12.24 16.8 13.08 16.8 14.04V20.4Z" />
              </svg>
          </Link>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
