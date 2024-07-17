import PartnerList from "./../../shared/PartnersList";

const Partners = () => {
  return (
    <section className='pb-6'>
      <h2
        className="mt-20 text-2xl text-center text-light-blue 
          md:mx-auto md:mt-16 md:w-[65%]
          xl:mx-0 xl:text-left xl:w-[80%]
        "
      >
        <span className='block md:inline'>Join <span className='md:hidden xl:inline'>the</span> thousands of </span>innovators already building with us
      </h2>

      <div className="mt-8 md:mt-11">
        <PartnerList dark={true} />
      </div>
    </section>
  )
}
export default Partners