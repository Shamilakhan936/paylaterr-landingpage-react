import './Footer.scss';
import logo from '../../assets/images/logo.png';
import pciIcon from '../../assets/images/pci.png';

const Footer = () => {
  const footerLinks = {
    product: [
      { href: '#how-it-works', text: 'Bill Payment' },
      { href: '#rent-reporting', text: 'Rent Reporting' },
      { href: '#track-spending', text: 'Track Your Spending' },
      { href: '#earned-wage-access', text: 'Early Wage Access' },
      { href: '#rewards-points', text: 'Reward Points' },
      { href: '#all-my-bills', text: 'All My Bills' },
      { href: '#pricing', text: 'Pricing' }
    ],
    resources: [
      { href: '#how-it-works', text: 'How It Works' },
      { href: '#help', text: 'Support & FAQ' },
      { href: '#documentation', text: 'Documentation' },
      { href: '#api', text: 'API Reference' }
    ],
    company: [
      { href: '#about-us', text: 'About Us' },
      { href: '#merchants', text: 'Merchants' },
      { href: '#careers', text: 'Careers' },
      { href: '#press', text: 'Press' },
      { href: '#contact', text: 'Contact' }
    ],
    legal: [
      { href: '#privacy', text: 'Privacy Policy' },
      { href: '#terms', text: 'Terms of Service' },
      { href: '#cookies', text: 'Cookie Policy' }
    ]
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <img src={logo} alt="PayLaterr" className="footer-logo-img" />
          </div>
          <p className="footer-description">
            The smarter way to pay. Flexible payments for customers, instant payouts for merchants.
          </p>
        </div>
        <div className="footer-column">
          <h4>Product</h4>
          {footerLinks.product.map((link, index) => (
            <a key={index} href={link.href}>{link.text}</a>
          ))}
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          {footerLinks.resources.map((link, index) => (
            <a key={index} href={link.href}>{link.text}</a>
          ))}
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          {footerLinks.company.map((link, index) => (
            <a key={index} href={link.href}>{link.text}</a>
          ))}
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          {footerLinks.legal.map((link, index) => (
            <a key={index} href={link.href}>{link.text}</a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2026 PayLaterr. All rights reserved.</p>
        <div className="footer-certification">
          <img src={pciIcon} alt="PCI DSS" />
          <span>PCI DSS Level 1 Certified</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

