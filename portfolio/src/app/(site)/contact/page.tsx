'use client'
import React, { useState } from 'react';

const PageComponent: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'mail':
        setMail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here if needed.
  };

  return (
    <div className='h-[80vh] flex items-center justify-center'>
      <form
        className='w-full max-w-sm p-6 rounded shadow-md'
        onSubmit={handleSubmit}
      >
        <div className='mb-4 relative'>
          <input
            type='text'
            name='name'
            required
            value={name}
            className={`w-full p-2 rounded appearance-none focus:outline-none focus:ring-0 focus:border-black ${
              name ? 'border-b-2' : ''
            }`}
            onChange={handleChange}
          />
          <label
            htmlFor='name'
            className={`absolute duration-300 top-2 left-2 transform origin-0 text-gray-500 ${
              name ? 'text-black text-xs' : 'text-base'
            } ${name ? '-translate-y-6' : 'translate-y-0'}`}
          >
            Name
          </label>
          <div className='text-red text-sm'>{name}</div>
        </div>
        <div className='mb-4 relative'>
          <input
            type='email'
            name='mail'
            required
            value={mail}
            className={`w-full p-2 rounded appearance-none focus:outline-none focus:ring-0 focus:border-black ${
              mail ? 'border-b-2' : ''
            }`}
            onChange={handleChange}
          />
          <label
            htmlFor='mail'
            className={`absolute duration-300 top-2 left-2 transform origin-0 text-gray-500 ${
              mail ? 'text-black text-xs' : 'text-base'
            } ${mail ? '-translate-y-6' : 'translate-y-0'}`}
          >
            Mail
          </label>
          <div className='text-red text-sm'>{mail}</div>
        </div>
        <div className='mb-4 relative'>
          <input
            type='text'
            required
            name='message'
            value={message}
            className={`w-full p-2 rounded appearance-none focus:outline-none focus:ring-0 focus:border-black ${
              message ? 'border-b-2' : ''
            }`}
            onChange={handleChange}
          />
          <label
            htmlFor='message'
            className={`absolute duration-300 top-2 left-2 transform origin-0 text-gray-500 ${
              message ? 'text-black text-xs' : 'text-base'
            } ${message ? '-translate-y-6' : 'translate-y-0'}`}
          >
            Message
          </label>
          <div className='text-red text-sm'>{message}</div>
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PageComponent;
