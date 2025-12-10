import './Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Since adding PayLaterr, our average order value increased by 52%. It's been a game-changer for our business.",
      author: 'Mohzer Ahez',
      initial: 'M'
    },
    {
      text: 'Integration took less than an hour. The support team was incredibly helpful throughout the process.',
      author: 'Douglaz Rogurize',
      initial: 'D'
    },
    {
      text: 'Our customers love the flexibility. Cart abandonment dropped by 35% in the first month.',
      author: 'Elcez Abrahm',
      initial: 'E'
    }
  ];

  return (
    <section>
      <h2 className="section-title">Trusted by Growing Businesses</h2>
      <p className="section-subtitle">See what our merchant partners have to say</p>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.initial}</div>
              <div className="author-name">{testimonial.author}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

