import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log(formData); // For demonstration purposes, log the form data to the console
      // Clear form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // Clear errors
      setErrors({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const { name, email, message } = formData;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    // Set errors
    setErrors(newErrors);
    return valid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

