import { FaLocationPin, FaPhone, FaLetterboxd } from "react-icons/fa6";
import HeaderText from "./home/reuse/HeaderText";
import PlainText from "./home/reuse/PlainText";
import SubHeaderText from "./home/reuse/SubHeaderText";
import "../pages/contactUs/ContactUs.css";
import Button from "../buttons/Button";

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
              Lorem ipsum dolor sit amet consectetur. Amet scelerisque amet
              malesuada mauris vestibulum volutpat. Ornare mi rutrum orci neque.
              Aliquam arcu facilisis ipsum risus elit quis nunc sem nulla
              adipiscing.
            </PlainText>
          </div>
          <div className="icons-list">
            <div className="icon-label">
              <FaLocationPin /> Lorem ipsum dolor sit amet consectetur. Nec
            </div>
            <div className="icon-label">
              <FaPhone /> Lorem ipsum dolor sit amet consectetur. Nec
            </div>
            <div className="icon-label">
              <FaLetterboxd /> Lorem ipsum dolor sit amet consectetur. Nec
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
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
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
              />
            </div>
            <textarea
              name="c_orderReq"
              id="c_orderReq"
              cols={30}
              rows={10}
              placeholder="Custom Order Request ..."
            ></textarea>
            <Button text="Submit Request" type="primary" fullwidth={true} />
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
