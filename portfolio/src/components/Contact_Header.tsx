import React from "react";

interface ContactHeaderProps {
  email: string;
}

const Contact_Header: React.FC<ContactHeaderProps> = ({ email }) => {
  return (
    <div className="contact-header flex flex-col gap-2">
      <h1 className="text-[7rem] font-semibold">Get in Touch</h1>
      <p className="dark:text-gray-300 text-black">
        I&#39;d love to hear your ideas and thoughts!
      </p>
      <p className="dark:text-gray-300 text-black">
        Alternatively, you can email me at : 
         <a href={`mailto:${email}`} className=" hover:underline">
          {" "+email}
        </a>
      </p>
    </div>
  );
};

export default Contact_Header;
