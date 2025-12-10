import React, { useState, useEffect, useRef, Fragment } from "react";
import "./styles.scss";
import logo from "../../assets/images/logo.png";
// Landing page version - simplified imports
// Note: If you need react-router-dom, redux, etc., install them via npm

// Placeholder images - update these paths to match your actual assets
// import billPayment from "../../assets/images/bill-payment.svg";
// import rewardPoints from "../../assets/images/reward-points.svg";
// import allMyBillsImg from "../../assets/images/all-my-bills.svg";
// import earnedWageAccessIcon from "../../assets/images/wage.png";
// import trackSpendingIcon from "../../assets/images/track-spending.png";
// import rentReporting from "../../assets/images/rent-reporting.svg";

export const Header: React.FC = () => {
  // Landing page version - simplified state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef1 = useRef<HTMLUListElement>(null);
  const navRef2 = useRef<HTMLUListElement>(null);
  const path = window.location.pathname;
  
  // Simplified for landing page - remove auth logic if not needed
  const isAuthenticated = false; // Set to true if you have auth
  const isVerified = false;

  const handleNavClick = () => {
    setIsOpen(false);
  };

  // when click on any link then close the mobile nav
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (navRef1.current && navRef1.current.contains(event.target as Node)) ||
        (navRef2.current && navRef2.current.contains(event.target as Node))
      ) {
        handleNavClick();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleNavClick]);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const NavChilds = (props: any) => {
    return (
      <ul
        className="nav-main-childs"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
        onClick={() =>
          props.isDesktop ? setIsDropdownOpen(false) : setIsOpen(false)
        }
      >
        <li>
          <a href="#how-it-works">
            <span>Bill Payment</span>
            <span>
              The quickest and most effortless method to pay any bill. Simply
              take a photo of your bill and we take care of the rest!
            </span>
            {/* <img src={billPayment} alt="Bill Payment" /> */}
          </a>
        </li>
        <li>
          <a href="#rent-reporting">
            <span>Rent Reporting</span>
            <span>
              Boost credit scores by promptly reporting rental payments
            </span>
            {/* <img src={rentReporting} alt="Rent Reporting" /> */}
          </a>
        </li>

        <li>
          <a href="#track-spending">
            <span>Take Control of Your Money </span>
            <span>
              Track your spending in real time and see exactly where your money
              goes
            </span>
            {/* <img src={trackSpendingIcon} alt="Track Spending" /> */}
          </a>
        </li>

        <li>
          <a href="#earned-wage-access">
            <span>Early Wage Access</span>
            <span>
              No more waiting for payday—access your earnings instantly.
            </span>
            {/* <img src={earnedWageAccessIcon} alt="Earned Wage Access" /> */}
          </a>
        </li>
        <li>
          <a href="#rewards-points">
            <span>Reward Points</span>
            <span>
              Earn reward points by uploading bills and paying them on time,
              then use your points to schedule payments or redeem rewards.
            </span>
            {/* <img src={rewardPoints} alt="Reward Points" /> */}
          </a>
        </li>

        <li>
          <a href="#all-my-bills">
            <span>All My Bills</span>
            <span>
              Consolidate and manage all your bills in one place, paying at your
              own pace with PayLaterr.
            </span>
            {/* <img src={allMyBillsImg} alt="All My Bills" /> */}
          </a>
        </li>

        {/* <li>
          <Link to="/rent-reporting">
            <span>Rent Reporting</span>
            <span>
              Report your rental payments to the bureau and boost your credit
              score
            </span>
            <img src={rentReporting} />
          </Link>
        </li> */}

        {/* <li>
      <Link to="/offer">
        <span>Offer</span>
        <span>
          Earn rewards offer for every payment you make as in
          incentive for paying you bills on time
        </span>
        <img src={productOffer} />
      </Link>
    </li> */}
      </ul>
    );
  };

  function handleRedirect() {
    // Landing page version - simplified redirect
    // Add your navigation logic here
    window.location.href = "#contact"; // Example: scroll to contact form
  }

  const handleLogout = async () => {
    // Landing page version - simplified logout
    // Add your logout logic here if needed
    console.log("Logout clicked");
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="PayLaterr" />
        </a>

        <div
          className={`nav ${isOpen && "nav-active"}`}
          style={{
            height: isOpen ? "calc(100vh - 220px)" : 0,
            padding: isOpen ? "20px" : 0,
            transition: isOpen
              ? ""
              : "height 0.2s ease-in-out, padding 0.3s ease-in-out",
          }}
        >
          <ul className="nav-main" ref={navRef1}>
            <li className="has-childs">
              <a
                href="#"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Products
              </a>
              <span className="nav-desktop-view">
                {isDropdownOpen && <NavChilds isDesktop={true} />}
              </span>
              <span className="nav-mobile-view">
                <NavChilds isDesktop={false} />
              </span>
            </li>
            <li>
              <a
                href="#pricing"
                className={path == "/pricing" ? "active" : ""}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className={path == "/how-it-works" ? "active" : ""}
              >
                How It Works
              </a>
            </li>
            <li>
              <a href="#help" className={path == "/help" ? "active" : ""}>
                Support & FAQ
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className={path == "/about-us" ? "active" : ""}
              >
                About Us
              </a>
            </li>
          </ul>

          {/* {authState.isLoading ? (
            <HeaderLoading />
          ) : ( */}
          <ul className="nav-help" ref={navRef2}>
            {!isAuthenticated && (
              <li className="active nav-help-d">
                <a href="#sign-up" className="cursor-pointer">
                  <span>Get Started</span>
                </a>
              </li>
            )}
            <li>
              <a href="#merchants">
                <span>Merchants</span>
              </a>
            </li>

            {isAuthenticated ? (
              <Fragment>
                <li className="nav-help-d nav-logout">
                  <a className="cursor-pointer" onClick={handleLogout}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_580_373"
                        mask-type="luminance"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="14"
                        height="14"
                      >
                        <path
                          d="M0 1.90735e-06H14V14H0V1.90735e-06Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_580_373)">
                        <path
                          d="M9.32227 10.7188V11.8125C9.32227 12.7186 8.58773 13.4531 7.68164 13.4531H2.18555C1.27946 13.4531 0.544922 12.7186 0.544922 11.8125V2.1875C0.544922 1.28141 1.27946 0.546876 2.18555 0.546876H7.68164C8.58773 0.546876 9.32227 1.28141 9.32227 2.1875V3.28125"
                          stroke="black"
                          strokeWidth="1.63964"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.3164 7.02734H5.90625"
                          stroke="black"
                          strokeWidth="1.63964"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.9883 8.83203L13.2129 7.60739C13.5333 7.28703 13.5333 6.76766 13.2129 6.4473L11.9883 5.22266"
                          stroke="black"
                          strokeWidth="1.63964"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>

                    <span>Logout</span>
                  </a>
                </li>

                <li className="active nav-help-d">
                  <a className="cursor-pointer" onClick={handleRedirect}>
                    <span> {isVerified ? "Dashboard" : "Continue"}</span>
                  </a>
                </li>
              </Fragment>
            ) : (
              <li>
                <a href="#sign-in">
                  <span>Login</span>
                </a>
              </li>
            )}
          </ul>
        </div>

        <a
          className={`nav-mobile jsNavMobile ${isOpen && "nav-mobile-open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </header>
  );
};
