import { FaMapPin, FaPhone, FaEnvelope } from "react-icons/fa6";
import HeaderText from "./home/reuse/HeaderText";
import PlainText from "./home/reuse/PlainText";
import SubHeaderText from "./home/reuse/SubHeaderText";
import "../pages/contactUs/ContactUs.css";
import Button from "../buttons/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import sendCustomEmail from "../EmailSenderService";
import Swal from "sweetalert2";

//import React from 'react'

function ContactUs() {
  const recaptcha = useRef<ReCAPTCHA>(null);
  const [details, setDetails] = useState({
    full_name: "",
    custom_request: "",
    from_email: "",
    phone_number: "",
    company_name: "",
  });

  const handleDetailsChange = (event: any) => {
    const { name, value } = event.target;
    setDetails((previousDetails) => {
      return {
        ...previousDetails,
        [name]: value,
      };
    });
  };

  const handleSendEmail = () => {
    sendCustomEmail(details);
  };

  function checkCAPTCHAThenSubmitForm(event: any) {
    event.preventDefault();
    const captchaValue = recaptcha.current!.getValue();
    if (!captchaValue) {
      Swal.fire({
        title: "Check CAPTCHA",
        text: "Cannot verify CAPTCHA. Please tick the box below or refresh the page and try again.",
        icon: "warning",
        confirmButtonText: "Continue",
      });
    } else {
      handleSendEmail();
    }
  }

  return (
    <>
      <section className="contact-us-section">
        <div className="contact-info">
          <div className="contact-info-header-subheader">
            <SubHeaderText text="Place An Order" />
            <HeaderText text="Contact Us" />
          </div>
          <div className="contact-info-description">
            <PlainText>
              Seen something you like? Give us a call or send us a message by
              filling the form and tell us what you need and we'll get back to
              you in less than 8 hours. Can't find what you're looking for? Let
              us know and we'll make sure it's included in the next batch of
              dispensers.
            </PlainText>
          </div>
          <div className="icons-list">
            <div className="icon-label">
              <FaMapPin size={28} /> J.J Rawlings St. Acrra, Ghana
            </div>
            <div className="icon-label">
              <FaPhone size={28} /> +233 123 456 789
            </div>
            <div className="icon-label">
              <FaEnvelope size={28} /> no-reply@fuel-co.com
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form action="POST">
            <input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Full Name"
              value={details.full_name}
              onChange={handleDetailsChange}
              required
            />
            <input
              type="email"
              name="from_email"
              id="from_email"
              placeholder="Email Address"
              value={details.from_email}
              onChange={handleDetailsChange}
              required
            />
            <div className="company-name-phone">
              <input
                type="text"
                name="company_name"
                id="company_name"
                placeholder="Company Name(Optional)"
                value={details.company_name}
                onChange={handleDetailsChange}
              />
              <input
                type="number"
                name="phone_number"
                id="phone_number"
                placeholder="Phone Number"
                value={details.phone_number}
                onChange={handleDetailsChange}
                required
              />
            </div>
            <textarea
              name="custom_request"
              id="custom_request"
              cols={30}
              rows={10}
              placeholder="Custom Order Request ..."
              value={details.custom_request}
              onChange={handleDetailsChange}
              required
            ></textarea>
            <Button
              text="Submit Request"
              type="primary"
              fullwidth={true}
              disabled={
                !details.full_name ||
                !details.from_email ||
                !details.phone_number ||
                !details.custom_request
              }
              onClick={checkCAPTCHAThenSubmitForm}
            />
            <ReCAPTCHA
              ref={recaptcha}
              sitekey={import.meta.env.VITE_SITE_KEY}
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
