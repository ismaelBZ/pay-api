import { useState } from 'react'
import SubmitButton from './../../../components/shared/utils/Buttons/Outlined'
import { GrFormCheckmark } from 'react-icons/gr'
import './styles.css'

const ContacForm = () => {
  const [validation, setValidation] = useState({
    field: '',
    isInvalid: false,
    message: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    const email = document.getElementById('email')
    const name = document.getElementById('name')
    const company = document.getElementById('company')
    const title = document.getElementById('title')
    const message = document.getElementById('message')

    if (/^\s*$/.test(email.value)) {
      setValidation({
        field: e.target.name,
        isInvalid: true,
        message: `This field can't be empty`,
      })
    } else if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        email.value,
      )
    ) {
      setValidation({
        field: e.target.name,
        isInvalid: true,
        message: `Please provide a valid email`,
      })
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
          className="p-3 ps-5 text-blue font-semibold 
            bg-appBackground autofill:bg-none border-b-[1px] border-[#999]
            focus:border-blue 
          "
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
          className={
            validation.isInvalid
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
          onChange={() => {
            setValidation({ ...validation, isInvalid: false })
          }}
        />
        {validation.isInvalid && (
          <p className="ps-5 text-red-400">{validation.message}</p>
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
        />
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="p-3 ps-5 text-blue font-semibold
            bg-appBackground border-b-[1px] border-[#999]
            focus:border-blue
          "
        />
        <textarea
          placeholder="Message"
          name="message"
          id="message"
          rows="3"
          className="p-3 ps-5 text-blue font-semibold resize-none
            bg-appBackground border-b-[1px] border-[#999]
            focus:border-blue
          "
        />
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
