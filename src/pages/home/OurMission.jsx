import SectionTitle from "../../components/SectionTitle";

const OurMission = () => {
  return (
    <section data-aos="fade-up" className="bg-[#FFECE5] text-white p-8">
      <div className="container mx-auto text-center px-4">
        <div className="md:w-1/2 mx-auto">
          <SectionTitle
            title={"Our Mission"}
            subtitle={"What's Our Dream?"}
          ></SectionTitle>
        </div>
        <p className="text-gray-600 md:mx-24 my-6">
          Provide support to underprivileged section of the society specially
          extreme poor, homeless and orphan children through quality education,
          nourishment & shelter to make them resources for the nation.
        </p>
        <div className="flex flex-wrap -mx-4">
          <div
            data-aos="flip-up"
            data-aos-duration="900"
            className="w-full  md:w-1/3 px-4 mb-8 "
          >
            <div className="bg-[#FAA51A] min-h-[300px] hover:bg-[#00AB4E] transition duration-150 p-8 shadow-md text-center rounded-md">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="4em"
                width="4em"
                className="mx-auto my-4"
              >
                <path d="M0 192c0-35.3 28.7-64 64-64h1.6C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64h1.6c35.3 0 64 28.7 64 64 0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256h457.2c15.1 0 27.4 12.3 27.4 27.4 0 70.5-44.4 130.7-106.7 154.1l-1.8 14.5c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" />
              </svg>
              <h3 className="text-2xl font-bold uppercase mb-2">Food</h3>
              <p>
                We want to inspire a nation with food. Best relation can be
                created through sharing food.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="900"
            className="w-full  md:w-1/3 px-4 mb-8"
          >
            <div className="bg-[#FAA51A] min-h-[300px] hover:bg-[#00AB4E] transition duration-150 p-8 shadow-md text-center rounded-md">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                height="4em"
                width="4em"
                className="mx-auto my-4"
              >
                <path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z" />
              </svg>
              <h3 className="text-2xl font-bold uppercase mb-2">Education</h3>
              <p>
                To become a national treasure by offering free education to
                children and orphans.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="900"
            className="w-full  md:w-1/3 px-4 mb-8"
          >
            <div className="bg-[#FAA51A] min-h-[300px] hover:bg-[#00AB4E] transition duration-150 p-8 shadow-md text-center rounded-md">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="4em"
                width="4em"
                className="mx-auto my-4"
              >
                <path d="M14.84 16.26C17.86 16.83 20 18.29 20 20v2H4v-2c0-1.71 2.14-3.17 5.16-3.74L12 21l2.84-4.74M8 8h8v2a4 4 0 01-4 4 4 4 0 01-4-4V8m0-1l.41-4.1a1 1 0 011-.9h5.19c.51 0 .94.39.99.9L16 7H8m4-4h-1v1h-1v1h1v1h1V5h1V4h-1V3z" />
              </svg>
              <h3 className="text-2xl font-bold uppercase mb-2">Treatment</h3>
              <p>
                We want to inspire a nation with food. Best relation can be
                created through sharing food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
