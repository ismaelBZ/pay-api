import Check from './../../../assets/imgs/pricing/Checked.svg'

const Feature = ({ name, checked = false }) => {
  return (
    <div className="w-[145px]">
      {checked ? (
        <>
          <img src={Check} className="inline-block w-[16px] mr-5" />
          <span className='text-blue font-semibold'>{name}</span>
        </>
      ) : (
        <>
          <div className="inline-block w-[16px] mr-5"></div>
          <span className="text-blue font-semibold opacity-50">{name}</span>
        </>
      )}
    </div>
  )
}

export default Feature
