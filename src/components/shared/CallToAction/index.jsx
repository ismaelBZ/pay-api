import EmailInput from './../utils/Inputs/EmailInput'
import Button from './../utils/Buttons/Default'
import classNames from 'classnames'

const Cta = ({ title, titleStyle, formStyles, emaiStyle, buttonStyle }) => {
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
        className={classNames(
          `mt-8
          md:relative md:w-[65%] m-auto md:mt-12
          xl:m-0 xl:w-[80%] xl:justify-self-end`,
          formStyles,
        )}
      >
        <EmailInput addStyles={emaiStyle} />
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
