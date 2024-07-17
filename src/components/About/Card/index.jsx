import AtomicCard from './../../shared/utils/Card'

const Card = ({ title, content }) => {
  return (
    <div
      className="md:flex flex-row justify-between
        xl:justify-start xl:gap-28
      "
    >
      <AtomicCard
        title={title}
        titleStyle="text-[23px] text-center
          md:mt-4 md:text-[32px]
          xl:w-[190px] xl:text-left"
        content={content}
        contentStyle="font-medium mt-3 text-[15px] text-center
          md:w-[65%] md:text-justify md:mr-3 leading-7
          xl:w-[63%] xl:text-left
        "
      />
    </div>
  )
}

export default Card
