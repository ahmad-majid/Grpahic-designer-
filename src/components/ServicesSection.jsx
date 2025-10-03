// src/components/ServicesSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import services from '../data/servicesData'; 
import '../styles/ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="services-intro">Our services</p>
        <h2 className='service-heading'>Diverse and tailored for you</h2>
      </div>
      <ul className="services-list">
        {services.map((service) => (
          <li key={service.id} className="service-card">
            <div className="service-card-image" style={{ backgroundImage: `url(${service.imageUrl})` }}>
              <img src={service.imageUrl} alt={service.title} loading="lazy" />
            </div>
            <div className="service-card-content">
              <h3 className="service-card-title">{service.title}</h3>
              <div className="service-card-description">{service.description}</div>
              <Link to={`/service/${service.id}`} className="read-more-button">Read More</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
