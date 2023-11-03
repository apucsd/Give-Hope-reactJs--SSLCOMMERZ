import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const DonatePayment = () => {
  const [selectedPrice, setSelectedPrice] = useState(40);

  const handleButtonClick = (price) => {
    setSelectedPrice(price);
  };

  const handleDonate = () => {
    fetch("https://sslcommerz-practice-demo.vercel.app/donate", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ selectedPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data.url);
      });
  };
  return (
    <div
      id="donate"
      className="md:flex md:h-screen p-10  items-center bg-blue-50 text-gray-700"
    >
      <div className="md:w-1/2 mx-auto my-4">
        <SectionTitle
          subtitle={"Testing SSLCommerz "}
          title={"SSLCommerz Payment"}
        ></SectionTitle>
      </div>

      <div className="mx-auto flex max-w-lg flex-col rounded-lg bg-white px-4 pb-4 shadow-lg sm:rounded-3xl sm:px-14 sm:pb-10">
        <h1 className="mt-4 text-center text-lg font-medium">
          Give Hope by Donating Today
        </h1>
        <hr className="mt-4" />

        <span className="mt-6 text-center font-serif text-3xl font-bold text-blue-900 sm:mt-12 sm:text-5xl">
          ${selectedPrice}
          <span className="text-sm">/BDT</span>{" "}
        </span>

        <span className="mt-4 font-medium sm:text-lg">Select Amount</span>
        <div className="flex flex-wrap gap-2">
          <button
            className={`${
              selectedPrice === 40
                ? "bg-blue-900 text-white"
                : "bg-blue-100 text-blue-900"
            } active:scale-95 rounded-lg px-4 py-2 font-medium`}
            onClick={() => handleButtonClick(40)}
          >
            40
          </button>
          <button
            className={`${
              selectedPrice === 200
                ? "bg-blue-900 text-white"
                : "bg-blue-100 text-blue-900"
            } active:scale-95 rounded-lg px-4 py-2 font-medium`}
            onClick={() => handleButtonClick(200)}
          >
            200
          </button>
          <button
            className={`${
              selectedPrice === 400
                ? "bg-blue-900 text-white"
                : "bg-blue-100 text-blue-900"
            } active:scale-95 rounded-lg px-4 py-2 font-medium`}
            onClick={() => handleButtonClick(400)}
          >
            400
          </button>
          <button
            className={`${
              selectedPrice === 800
                ? "bg-blue-900 text-white"
                : "bg-blue-100 text-blue-900"
            } active:scale-95 rounded-lg px-4 py-2 font-medium`}
            onClick={() => handleButtonClick(800)}
          >
            800
          </button>
          <button
            className={`${
              selectedPrice === 1200
                ? "bg-blue-900 text-white"
                : "bg-blue-100 text-blue-900"
            } active:scale-95 rounded-lg px-4 py-2 font-medium`}
            onClick={() => handleButtonClick(1200)}
          >
            1200
          </button>
        </div>

        <hr className="mt-8" />

        <button
          onClick={handleDonate}
          className="mx-auto mt-4 block h-12 rounded-full bg-blue-600 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 sm:mt-10 focus:ring hover:bg-blue-500"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonatePayment;
