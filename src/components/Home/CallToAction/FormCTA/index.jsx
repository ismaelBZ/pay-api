import { Form, Link } from 'react-router-dom'
import Btn from '../../../shared/utils/Buttons/Default'
import EmailInput from './../../../shared/utils/Inputs/EmailInput'

const FormCTA = () => {
  return (
    <div className="pt-1">
      <h2
        className="m-auto text-[32px] text-center text-blue leading-[1.15] 
        md:w-3/4 md:m-auto md:text-5xl md:leading-[1.15]
        xl:mx-0 xl:p-0 xl:mt-9 xl:w-full xl:text-7xl xl:text-left "
      >
        Start building with our APIs for absolutely free.
      </h2>
      {/*   
        The cta shared card was not used here to increase its compatibility with other pages and reduce maintenance work. Here is an individual component that is free to modify, as this is the user's first view of the site.
      */}
      <Form
        className="m-auto mt-5
          md:mt-7 md:w-[65%] md:relative
          xl:m-0 xl:mt-14 xl:w-[80%]"
      >
        <EmailInput />
        <Btn addStyles="md:absolute md:w-[178px] md:p-3 md:-top-[16px] md:right-0">
          Schedule a Demo
        </Btn>
      </Form>
      <p
        className="mt-6 text-center 
          md:mt-4 
          xl:pb-0 xl:pl-10 xl:text-left"
      >
        Have any questions?
        <Link to='/contact' className='cursor-mickey'>
          <strong> Contact Us</strong>
        </Link>
      </p>
    </div>
  )
}

export default FormCTA
