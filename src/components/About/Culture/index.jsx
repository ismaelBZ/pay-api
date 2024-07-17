import Card from './../Card'

const Culture = () => {
  return (
    <section
      className="my-12
          md:mx-auto md:my-10 
      "
    >
      <ul
        className="mt-12
          md:m-auto md:mt-12 
          xl:mt-14 xl:mx-auto xl:pl-24 xl:max-w-[1110px] 
          2xl:py-8
        "
      >
        <div>
          <Card
            title="The Culture"
            content={`We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.`}
          />
        </div>
        <div
          className="mt-11
              md:mt-14
            "
        >
          <Card
            title="The People"
            content={`We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.`}
          />
        </div>
      </ul>
    </section>
  )
}
export default Culture
