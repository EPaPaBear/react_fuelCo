import "./Footer.css";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaAngleDown,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-header">Fuel Company</div>
          <div className="links">
            <div className="sub-links">
              <div className="sub-link">
                <h1>Our Services</h1>
                <ul className="list-options">
                  <li>Dispenser Order</li>
                  <li>Dispenser Repair</li>
                </ul>
              </div>
              <div className="sub-link">
                <h1>Our Details</h1>
                <ul className="list-options">
                  <li>About us</li>
                  <li>Partners</li>
                  <li>Investors</li>
                </ul>
              </div>
              <div className="sub-link">
                <h1>Miscellaneous</h1>
                <ul className="list-options">
                  <li>FAQs</li>
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="social-language">
              <div className="socials">
                <FaInstagram size={24} />
                <FaLinkedinIn size={24} />
                <FaTwitter size={24} />
              </div>
              <div className="languages">
                Language <FaAngleDown />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
