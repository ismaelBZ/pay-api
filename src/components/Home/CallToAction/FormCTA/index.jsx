import {useState} from 'react'
import { Form, Link } from 'react-router-dom'
import axios from 'axios';

import Btn from '../../../shared/utils/Buttons/Default'
import EmailInput from './../../../shared/utils/Inputs/EmailInput'


const FormCTA = ({setResponse}) => {
  const [email, setEmail] = useState ('');
  const [validation, setValidation] = useState({
    email: {
      isInvalid: false,
      message: `We need your email`
    }
  })
  
  const validateEmail = () => {
    let validationResult = {};
    if (/^\s*$/.test(email)) {
      validationResult = 
        {
          email: {
            isInvalid: true,
            message: `We need your email`
          }
        }
    } else if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email)
      ) {
          validationResult = 
            {
              email: {
                isInvalid: true,
                message: 'Please provide a valid email'
              }
            }
    }

    setValidation(validationResult);
    return validationResult;  
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const validationResult = validateEmail();
    if ((Object.entries(validationResult)).length === 0) {
        try {
          const apiResponse = await axios.post('/request-demo', {email});
          console.log(apiResponse);
          setResponse({
            responseStatus: apiResponse.status,
            message: 'Request send successfully'
          });
        } catch (error) {
          setResponse({
            responseStatus: error.response.status,
            message: 'Failed! Try again later',
          });
        }
    }
  }

  
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
      <Form onSubmit={ e => handleSubmit(e) }
        className="m-auto mt-5
          md:mt-7 md:w-[65%] md:relative
          xl:m-0 xl:mt-14 xl:w-[80%]"
      >
        <EmailInput 
          value={email} 
          onChange={(e)=>{
            setValidation({...validation, email:{isInvalid: false}});
            setEmail(e.target.value);
          }}/>
        <Btn addStyles="md:absolute md:w-[178px] md:p-3 md:-top-[16px] md:right-0">
          Schedule a Demo
        </Btn>
        {validation.email?.isInvalid && (
            <p className="ps-5 mt-3 text-red-400">{validation.email.message}</p>
          )}
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
