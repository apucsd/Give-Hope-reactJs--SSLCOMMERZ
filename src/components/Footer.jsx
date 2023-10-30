/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm">
          <div className="mb-6 flex h-10 items-center space-x-2">
            <span className="flex gap-1 justify-center items-center font-bold uppercase">
              <svg
                fill="none"
                stroke="#FF6154"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="2em"
                width="2em"
              >
                <path d="M3 15l5.12-5.12A3 3 0 0110.24 9H13a2 2 0 110 4h-2.5m4-.68l4.17-4.89a1.88 1.88 0 012.92 2.36l-4.2 5.94A3 3 0 0114.96 17H9.83a2 2 0 00-1.42.59L7 19M2 14l6 6" />
              </svg>
              Give Hope
            </span>
          </div>
          <div className="text-gray-500 text-sm">
            Our mission is to provide urgent aid to individuals facing
            life-threatening situations. By contributing to our cause, you are
            directly influencing the outcome of someone's life
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Visit</div>
          <nav aria-label="Guides Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Sponsors
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Videos
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Gallery
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Help</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Demo
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Support Hub
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">
            Support Us on FaceBook
          </div>
          <div className="flex flex-col">
            <div className="mb-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="border border-[#FF6154] p-4 rounded-md text-center text-[#FF6154] uppercase">
                  Follow Us
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
          <p className="">© {new Date().getFullYear()} | All Rights Reserved</p>
          <p className="-order-1 sm:order-none">Apu Sutra Dhar</p>
          <p className="">
            <a className="" href="#">
              Privacy Policy
            </a>
            <span>|</span>
            <a className="" href="#">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
