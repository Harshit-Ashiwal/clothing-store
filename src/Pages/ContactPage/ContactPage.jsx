import React from "react";

// style
import "./ContactPage.style.scss";

// images
import Profile from "../../assets/profile.jpeg";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>GET IN TOUCH</h1>
      <a href="https://www.linkedin.com/in/harshit-ashiwal/" target="blank">
        <h3 className="name">Harshit Ashiwal Web Developer</h3>
        <img className="profile-image" src={Profile} alt="Hemant" />
      </a>
    </div>
  );
};

export default ContactPage;
