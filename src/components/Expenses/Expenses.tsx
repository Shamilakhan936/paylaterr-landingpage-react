import './Expenses.scss';
import clockIcon from '../../assets/images/clock.png';
import hiddenFeesIcon from '../../assets/images/hidden-fees.png';
import easyApprovalIcon from '../../assets/images/easy-approval.png';
import rentIcon from '../../assets/images/rentIcon.png';
import carIcon from '../../assets/images/car.png';
import electricIcon from '../../assets/images/electric.png';
import cableIcon from '../../assets/images/cable.png';
import waterDropIcon from '../../assets/images/water-drop.png';
import utilitiesIcon from '../../assets/images/utilities.png';
import payIcon from '../../assets/images/payIcon.png';

const Expenses = () => {
  const expenseFeatures = [
    {
      icon: clockIcon,
      label: 'Flexible Terms',
      colorClass: 'purple'
    },
    {
      icon: hiddenFeesIcon,
      label: 'No Hidden Fees',
      colorClass: 'orange'
    },
    {
      icon: easyApprovalIcon,
      label: 'Easy Approval',
      colorClass: 'purple'
    }
  ];

  const expenses = [
    {
      icon: rentIcon,
      name: 'Rent',
      total: '$1500.00',
      installment: '$500.00 each',
      colorClass: 'purple'
    },
    {
      icon: carIcon,
      name: 'Car Payment',
      total: '$350.00',
      installment: '$175.00 each',
      colorClass: 'purple'
    },
    {
      icon: electricIcon,
      name: 'Electric',
      total: '$120.00',
      installment: '$40.00 each',
      colorClass: 'yellow'
    },
    {
      icon: cableIcon,
      name: 'Cable',
      total: '$85.00',
      installment: '$28.33 each',
      colorClass: 'green'
    },
    {
      icon: waterDropIcon,
      name: 'Water',
      total: '$45.00',
      installment: '$15.00 each',
      colorClass: 'blue'
    },
    {
      icon: utilitiesIcon,
      name: 'Other Utilities',
      total: '$75.00',
      installment: '$37.50 each',
      colorClass: 'orange'
    }
  ];

  return (
    <section>
      <div className="expenses-header">
        <div className="expenses-top-btn">
          <img src={payIcon} alt="Pay Your Way" />
          <span>Pay Your Way, Every Day</span>
        </div>
        <h2 className="section-title">
          Life Expenses, <span className="highlight">Simplified</span>
        </h2>
        <p className="section-subtitle">
          From essential bills to personal care, PayLaterr helps you manage everyday expenses with flexible payment options that fit your life.
        </p>
      </div>
      <div className="expense-features">
        {expenseFeatures.map((feature, index) => (
          <div key={index} className="expense-feature">
            <div className={`expense-feature-icon ${feature.colorClass}`}>
              <img src={feature.icon} alt={feature.label} />
            </div>
            <div className="expense-feature-label">{feature.label}</div>
          </div>
        ))}
      </div>
      <div className="expenses-grid">
        {expenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <div className={`expense-item-icon ${expense.colorClass}`}>
              <img src={expense.icon} alt={expense.name} />
            </div>
            <div className="expense-content">
              <div className="expense-left">
                <div className="expense-name">{expense.name}</div>
                <div className="expense-installment-label">Installment</div>
              </div>
              <div className="expense-right">
                <div className="expense-total-label">Total</div>
                <div className="expense-amount">{expense.total}</div>
                <div className="expense-installment">{expense.installment}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="#features" className="pay-with-btn">Pay with PayLaterr</a>
    </section>
  );
};

export default Expenses;

