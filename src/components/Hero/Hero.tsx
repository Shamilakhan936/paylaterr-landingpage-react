import './Hero.scss';
import heroIcon from '../../assets/images/heroIcon.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="callout-banner">
        <img src={heroIcon} alt="Join PayLaterr" />
        <span>Join 30,000+ merchants and billers growing with PayLaterr</span>
      </div>
      <h1>Grow Your Sales with <span className="highlight">Buy Now, PayLaterr</span></h1>
      <p>Offer your customers flexible payment options at checkout and inside your portal. Increase conversions, boost order values, and get paid upfront—all with zero risk.</p>
    </section>
  );
};

export default Hero;

