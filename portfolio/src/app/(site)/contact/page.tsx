"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
interface errTypes {
  name?: string;
  email?: string;
  message?: string;
}

const PageComponent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<errTypes>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "mail":
        setMail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const errors: errTypes = {};
    if (!name.trim()) {
      errors.name = "required!";
    }
    if (!mail.trim()) {
      errors.email = "required!";
    } else if (!isValidEmail(mail)) {
      errors.email = "Invalid email format";
    }
    if (!message.trim()) {
      errors.message = "required!";
    }
    setError(errors); // Update the error state with the errors object
  }, [setName, mail, message]);

  const isValidEmail = (mail: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(mail);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here if needed.
  };

  const sendMail = async (): Promise<void> => {
    try {
      const response = await fetch("/api/contactMail", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: mail,
          message: message,
        }),
      });
  
      if (response.ok) {
        // Clear the form fields after successful email send
        setName("");
        setMail("");
        setMessage("");
      } else {
        toast.error("Error sending email!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email!");
    }
  };
  
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <form
        className="w-full max-w-sm p-6 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 w-full mb-5">
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
            placeholder=" "
            className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 ${
              error.name && "dark:border-red-800 border-red-500"
            } appearance-none focus:outline-none transition duration-300 focus:ring-0 focus:border-black dark:focus:border-white  border-gray-500`}
          />

          <label
            htmlFor="name"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >
            Enter name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5">
          <input
            type="text"
            name="mail"
            required
            value={mail}
            onChange={handleChange}
            placeholder=" "
            className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 ${
              error.name && "dark:border-red-800 border-red-500"
            } appearance-none focus:outline-none transition duration-300 focus:ring-0 focus:border-black dark:focus:border-white  border-gray-500`}
          />
          <label
            htmlFor="mail"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >
            Enter Mail
          </label>
        </div>
        <div className="relative z-0 w-full mb-5">
          <textarea
            name="message"
            required
            value={message}
            onChange={handleChange}
            placeholder=" "
            className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 ${
              error.name && "dark:border-red-800 border-red-500"
            } appearance-none focus:outline-none transition duration-300 focus:ring-0 focus:border-black dark:focus:border-white border-gray-500`}
          />
          <label
            htmlFor="message"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >
            Enter Message
          </label>
        </div>
        <div className=" flex w-0  group">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-black rounded  hover:bg-[#323138] dark:bg-white dark:text-gray-700 dark:group-hover:bg-[#323138] dark:group-hover:text-white transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PageComponent;
