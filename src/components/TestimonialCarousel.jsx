import { useState, useEffect } from 'react';
import '../styles/TestimonialCarousel.css';

const testimonials = [
    {
        quote: "Event bohot acha tha, MK Studio ke photographers bohot cooperative aur professional hain.",
        name: "Ayesha Khan",
    },
    {
        quote: "اسٹوڈیو کے ساتھ تجربہ بہت اچھا رہا، ان کے فوٹوگرافرز نے ہمارے خاندان کی تصاویر بہت خوبصورتی سے لیں۔",
        name: "حسن رضا",
    },
    {
        quote: "MK Studio ki team ne hamare event ko yaadgar bana diya, photographers bohot friendly hain.",
        name: "Ahmed Sheikh",
    },
    {
        quote: "MK Studio ne hamare fashion shoot ko next level par le jaa diya, unka eye for detail superb hai.",
        name: "Sana Iqbal",
    },
    {
        quote: "MK Studio ke saath hamare birthday shoot ka tajurba shaandaar raha, har moment ko perfectly capture kiya gaya.",
        name: "Sadia Javed",
    },
    {
        quote: "Hamare wedding experience ke liye MK Studio bohot amazing raha, photographers ne hamen family ki tarah treat kiya.",
        name: "Sarah and Ahmed Khan",
    }
];


const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

   
    const getCurrentTestimonials = () => {
        let start = currentIndex;
        let end = start + 3;
        if (end > testimonials.length) {
            return [...testimonials.slice(start), ...testimonials.slice(0, end - testimonials.length)];
        }
        return testimonials.slice(start, end);
    };

    return (
        <section className="testimonial-carousel">
            <div className="testimonial-heading">
                <h2>What Our Clients Say About MK Studio</h2>
                <p>Capturing the best moments of your life is what we do best. Here's what our happy clients have to say about us:</p>
            </div>
            <div className="testimonial-wrapper">
                {getCurrentTestimonials().map((testimonial, index) => (
                    <div key={index} className="testimonial-card active">
                        <div className="testimonial-content">
                            <blockquote className="testimonial-quote">
                                <p>{testimonial.quote}</p>
                            </blockquote>
                            <div className="testimonial-author">
                               
                                <div className="testimonial-author-info">
                                    <p className="author-name">{testimonial.name}</p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialCarousel;
