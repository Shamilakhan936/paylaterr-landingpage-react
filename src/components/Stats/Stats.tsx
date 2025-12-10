import './Stats.scss';
import higherIcon from '../../assets/images/higher.png';
import cartIcon from '../../assets/images/cartIcon.png';
import customersIcon from '../../assets/images/customers.png';
import merchantsIcon from '../../assets/images/merchants.png';

const Stats = () => {
  const stats = [
    {
      icon: higherIcon,
      number: '44%',
      label: 'Higher conversion'
    },
    {
      icon: cartIcon,
      number: '68%',
      label: 'Increased ADV'
    },
    {
      icon: customersIcon,
      number: '200,000 +',
      label: 'Active customers'
    },
    {
      icon: merchantsIcon,
      number: '30,000',
      label: 'Partner merchants'
    }
  ];

  return (
    <section>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">
              <img src={stat.icon} alt={stat.label} />
            </div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

