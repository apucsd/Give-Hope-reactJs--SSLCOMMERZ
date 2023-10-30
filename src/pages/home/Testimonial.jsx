import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "Keep on jumping to get the most of the jump rope exercise. It will help you to increase your bone density as well.",
      author: "John Doe",
      position: "Senior Vice President",
      image:
        "https://i.postimg.cc/jqBdNPpg/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg",
    },
    {
      id: 2,
      text: "I am grateful for the opportunity to contribute to such a noble cause. Every little bit helps in making the world a better place.",
      author: "Jane Smith",
      position: "Marketing Manager",
      image:
        "https://i.postimg.cc/jqBdNPpg/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg",
    },
    {
      id: 3,
      text: "Donating not only benefits others but also brings immense joy and fulfillment. Let's continue to support those in need.",
      author: "Michael Johnson",
      position: "Human Resources Director",
      image:
        "https://i.postimg.cc/jqBdNPpg/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg",
    },
    {
      id: 4,
      text: "The impact of our collective efforts is profound. Together, we can create a positive change and improve the lives of many.",
      author: "Emily Davis",
      position: "Finance Analyst",
      image:
        "https://i.postimg.cc/jqBdNPpg/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg",
    },
    {
      id: 5,
      text: "I believe in the power of giving. Let's join hands and make a difference in the lives of those who need it the most.",
      author: "Christopher Lee",
      position: "Community Outreach Coordinator",
      image:
        "https://i.postimg.cc/jqBdNPpg/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg",
    },
  ];
  return (
    <div className=" md:m-20">
      <div className="pl-4 max-w-min mx-auto md:mb-6 border-l-4 border-blue-500 ">
        <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
          What People Think Us?
        </span>
        <h2 className="text-4xl font-bold text-[#FF6154] md:my-6 uppercase">
          Testimonials
        </h2>
      </div>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <section className="flex items-center min-h-[460px] ">
              <div className="p-2 mx-auto ">
                <div>
                  <div
                    className="relative px-4   text-center  rounded shadow p-10 "
                    href="#"
                  >
                    <div className="z-20 max-w-6xl p-8">
                      <div className="flex gap-x-1"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute w-20 h-20 top-4 left-4 opacity-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                      <p className="mb-4 text-base leading-7 text-gray-400">
                        {testimonial.text}
                      </p>
                      <h2 className="text-lg font-bold leading-9 text-black dark:text-white">
                        {testimonial.author}
                      </h2>
                      <span className="block text-xs font-semibold text-blue-500 uppercase ">
                        {testimonial.position}
                      </span>
                      <div className="absolute inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white translate-x-1/2 bg-blue-500 rounded right-1/2 -bottom-20">
                        <img
                          className="object-cover w-full h-full transition-all hover:scale-110"
                          src={testimonial.image}
                          alt=""
                        />
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="absolute w-20 h-20 rotate-180 bottom-4 right-4 opacity-10"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Testimonial;
