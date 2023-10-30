/* eslint-disable react/no-unescaped-entities */
import img1 from "../../assets/images/donation4.jpg";
import img2 from "../../assets/images/donation5.jpg";
import img3 from "../../assets/images/donation7.jpg";
import ImageMagnify from "../../components/ImageMagnify";
const Features = () => {
  return (
    <div className="overflow-hidden">
      <div className=" grid md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center w-full p-5 lg:p-16 xl:p-24">
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
        <div
          style={{ clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 92%)" }}
          data-aos="fade-left"
          className="w-full "
        >
          <ImageMagnify imageURL={img1}></ImageMagnify>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div
          style={{ clipPath: "polygon(0 0, 98% 0, 100% 94%, 0 100%)" }}
          data-aos="fade-right"
          className="w-full"
        >
          <ImageMagnify imageURL={img2}></ImageMagnify>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-5 lg:p-16 xl:p-24">
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
      <div className=" grid md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center w-full p-5 lg:p-16 xl:p-24">
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
        <div
          style={{ clipPath: " polygon(2% 7%, 100% 11%, 100% 88%, 0 84%)" }}
          data-aos="fade-left"
        >
          <ImageMagnify imageURL={img3}></ImageMagnify>
        </div>
      </div>
    </div>
  );
};

export default Features;
