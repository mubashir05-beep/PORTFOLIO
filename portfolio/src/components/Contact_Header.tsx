import React from "react";

interface ContactHeaderProps {
  email: string;
}

const Contact_Header: React.FC<ContactHeaderProps> = ({ email }) => {
  return (
    <div className=" max-[1140px]:items-center  max-[740px]:text-center  flex flex-col gap-2">
      <h1 className="text-[7rem] font-semibold max-[420px]:text-[2rem] max-[1370px]:text-[5rem] max-[620px]:text-[3rem]">
        Get in Touch
      </h1>
      <p className="dark:text-gray-300 max-[420px]:text-sm text-black">
        I&#39;d love to hear your ideas and thoughts!
      </p> 
      <p className="dark:text-gray-300 text-black max-[420px]:text-sm">
        Alternatively, you can email me at :
        <a href={`mailto:${email}`} className=" hover:underline">
          {" " + email}
        </a>
      </p>
    </div>
  );
};

export default Contact_Header;
