import React, { useState } from 'react';
import '../styles/ContactForm.css';
import Footer from './Footer';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <>
        <section class="contact-form-section">
        <h2 class="contact-form-heading">Contact Us For Booking</h2>
        <p class="contact-form-subheading">We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
        
            <form action="https://formspree.io/f/mkgqbkjr" method="POST" class="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </section>
        {/* <Footer/> */}
        </>
    );
};

export default ContactForm;
