import { Link } from "react-router-dom";

const DonateFail = () => {
  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <div className="bg-white p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-red-600 w-16 h-16 mx-auto my-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,21.4a1.3,1.3,0,1,1,1.3-1.3A1.3,1.3,0,0,1,12,21.4Zm1.3-8.6a1.3,1.3,0,0,1-2.6,0V8.6a1.3,1.3,0,0,1,2.6,0Z"
            ></path>
          </svg>

          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Failed!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for choosing your secure online payment.
            </p>

            <p> Have a great day! </p>
            <div className="py-10 text-center">
              <Link
                to={"/"}
                className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                GO Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateFail;
