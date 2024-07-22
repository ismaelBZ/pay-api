import {useState} from 'react';
import EmailInput from './../utils/Inputs/EmailInput'
import Button from './../utils/Buttons/Default'
import classNames from 'classnames'
import axios from 'axios'

const Cta = ({
  title,
  titleStyle,
  formStyles,
  emailStyle,
  buttonStyle,
  setResponse,
}) => {
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
          setResponse({
            responseStatus: apiResponse.status,
            message: 'Request send successfully'
          });
        } catch (error) {
          setResponse({
            responseStatus: error.status,
            message: 'Failed! Try again later',
          });
        }
    }
  }


  return (
    <div
      className="mt-12 mb-20 md:mt-[110px] md:mb-24
        xl:grid xl:grid-cols-2 xl:mt-[100px] xl:max-w-[1110px] xl:mx-auto
        2xl:max-w-[1280px]
      "
    >
      <h2
        className={classNames(
          `text-[32px] text-center text-blue
            md:text-5xl
            xl:text-left
          `,
          titleStyle,
        )}
      >
        {title ? title : 'Ready to start?'}
      </h2>
      <form
        className={classNames(` readyToStart
          mt-8
          md:relative md:w-[65%] m-auto md:mt-12
          xl:m-0 xl:w-[80%] xl:justify-self-end`,
          formStyles,
        )}
        onSubmit={e => handleSubmit(e)}
      >
        <EmailInput 
          addStyles={emailStyle} 
          value={email}
          onChange={(e)=> {
            setValidation({validation, email: {isInvalid: false}})
            setEmail(e.target.value)
          }}
        />
        <Button
          addStyles={`md:absolute md:w-[178px] md:p-3 md:-top-[16px] md:right-0 ${{
            buttonStyle,
          }}`}
        >
          Schedule a Demo
        </Button>
      {validation.email?.isInvalid && (
          <p className="ps-5 mt-3 text-red-400">{validation.email.message}</p>
        )}
      </form>
    </div>
  )
}

export default Cta
