import HeroSection from "./home/HeroSection";
import OurDispensersCarouselSection from "./home/OurDispensersCarouselSection";
import OurPartnersSection from "./home/OurPartnersSection";
import SmartlinesInActionSection from "./home/SmartlinesInActionSection";
import WhatWeOfferSection from "./home/WhatWeOfferSection";
import WhoWeAreSection from "./home/WhoWeAreSection";

function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <WhatWeOfferSection />
        <SmartlinesInActionSection />
        <OurDispensersCarouselSection />
        <WhoWeAreSection />
        <OurPartnersSection />
      </div>
    </>
  );
}

export default Home;
