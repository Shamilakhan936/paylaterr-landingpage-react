import './FinalCTA.scss';
import talkToIcon from '../../assets/images/talk-to.png';

const FinalCTA = () => {
  return (
    <section>
      <div className="final-cta">
        <h2>Ready to Grow Your Business?</h2>
        <p>Join 30,000+ Billers who have increased their sales with PayLaterr. Apply now and go live in 24 hours.</p>
        <div className="cta-buttons">
          <a href="#apply" className="cta-primary">
            Apply Now — It's Free <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#sales" className="cta-secondary">
            <img src={talkToIcon} alt="Talk to Sales" /> Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

