import classNames from 'classnames'

// eslint-disable-next-line react/prop-types
const DefaultButton = ({ children, addStyles }) => {
  return (
    <button
      type="submit"
      className={classNames(`w-full m-auto mt-4
          p-3 rounded-full text-white bg-pink block
        active:bg-light-pink
          cursor-mickey
        `,
        addStyles
      )}
    >
      <strong>{children}</strong>
    </button>
  )
}

export default DefaultButton
