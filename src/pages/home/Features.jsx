/* eslint-disable react/no-unescaped-entities */
const Features = () => {
  return (
    <div>
      <div className="flex flex-col w-full  md:flex-row ">
        <div className="flex flex-col items-center justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
          <h2 className="max-w-lg font-semibold uppercase text-4xl  leading-tight  md:text-3xl lg:text-4xl">
            Their lives depend on your donation
          </h2>
          <p className="max-w-lg mt-5  text-gray-500 ">
            Our mission is to provide urgent aid to individuals facing
            life-threatening situations. By contributing to our cause, you are
            directly influencing the outcome of someone's life, offering them
            hope, support, and a chance at a brighter tomorrow. donation.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/images/donation4.jpg"
            className="inset-0 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col  w-full  md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/images/donation5.jpg"
            className="inset-0 object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
          <h2 className="max-w-lg font-semibold uppercase text-4xl  leading-tight  md:text-3xl lg:text-4xl">
            They need us to survive
          </h2>
          <p className="max-w-lg mt-5  text-gray-500 ">
            Our mission is to provide urgent aid to individuals facing
            life-threatening situations. By contributing to our cause, you are
            directly influencing the outcome of someone's life, offering them
            hope, support, and a chance at a brighter tomorrow. donation.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full  md:flex-row ">
        <div className="flex flex-col items-center justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
          <h2 className="max-w-lg font-semibold uppercase text-4xl  leading-tight  md:text-3xl lg:text-4xl">
            Give Them Your Hand
          </h2>
          <p className="max-w-lg mt-5  text-gray-500 ">
            Our mission is to provide urgent aid to individuals facing
            life-threatening situations. By contributing to our cause, you are
            directly influencing the outcome of someone's life, offering them
            hope, support, and a chance at a brighter tomorrow. donation.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/images/donation6.jpg"
            className="inset-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
