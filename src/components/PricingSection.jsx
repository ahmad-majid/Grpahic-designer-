import React from 'react';
import '../styles/PricingSection.css';

const PricingSection = () => {
    return (
        <section className="pricing-section">
            <div className="pricing-intro">
                <h2>Photography Packages</h2>
                <p>Choose the perfect package for your moments</p>
            </div>
            <div className="pricing-grid">
                <div className="pricing-card">
                    <div className="pricing-title">Basic Package</div>
                    <div className="pricing-description">
                        <ul>
                            <li><strong>3 Days of Coverage</strong>: Capture every moment over three days.</li>
                            <li><strong>1 Photographer</strong>: Professional DSLR for stunning images.</li>
                            <li><strong>1 Videographer</strong>: High-quality DSLR video coverage.</li>
                            <li><strong>Unlimited Photos</strong>: No limit on the number of captured memories.</li>
                            <li><strong>Editing</strong>: Professional editing to enhance your photos.</li>
                            <li><strong>1 Indian Album</strong>: Beautifully crafted album to showcase your special moments.</li>
                        </ul>
                    </div>
                    <div className="pricing-price">Price: PKR 65,000</div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-title">Standard Package</div>
                    <div className="pricing-description">
                        <ul>
                            <li><strong>3 Days of Coverage</strong>: Extensive coverage over three days.</li>
                            <li><strong>2 Photographers</strong>: Portrait and group shots for a variety of looks.</li>
                            <li><strong>1 Videographer</strong>: Expert DSLR videography for your event.</li>
                            <li><strong>Unlimited Photos</strong>: Capture every moment without restrictions.</li>
                            <li><strong>USB with Images</strong>: Convenient USB drive containing all high-resolution images.</li>
                            <li><strong>2 Indian Albums</strong>: Elegant albums to preserve your memories.</li>
                            <li><strong>1 day of Drone Coverage</strong>: Aerial shots for a unique perspective.</li>
                        </ul>
                    </div>
                    <div className="pricing-price">Price: PKR 95,000</div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-title">Premium Package</div>
                    <div className="pricing-description">
                        <ul>
                            <li><strong>3 Days of Coverage</strong>: Detailed documentation of your event.</li>
                            <li><strong>2 Photographers</strong>: Includes portrait and group shots.</li>
                            <li><strong>2 Videographers</strong>: Advanced mirrorless cameras for high-quality video.</li>
                            <li><strong>Unlimited Photos</strong>: Capture every detail without limits.</li>
                            <li><strong>2 Indian Albums</strong>: Exquisite albums to showcase your best moments.</li>
                            <li><strong>USB with Images</strong>: All high-resolution images on a USB drive.</li>
                            <li><strong>2 Days of Drone Coverage</strong>: Aerial shots for a unique perspective.</li>
                        </ul>
                    </div>
                    <div className="pricing-price">Price: PKR 130,000</div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
