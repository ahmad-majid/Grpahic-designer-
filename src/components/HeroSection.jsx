import  { useEffect } from 'react';
import '../styles/HeroSection.css';
import heroimg from "../assets/hero.png";

const HeroSection = () => {
  // Add scroll effect to move the image
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const imgElement = document.querySelector('.hero-img');
      imgElement.style.transform = `translateY(${scrollTop * 0.5}px)`; // Adjust the parallax effect speed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <img src={heroimg} alt="Hero Background" className="hero-img" />
      <div className="hero-content">
  <h1 className="hero-heading">HAMID MALIK</h1>
<h2 className="hero-subtitle">Designing Creativity with Purpose</h2>
<p className="hero-paragraph">
 I turn ideas into visuals that inspire. From logos and branding to digital graphics and 
  illustrations, every design is crafted to be modern, meaningful, and impactful. My goal is simple — 
  to create designs that tell your story and make your brand unforgettable.
</p>

        <a
href="https://wa.me/923143427293?text=Hi%20HAMID%20MALIK,%20I%20would%20like%20to%20inquire%20about%20your%20services!"
target="_blank"

          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Connect on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
