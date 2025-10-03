import { useEffect, useRef } from 'react';
import '../styles/CapturingMoments.css';
import capturing from '../assets/capturing.jpeg';
import { Link } from 'react-router-dom';

const CapturingMoments = () => {
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const leftPosition = leftSideRef.current.getBoundingClientRect().top;
      const rightPosition = rightSideRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (leftPosition < windowHeight - 100) {
        leftSideRef.current.classList.add('visible');
      }
      if (rightPosition < windowHeight - 100) {
        rightSideRef.current.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="capturing-moments-section">
      <div ref={leftSideRef} className="capturing-moments-left">
        <p className="capturing-moments-text">
          <span className="highlight">Creative Designs</span>
        </p>
        <h2 className="headingh2">Your vision, crafted with design</h2>
        <p>
          At <strong>HAMID MALIK</strong>, I transform ideas into visuals that inspire and connect. 
          Specializing in branding, digital art, and marketing graphics, my work blends creativity 
          with strategy to deliver designs that make a lasting impact. From logos and brand identities 
          to social media visuals and custom illustrations, every project is tailored to bring your 
          story to life with elegance and purpose.
        </p>
        <Link to="/contact" className="contact-link">Let’s Collaborate</Link>
      </div>
      <div ref={rightSideRef} className="capturing-moments-right">
        <img
          src={capturing}
          alt="creative designs"
          className="capturing-moments-image"
        />
      </div>
    </section>
  );
};

export default CapturingMoments;
