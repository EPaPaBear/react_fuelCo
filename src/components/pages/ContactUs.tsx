import { FaMapPin, FaPhone, FaEnvelope } from "react-icons/fa6";
import HeaderText from "./home/reuse/HeaderText";
import PlainText from "./home/reuse/PlainText";
import SubHeaderText from "./home/reuse/SubHeaderText";
import "../pages/contactUs/ContactUs.css";
import Button from "../buttons/Button";
import ReCAPTCHA from "react-google-recaptcha";

//import React from 'react'

function ContactUs() {
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
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
            />
            <div className="company-name-phone">
              <input
                type="text"
                name="compName"
                id="compName"
                placeholder="Company Name(Optional)"
              />
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <textarea
              name="c_orderReq"
              id="c_orderReq"
              cols={30}
              rows={10}
              placeholder="Custom Order Request ..."
              required
            ></textarea>
            <Button text="Submit Request" type="primary" fullwidth={true} />
            <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} />
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
