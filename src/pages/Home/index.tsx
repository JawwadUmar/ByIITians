import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import TestimonialContent from "../../content/TestimonialContent.json"
import OurPricing from "../../content/OurPrices.json"
// import PricingCard from "../../components/Pricing/PricingCard";
// import PricingCardContainer from "../../components/Pricing/PricingCard";
// import PricingCards from "../../components/Pricing/PricingCards";

const PricingCards = lazy(() => import("../../components/Pricing/PricingCards"));
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Testimonial = lazy(() => import("../../components/Testimonials"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
       <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="about"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="boost"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
     
      <Testimonial
      title={TestimonialContent.title}
      />

      <PricingCards
      title={OurPricing.title}
      />

      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="demoform"
      />
    </Container>
  );
};

export default Home;
