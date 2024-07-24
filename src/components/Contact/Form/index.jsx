import { useState } from 'react'
import SubmitButton from './../../../components/shared/utils/Buttons/Outlined'
import { GrFormCheckmark } from 'react-icons/gr'
import './styles.css'
import axios from 'axios';

const ContacForm = ({response, setResponse}) => {
  
  const [validations, setValidations] = useState({  
    field: {
    isInvalid: false,
    message: '',
    }
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
    upToDate: false
  })


  const handleChange = (e) => {
    setValidations({...validations, [e.target.name]: {...validations[e.target.name], isInvalid: false}});
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const validateForm = () => {
    const data = (Object.entries(formData));
    const validationFails = [];
    
    data.forEach((input) => {
      if (input[0] === 'company' || input[0] === 'title') {
        return;
      }
      if (/^\s*$/.test(input[1])){
        const validations = {
          [input[0]]: {
            isInvalid: true,
            message: `We need your ${input[0]}`
          }
        }
        validationFails.push(validations);
      } else if (input[0] === 'email') {
        if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
          .test(input[1])) {
            const validations = {
              [input[0]]: {
                isInvalid: true,
                message: 'Please provide a valid email'
              }
            } 
            validationFails.push(validations);
          }
      }
    });

    let validationFailsObject = {}
    for (const field of validationFails){
      validationFailsObject = {
        ...validationFailsObject,
        ...field
      }
    }

    setValidations(() => validationFailsObject);
    return validationFailsObject;
  }


  const sendForm = async () => {
    try {
      const apiResponse = await axios.post('/contact', formData);
      setResponse({
        responseStatus: apiResponse.status,
        message: apiResponse.data.message
      });
    } catch (error) {
      setResponse({
        responseStatus: error.response ? error.response.status : 500,
        message: error.response ? error.response.data.message : error.message
      })
    } 
  } 

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formValidations = validateForm();
    if ((Object.entries(formValidations)).length === 0) {
      sendForm();
    }
  }


  return (
    <section className="md:m-auto md:mt-14 md:w-[65%] xl:mx-0 xl:w-[80%] xl:mt-2">
      <form
        className="m-auto mt-12 flex flex-col gap-4"
        onSubmit={e => handleSubmit(e)}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className={
            validations.name?.isInvalid
              ? `
              p-3 ps-5 text-red-400 font-semibold placeholder:text-red-400
              bg-appBackground border-b-[1px] border-red-400
              focus:border-blue
            `
              : `
              p-3 ps-5 text-blue font-semibold
              bg-appBackground border-b-[1px] border-[#999]
              focus:border-blue
            `
          }
          value={formData.name}
          onChange={(e) => handleChange(e)}
        />
        {validations.name?.isInvalid && (
          <p className="ps-5 text-red-400">{validations.name.message}</p>
        )}
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
          className={
            validations.email?.isInvalid
              ? `
              p-3 ps-5 text-red-400 font-semibold placeholder:text-red-400
              bg-appBackground border-b-[1px] border-red-400
              focus:border-blue
            `
              : `
              p-3 ps-5 text-blue font-semibold
              bg-appBackground border-b-[1px] border-[#999]
              focus:border-blue
            `
          }
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
        {validations.email?.isInvalid && (
          <p className="ps-5 text-red-400">{validations.email.message}</p>
        )}
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company Name"
          className="p-3 ps-5 text-blue font-semibold
            bg-appBackground border-b-[1px] border-[#999]
            focus:border-blue
          "
          value={formData.company}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className={
            validations.title?.isInvalid
              ? `
              p-3 ps-5 text-red-400 font-semibold placeholder:text-red-400
              bg-appBackground border-b-[1px] border-red-400
              focus:border-blue
            `
              : `
              p-3 ps-5 text-blue font-semibold
              bg-appBackground border-b-[1px] border-[#999]
              focus:border-blue
            `
          }
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />
        {validations.title?.isInvalid && (
          <p className="ps-5 text-red-400">{validations.title.message}</p>
        )}
        <textarea
          placeholder="Message"
          name="message"
          id="message"
          rows="3"
          className={
            validations.message?.isInvalid
              ? `
              p-3 ps-5 text-red-400 font-semibold placeholder:text-red-400
              bg-appBackground border-b-[1px] border-red-400
              focus:border-blue
            `
              : `
              p-3 ps-5 text-blue font-semibold
              bg-appBackground border-b-[1px] border-[#999]
              focus:border-blue
            `
          }
          value={formData.message}
          onChange={(e) => handleChange(e)}
        />
        {validations.message?.isInvalid && (
          <p className="ps-5 text-red-400">{validations.message.message}</p>
        )}
        {/* */}
        <div className="mt-3 grid grid-cols-[50px,_1fr] items-center">
          <div className="relative">
            <input
              id='contactUpToDate'
              type='checkbox'
              className="absolute -top-[12px] left-0 appearance-none
                w-6 h-6
                peer z-20 cursor-mickey
              "
              value={formData.upToDate}
              onChange={(e) => {
              setFormData({
                ...formData,
                upToDate: e.target.checked
            })
          }}
            />
            <div
              className="absolute -top-[12px] left-0
                appearance-none w-6 h-6 bg-light-blue 
                peer-checked:bg-light-pink 
                z-0
              "
            />
            <GrFormCheckmark
              className="absolute -top-[12px] left-0 
              w-6 h-6 text-white 
              invisible peer-checked:visible
              z-10
            "
            />
          </div>
          <label htmlFor='contactUpToDate'>
            <p className="text-[15px] cursor-mickey">
              Stay up-to-date with company announcements and updates to our API
            </p>
          </label>
        </div>
        <SubmitButton
          text="Submit"
          addStyles="px-[45px] mt-2 ml-0
            md:px-12
            active:bg-blue active:text-white
            cursor-mickey
          "
        />
      </form>
    </section>
  )
}

export default ContacForm
