import classNames from 'classnames';

const Card = ({title, content, titleStyle, contentStyle}) => {
  return (
    <>
      <h2 className={classNames('text-blue', titleStyle)}>{title}</h2>
      <p className={classNames('text-light-blue', contentStyle)}>{content}</p>
    </>
  )
}

export default Card;