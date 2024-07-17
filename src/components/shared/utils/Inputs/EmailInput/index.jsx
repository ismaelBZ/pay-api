import classNames from 'classnames'
import './styles.css'

const EmailInput = ({addStyles}) => {
  return(
    <input
      className={classNames(`w-full m-auto p-3 pl-[20px] block bg-white
      text-blue font-bold
        rounded-full shadow-[10px_10px_25px_-10px_rgba(54,83,107,0.3)] cursor-mickey  
        placeholder:font-bold placeholder:text-[rgba(54,83,107,0.3)]
        xl:m-0
        
        `, addStyles)}
      placeholder="Enter email address"
    />
  )
}

export default EmailInput;