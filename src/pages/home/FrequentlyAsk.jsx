import ImageMagnify from "../../components/ImageMagnify";
import SectionTitle from "../../components/SectionTitle";
import imageURL from "../../assets/images/donation9.jpg";
/* eslint-disable react/no-unescaped-entities */
const FrequentlyAsk = () => {
  return (
    <div className="bg-[#FFECE5] p-10 grid md:grid-cols-2 justify-center items-center">
      <div
        data-aos="fade-right"
        data-aos-duration="900"
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 87%, 0 98%)" }}
      >
        <ImageMagnify imageURL={imageURL}></ImageMagnify>
      </div>
      <div>
        <div className="md:w-3/4 mx-auto ">
          <div className="text-center">
            <SectionTitle
              subtitle={"Have a Question?"}
              title="Frequently Ask Questions"
            ></SectionTitle>
          </div>
          <details
            className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                How can I make a donation to your organization?
              </h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              You can make a donation by clicking on the 'Donate Now' button on
              our website. Choose the amount you wish to donate and follow the
              instructions to complete the process securely.
            </p>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                Is my donation tax-deductible?
              </h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              Yes, your donation is tax-deductible. We will provide you with a
              receipt for your donation, which you can use for tax purposes.
            </p>
          </details>

          <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                Can I donate in honor or in memory of someone?
              </h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              Yes, you can donate in honor or in memory of someone. During the
              donation process, you will have the option to specify if your
              donation is a tribute and provide the necessary details.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsk;
