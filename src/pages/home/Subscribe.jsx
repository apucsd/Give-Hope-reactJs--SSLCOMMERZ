import img from "../../assets/images/donation1.jpg";
const Subscribe = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="relative md:flex justify-center gap-6 items-center w-full py-4 m-auto bg-white shadow-2xl">
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="md:w-1/2 md:ml-4 bg-cover"
        >
          <img src={img} className="w-full" alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between items-center px-4 space-y-16">
          <div>
            <h1 className="mb-2 text-4xl uppercase font-semibold leading-tight">
              Subscribe to Stay Updated
            </h1>
            <p className="mb-4 text-base leading-7 text-gray-400">
              Join our newsletter to receive regular updates about our projects,
              events, and how your contributions are making a difference.
              Together, we can create a brighter future for those in need.
            </p>
          </div>
          <div className="w-full m-10 mx-10">
            <form>
              <input
                className="w-full px-5 py-3 border rounded focus:border-blue-500 focus:outline-none"
                type="email"
                placeholder="Email address"
              />
              <button className="primaryBtn w-full my-4" type="submit">
                Subscribe
              </button>
            </form>
            <ul className="flex justify-center mt-4 space-x-3 text-xs text-gray-700">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 mr-1 text-green-500 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>No spam</p>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 mr-1 text-green-500 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>No hassle</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
