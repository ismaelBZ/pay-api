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
  response,
  setResponse,
}) => {

  const handleSubmit = async e => {
    e.preventDefault()
    const email = document.querySelector('.rtsi').value;
    try {
      const response = await axios.post('/request-demo', {email});
      console.log(response);
    } catch (error) {
      const {message, response: {status}} = error
      setResponse({
        responseStatus: status,
        message: message,
      });
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
        <EmailInput addStyles={[emailStyle, 'rtsi']} />
        <Button
          addStyles={`md:absolute md:w-[178px] md:p-3 md:-top-[16px] md:right-0 ${{
            buttonStyle,
          }}`}
        >
          Schedule a Demo
        </Button>
      </form>
    </div>
  )
}

export default Cta
