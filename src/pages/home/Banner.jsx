const Banner = () => {
  return (
    <div className="flex items-center bannerBg">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className=" leading-relaxed text-white font-bold text-6xl">
            Let’s Help Those Who Are More In Need
          </p>
          <p className=" leading-relaxed text-white  text-sm">
            Be a part of the breakthrough and make someone’s dream come true.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="primaryBtn">Donate Now</button>
          <button className="whitespace-nowrap flex gap-2 items-center rounded-xl border hover:border-transparent px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-[#FF6154]">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
              <path d="M6.271 5.055a.5.5 0 01.52.038l3.5 2.5a.5.5 0 010 .814l-3.5 2.5A.5.5 0 016 10.5v-5a.5.5 0 01.271-.445z" />
            </svg>{" "}
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
