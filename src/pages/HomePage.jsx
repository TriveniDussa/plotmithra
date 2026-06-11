import Navbar from "../components/Common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import SearchBar from "../components/Home/SearchBar";
import PropertyTypes from "../components/Home/PropertyTypes";
import FeaturedProperties from "../components/Home/FeaturedProperties";
import StatsSection from "../components/Home/StatsSection";
import Testimonials from "../components/Home/Testimonials";
import Footer from "../components/Common/Footer";
import WhatsAppButton from "../components/Common/WhatsAppButton";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <PropertyTypes />
      <FeaturedProperties />
      <StatsSection />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default HomePage;