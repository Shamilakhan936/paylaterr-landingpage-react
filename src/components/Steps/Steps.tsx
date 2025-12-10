import './Steps.scss';

const Steps = () => {
  const steps = [
    {
      number: '01',
      title: 'Apply Online',
      description: 'Complete our simple application in under 5 minutes. No paperwork required.'
    },
    {
      number: '02',
      title: 'Integrate Easily',
      description: 'Add PayLaterr to your portal or checkout with our plugins or API. Most integrations take under an hour.'
    },
    {
      number: '03',
      title: 'Start Growing',
      description: 'Go live and watch your sales increase. Get paid upfront for every order.'
    }
  ];

  return (
    <section id="features">
      <h2 className="section-title" style={{ marginTop: '30px' }}>
        Get Started in <span className="highlight">3 Simple<br />Steps</span>
      </h2>
      <p className="section-subtitle">From application to going live in as little as 24 hours</p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;

