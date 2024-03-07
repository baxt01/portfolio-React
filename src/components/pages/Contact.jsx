import React from 'react';
import Resume from './Resume';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div>
        <ContactForm />
        Email: <a href="mailTo:baxt01@hotmail.com">Email me </a><br />
        Phone: <a href="tel:07359052401">07359052401</a><br />
        GitHub: <a href="https://github.com/baxt01/">Visit my GitHub Profile</a><br />
        LinkedIn: <a href="www.linkedin.com/in/michael-baxter-48b15718">Visit my LinkedIn</a><br />
        <Resume />
      </div>
    </div>
  );
}

