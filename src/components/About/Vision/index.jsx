import Card from './../Card'

const Vision = () => {
  return (
    <section>
      <ul
          className="mt-12
          md:m-auto md:mt-12 
          xl:mt-14 xl:mx-auto xl:pl-24 xl:max-w-[1110px]
          2xl:py-8
        "
        >
          <div>
            <Card
              title="Our Vision"
              content="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "
            />
          </div>
          <div className="mt-14">
            <Card
              title="Our Business"
              content="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. "
            />
          </div>
      </ul>
    </section>
  )
}
export default Vision