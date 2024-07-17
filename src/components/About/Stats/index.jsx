const Stats = () => {
  return (
    <section
      className="mt-12
    "
    >
      <hr className="m-auto opacity-20 md:hidden" />
      <ul
        className="py-4 flex flex-col gap-10
          md:m-auto md:flex-row md:justify-center md:gap-2
          xl:max-w-[1110px]
          2xl:max-w-[1280px] 2xl:mt-20
        "
      >
        <div
          className="md:py-4 md:w-[33%] md:border-y-[1px] md:border-[#aaa] md:grow
          "
        >
          <p
            className="text-lg text-center  text-blue opacity-70
              md:text-left
            "
          >
            Team Members
          </p>
          <p
            className="mt-2 text-6xl text-center font-serif text-pink
              md:text-left
            "
          >
            300+
          </p>
        </div>
        <div
          className="md:py-4 md:w-[33%] md:border-y-[1px] md:border-[#aaa] md:grow
          "
        >
          <p
            className="text-lg text-center  text-blue opacity-70
              md:text-left
            "
          >
            Offices in the US
          </p>
          <p
            className="mt-2 text-6xl text-center font-serif text-pink
              md:text-left
            "
          >
            3
          </p>
        </div>
        <div
          className="md:py-4 md:w-[33%] md:border-y-[1px] md:border-[#aaa] md:grow
          
          "
        >
          <p
            className="text-lg text-center  text-blue opacity-70
              md:text-left
            "
          >
            Transactions analyzed
          </p>
          <p
            className="mt-2 text-6xl text-center font-serif text-pink
              md:text-left
            "
          >
            10M+
          </p>
        </div>
      </ul>
      <hr className="m-auto mt-2 opacity-20 md:hidden" />
    </section>
  )
}
export default Stats
