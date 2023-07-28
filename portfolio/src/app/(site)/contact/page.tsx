'use client'
import { FC, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Form validation logic
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = 'required';
    }
    if (!formData.email.trim()) {
      errors.email = 'required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      errors.message = 'required';
    }

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  }, [formData]);

  const isValidEmail = (email: string): boolean => {
    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      setProcessing(true);
      try {
        await sendEmail(formData);
        setFormData({ name: '', email: '', message: '' });
        toast.success('Email sent successfully!');
      } catch (error) {
        toast.error('Error sending email!');
        console.error('Error sending email:', error);
      } finally {
        setProcessing(false);
      }
    }
  };

  const sendEmail = async (data: FormData) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      throw new Error('Error sending email');
    }
  };

  return (
    <div className="h-screen mx-14 my-14 max-[730px]:m-0 relative">
      <div className="absolute top-0 left-0 w-full h-full px-[3rem] max-[750px]:px-[1rem] items-center justify-center rounded-2xl max-[730px]:rounded-none bg-black bg-opacity-30 flex flex-col gap-[2rem] py-8">
        <form
          className="bg-black text-white p-8 w-[500px] max-[533px]:w-auto rounded-lg shadow-md backdrop-blur-md backdrop-filter backdrop-opacity-60"
          onSubmit={formSubmit}
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          {/* Name input field */}
          <div className="mb-4">
            <div className="flex item-center justify-between">
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium mb-2"
              >
                Name
              </label>
              {formErrors.name && (
                <span className="text-red-500 text-sm">{formErrors.name}</span>
              )}
            </div>
            <input
              type="text"
              required
              value={formData.name}
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border text-black border-gray-400 focus:outline-none focus:border-white"
            />
          </div>
          {/* Email input field */}
          <div className="mb-4">
            <div className="flex item-center justify-between">
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                Email
              </label>
              {formErrors.email && (
                <span className="text-red-500 text-sm">{formErrors.email}</span>
              )}
            </div>
            <input
              type="email"
              required
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border text-black border-gray-400 focus:outline-none focus:border-white"
            />
          </div>
          {/* Message textarea field */}
          <div className="mb-4">
            <div className="flex item-center justify-between">
              <label
                htmlFor="message"
                className="block text-white text-sm font-medium mb-2"
              >
                Message
              </label>
              {formErrors.message && (
                <span className="text-red-500 text-sm">{formErrors.message}</span>
              )}
            </div>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              name="message"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border text-black border-gray-400 focus:outline-none focus:border-white"
            />
          </div>
          <button
            type="submit"
            disabled={processing || !isFormValid}
            className={`w-full bg-black border hover:border-white text-white px-4 py-2 rounded-md transition-colors`}
          >
            {processing ? (
              <div className="flex items-center justify-center group">
                <div className="rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-100  animate-spin"></div>
                <div className="ml-2">Processing...</div>
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </form>
        <div className="max-w-[800px] max-[730px]:px-[2rem ] max-[533px]:px-0  text-white text-[15px] text-center">
          *If you prefer not to contact us through the form, feel free to reach
          out via WhatsApp or, regular messages at (0300 0000000), or email us @
          (aarasta.customer@gmail.com). We are always delighted to assist you,
          and you can expect a response within 24 hours or even earlier.
        </div>
      </div>
    </div>
  );
};

export default Contact;
