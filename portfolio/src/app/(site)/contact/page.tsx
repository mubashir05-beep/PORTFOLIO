'use client'

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ErrTypes {
  name?: string;
  email?: string;
  message?: string;
}

const PageComponent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<ErrTypes>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    const errors: ErrTypes = {};
    if (!name.trim()) {
      errors.name = "required!";
    }
    if (!email.trim()) {
      errors.email = "required!";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    }
    if (!message.trim()) {
      errors.message = "required!";
    }
    setError(errors);
  }, [name, email, message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(email) || !name.trim() || !message.trim()) {
      toast.error("Please fill in all required fields correctly!");
      return;
    }

    try {
      await sender({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent Successfully!");
    } catch (error) {
      toast.error("Error sending Message!");
      console.log("error sending message:", error);
    }
  };

  const sender = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      const response = await fetch("/api", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error sending email!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
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
            name="email"
            required
            value={email}
            onChange={handleChange}
            placeholder=" "
            className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 ${
              error.email && "dark:border-red-800 border-red-500"
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
              error.message && "dark:border-red-800 border-red-500"
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
