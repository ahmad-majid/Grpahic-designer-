import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { services } from '../data/serviceDetailsdata'; 
import '../styles/ServiceDetail.css';
import Footer from './Footer'; 

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(service => service.id === id);

  if (!service) return <p>Service not found</p>;

  const itemRefs = useRef([]);

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    const handleScroll = () => {
      itemRefs.current.forEach((ref, index) => {
        // Apply animation only if it's not the first item
        if (index > 0) {
          if (ref.getBoundingClientRect().top < window.innerHeight - 100) {
            ref.classList.add('visible');
          } else {
            ref.classList.remove('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="service-detail">
        <h2>{service.title}</h2>

        {service.images.map((image, index) => (
          <div
            key={index}
            ref={(el) => itemRefs.current[index] = el}
            className={`service-detail-item ${index % 2 === 0 ? 'left-image' : 'right-image'} ${index > 0 ? 'animate' : ''}`}
          >
            <div className="service-detail-image">
              <img src={image} alt={`${service.title} ${index + 1}`} loading="lazy" />
            </div>
            <div className="service-detail-content">
              <p>{service.description[index]}</p>
              <div className="schedule-button-container">
                <Link to="/contact" className="schedule-button">Schedule Appointment</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
