import './Features.scss';
import bostIcon from '../../assets/images/bostIcon.png';
import cartIcons from '../../assets/images/cartIcons.png';
import paidIcon from '../../assets/images/paidIcon.png';
import securityIcon from '../../assets/images/security.png';
import wordicon from '../../assets/images/wordicon.png';
import supportIcon from '../../assets/images/support.png';

const Features = () => {
  const features = [
    {
      icon: bostIcon,
      title: 'Boost Your Sales',
      description: 'Merchants see up to 44% higher conversion rates when offering PayLaterr at checkout.'
    },
    {
      icon: cartIcons,
      title: 'Increase Order Value',
      description: 'Customers spend 68% more on average when they can split payments interest-free.'
    },
    {
      icon: paidIcon,
      title: 'Get Paid Upfront',
      description: 'You receive the full payment immediately. We handle the installment collection.'
    },
    {
      icon: securityIcon,
      title: 'Zero Risk',
      description: 'No chargebacks, no fraud risk. We take on all the payment risk for you.'
    },
    {
      icon: wordicon,
      title: 'Reach New Customers',
      description: 'Access our 200,000+ active user base actively looking for PayLaterr billers and merchants'
    },
    {
      icon: supportIcon,
      title: 'Dedicated Support',
      description: '24/7 merchant support with a dedicated account manager for your business.'
    }
  ];

  return (
    <section>
      <h2 className="section-title">
        Why Merchants and Billers Love <span className="highlight">PayLaterr</span>
      </h2>
      <p className="section-subtitle">
        Join thousands of businesses that have transformed their checkout experience
      </p>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

