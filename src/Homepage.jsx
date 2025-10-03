
import HeroSection from './components/HeroSection';
import CapturingMoments from './components/CapturingMoments';
import ServicesSection from './components/ServicesSection';
// import TestimonialCarousel from './components/TestimonialCarousel';

import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CapturingMoments />
      <ServicesSection />
      {/* <TestimonialCarousel /> */}
    
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
