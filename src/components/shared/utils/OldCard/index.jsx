import classNames from 'classnames'

// eslint-disable-next-line react/prop-types
const Card = ({ title, content, contentStyle, titleStyle, position }) => {
  return (
    <div className={classNames(/* "md:flex md:flex-row", */position)}>
      <h2
        className={classNames(`text-[23px] text-center text-blue
          md:grow md:text-[32px] md:text-left md:mt-4`, titleStyle)}
      >
        {title}
      </h2>
      <p
        className={classNames(`font-medium mt-3 text-[15px] text-center
            md:w-[65%] md:text-justify md:mr-3 leading-7 text-light-blue`,
          contentStyle,
        )}
      >
        {content}
      </p>
    </div>
  )
}

export default Card
