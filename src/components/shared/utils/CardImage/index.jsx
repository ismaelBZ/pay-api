import Card from './../Card'
import classNames from 'classnames'

const CardImage = ({
  imgRef,
  title,
  content,
  contentStyle,
  titleStyle,
  imgStyles,
}) => {
  return (
    <>
      <img src={imgRef} className={classNames('m-auto', imgStyles)} />
      <Card
        title={title}
        titleStyle={titleStyle}
        content={content}
        contentStyle={contentStyle}
      />
    </>
  )
}

export default CardImage
