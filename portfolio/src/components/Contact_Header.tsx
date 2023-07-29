import React from "react";

interface ContactHeaderProps {
  email: string;
}

const Contact_Header: React.FC<ContactHeaderProps> = ({ email }) => {
    return (
      <div className="contact-header">
        <h1 className="contact-header-title">Get in Touch</h1>
        <p className="contact-header-description">
          I'd love to hear your ideas and thoughts!
        </p>
        <p className="contact-header-email">
          Alternatively, you can email me at:{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    );
  };
  export default Contact_Header;