import FormCta from './FormCTA'
import Phone from './Phone'

const Cta = () => {
  return (
    <section
      className="pb-20
        md:pb-24
        xl:mt-8 xl:ml-20 xl:flex xl:flex-row-reverse
        2xl:max-w-[1280px] 2xl:mx-auto
      "
        
    > 
      <Phone />
      <div
        className="mt-5 
          md:mt-12
          xl:w-[50%]
        "
      >
        <FormCta />
      </div>
    </section>
  )
}

export default Cta
