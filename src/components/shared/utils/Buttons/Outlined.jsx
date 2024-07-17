import classNames from 'classnames'

const Outlined = ({addStyles, text='Button'}) => {
  return (
    <>
      <button
          className={classNames(`block m-auto p-3 px-7 text-blue font-bold border-[1px] rounded-full border-blue
          `, addStyles)}
        >
          {text}
        </button>
    </>
  )
}
export default Outlined