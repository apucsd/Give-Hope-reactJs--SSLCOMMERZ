/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
  return (
    <section className="flex items-center  ">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="relative lg:max-w-md">
              <img
                src="/src/assets/images/donation10.jpg"
                alt="aboutimage"
                className="relative z-10 object-cover w-full rounded h-96"
              />
              <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-[#ff6154] lg:-mb-8 lg:-mr-11 sm:p-8   ">
                <p className=" font-semibold md:w-72">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ff6154"
                    className="absolute top-0 left-0 w-16 h-16 text-white  opacity-50"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>{" "}
                  Successfully Providing from 25 years
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
              <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                Who we are?
              </span>
              <h2 className="text-4xl font-bold text-[#FF6154] my-6 uppercase">
                About Us
              </h2>
            </div>
            <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
              Our mission is to provide urgent aid to individuals facing
              life-threatening situations. By contributing to our cause, you are
              directly influencing the outcome of someone's life, offering them
              hope, support, and a chance at a brighter tomorrow. donation.
            </p>
            <a href="#" className="primaryBtn">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
