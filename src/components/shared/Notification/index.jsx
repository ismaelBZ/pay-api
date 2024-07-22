import {useState, useEffect} from 'react'

const Notification = ({response, setResponse}) => {
const [display, setDisplay] = useState('-top-20');
const [messageColor, setMessageColor] = useState('text-light-pink')
const {responseStatus, message} = response;


useEffect(() => {
  if(responseStatus !== null) {
    if (responseStatus < 300) {
      setMessageColor('text-green-400');
    }

    setDisplay('top-0');

    setTimeout(() => {
      setDisplay('-top-20');
    }, 2500)

    setTimeout(() => {
      setMessageColor('text-light-pink')
    }, 3000)

    // Return to default status
    setResponse({
      ...response,
      responseStatus: null
    })
  }
}, [responseStatus])

  return (
    <div
      className={`fixed ${display} -left-[5lvw] w-[110lvw] m-auto py-5 
        grid  grid-cols-1
        bg-[rgba(255,255,255,0.3)] backdrop-blur-sm
        shadow-[0_2px_5px_1px_rgba(0,0,0,0.1)]
        transition-[top] duration-300 easy-in
      `}
    >
      <p
        className={`col-start-1 row-start-1 mt-1 blur-sm
        text-center text-xl ${messageColor}`}
      >
        {message}
      </p>
      <p
        className={`col-start-1 row-start-1
          text-center text-xl ${messageColor}
        `}
      >
        {message}
      </p>
    </div>
  )
}

export default Notification
