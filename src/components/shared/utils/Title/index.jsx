import classNames from "classnames"

const Title = ({children, addStyles}) => {
  return (
    <div className='xl:w-full xl:max-w-[1110px] xl:m-auto 2xl:max-w-[1280px]'>
      <h2 className={classNames(`
          mt-5 text-[32px] text-center text-blue leading-[1.1]
          md:mt-12 md:mx-auto md:w-[75%] md:text-5xl md:leading-[1.15]
          xl:w-[65%] xl:mx-0 xl:text-[55px] xl:text-left xl:leading-[1]
        `, addStyles)} >
        {children}
      </h2>
    </div>
  )
}
export default Title