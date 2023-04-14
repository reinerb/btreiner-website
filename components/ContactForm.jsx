import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ FORMSPREE_URL }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        ...status,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mvonvlvj',
      data: formData,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted'
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Repeated styles for form elements
  const inputStyles =
    'py-2 px-4 bg-zinc-200 dark:bg-zinc-800 border-2 border-zinc-500 focus-within:bg-zinc-300 focus-within:outline-zinc-950 dark:focus-within:bg-zinc-700 dark:focus-within:outline-zinc-50';

  const form = (
    <form
      className='grid lg:grid-cols-2 gap-6'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col gap-1'>
        <label htmlFor='name'>Name*</label>
        <input
          required
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className={inputStyles}
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
          className={inputStyles}
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
          className={inputStyles}
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

  const thanks = (
    <p className='text-xl'>
      Thank you for your message! I'll respond to you as soon as I can.
    </p>
  );

  return status.submitted ? thanks : form;
};

export default ContactForm;
