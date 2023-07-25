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
        className='w-full max-w-sm p-6 border border-black dark:border-white rounded shadow-md'
        onSubmit={handleSubmit}
      >
        <div className='mb-4'>
      
          <input
            type='text'
            name='name'
            required
            value={name}
            className='w-full p-2 border  border-black dark:border-white rounded'
            onChange={handleChange}
            placeholder='Name'
          />
          <div className='text-red text-sm'>{name}</div>
        </div>
        <div className='mb-4'>
          
          <input
            type='email'
            name='mail'
            required
            value={mail}
            className='w-full p-2 border  border-black dark:border-white rounded'
            onChange={handleChange}
            placeholder='Mail'
          />
          <div className='text-red text-sm'>{mail}</div>
        </div>
        <div className='mb-4'>
        
          <input
            type='text'
            required
            name='message'
            value={message}
            className='w-full p-2 border  border-black dark:border-white rounded'
            onChange={handleChange}
            placeholder='Message'
          />
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
