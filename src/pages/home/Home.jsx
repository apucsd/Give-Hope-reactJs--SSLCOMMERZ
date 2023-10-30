import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Features from "./Features";
import FrequentlyAsk from "./FrequentlyAsk";
import OurMission from "./OurMission";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <OurMission></OurMission>
      <AboutUs></AboutUs>
      <Testimonial></Testimonial>
      <FrequentlyAsk></FrequentlyAsk>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
