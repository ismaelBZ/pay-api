import { useState, useRef } from 'react'
import SubmitButton from './../../../components/shared/utils/Buttons/Outlined'
import { GrFormCheckmark } from 'react-icons/gr'
import './styles.css'
import axios from 'axios';

const ContacForm = () => {
  
  const [validation, setValidation] = useState([
    {
    field: '',
    isInvalid: false,
    message: '',
    }
  ])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
    upToDate: false
  })


  const validateForm = () => {
    setValidation({});
  
    for (const input in formData) {
      if(input !== "company" && input !== "upToDate") {
        if (/^\s*$/.test(formData[input])) {
          setValidation((prevValidation) => {
            if (prevValidation === null) {
              return ({
                [input]: {
                  isInvalid: true,
                  message: `This field can't be empty`,
                }
                , ...prevValidation
              })
            } else {
                return ({
                  [input]: {
                    isInvalid: true,
                    message: `This field can't be empty`,
                  }
                  , ...prevValidation
                })
              }
          });
        } else if (input === 'email') {
          if (
            !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
              .test(formData.email)
            ) {
              setValidation((prevValidation) => {
                if(prevValidation === null) {
                  return({
                    email: {
                      isInvalid: true,
                      message: `Please provide a valid email`,
                    }
                  })
                } else {
                    return({
                      email: {
                        isInvalid: true,
                        message: `Please provide a valid email`,
                      }, ...prevValidation
                    });
                }
              })
          }
        }
      }
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    validateForm();

    {/* Accessing the useState validation current value */}
    setValidation(async (prev) => {
      let counter = 0;
      for(const input in prev) {
        if(prev[input].isInvalid) {
          counter++;
        }
      } 
      if (counter === 0) {
        try {
          const response = await axios.post('/contact', formData);
        } catch (error) {
            console.log(error.message);
          } 
        }
        return prev;
    })
   
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
            validation.name?.isInvalid
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
          onChange={(e) => { 
            setValidation({...validation, name: {...validation.name, isInvalid: false}});
            setFormData({
              ...formData,
              name: e.target.value
            })
          }}
        />
        {validation.name?.isInvalid && (
          <p className="ps-5 text-red-400">{validation.name.message}</p>
        )}
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
          className={
            validation.email?.isInvalid
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
          onChange={(e) => {
            setValidation({...validation, email: {...validation.email, isInvalid: false}});
            setFormData({
              ...formData,
              email: e.target.value
            })
          }}
        />
        {validation.email?.isInvalid && (
          <p className="ps-5 text-red-400">{validation.email.message}</p>
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
          onChange={(e) => { 
            setFormData({
              ...formData,
              company: e.target.value
            })
          }}
        />
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className={
            validation.title?.isInvalid
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
          onChange={(e) => { 
            setValidation({...validation, title: {...validation.title, isInvalid: false}});
            setFormData({
              ...formData,
              title: e.target.value
            })
          }}
        />
        {validation.title?.isInvalid && (
          <p className="ps-5 text-red-400">{validation.title.message}</p>
        )}
        <textarea
          placeholder="Message"
          name="message"
          id="message"
          rows="3"
          className={
            validation.message?.isInvalid
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
          onChange={(e) => { 
            setValidation({...validation, message: {...validation.message, isInvalid: false}});
            setFormData({
              ...formData,
              message: e.target.value
            })
          }}
        />
        {validation.message?.isInvalid && (
          <p className="ps-5 text-red-400">{validation.title.message}</p>
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
