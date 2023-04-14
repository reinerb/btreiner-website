import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className='grid lg:grid-cols-2 gap-6'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='name'>Name*</label>
        <input
          required
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='py-2 px-4 bg-zinc-200 dark:bg-zinc-800 border-2 border-zinc-500 focus-within:bg-zinc-300 focus-within:outline-zinc-950 dark:focus-within:bg-zinc-700 dark:focus-within:outline-zinc-50'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='email'>Email Address*</label>
        <input
          required
          type='text'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='py-2 px-4 bg-zinc-200 dark:bg-zinc-800 border-2 border-zinc-500 focus-within:bg-zinc-300 focus-within:outline-zinc-950 dark:focus-within:bg-zinc-700 dark:focus-within:outline-zinc-50'
        />
      </div>
      <div className='flex flex-col gap-1 lg:col-span-2'>
        <label htmlFor='message'>Message*</label>
        <textarea
          required
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className='py-2 px-4 bg-zinc-200 dark:bg-zinc-800 border-2 border-zinc-500 focus-within:bg-zinc-300 focus-within:outline-zinc-950 dark:focus-within:bg-zinc-700 dark:focus-within:outline-zinc-50'
        />
      </div>
      <button
        type='submit'
        className='lg:col-start-2 place-self-end py-1 px-4 border-2 border-zinc-500 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 active:bg-zinc-400 dark:active:bg-zinc-600'
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
