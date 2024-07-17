import BigFeatures from './BigFeatures';
import SmallFeatures from './SmallFeatures';

const Features = () => {
  return (
    <section
      className="my-20 
        md:my-24
        xl:my-36
        2xl:max-w-[1280px] 2xl:mx-auto   
      "
    >
      <BigFeatures />
      <SmallFeatures />
    </section>
  )
}

export default Features
