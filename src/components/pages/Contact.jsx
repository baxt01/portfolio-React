import React from 'react';
import Resume from './Resume';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-lg-2 col-sm-0'>
        </div>
        <div className='col-lg-8 col-sm-4'>
      <h1 className='title'>Contact Me</h1>
      <div>
        <ContactForm />
        Email: <a href="mailTo:baxt01@hotmail.com">Email me </a><br />
        Phone: <a href="tel:07359052401">07359052401</a><br />
        GitHub: <a href="https://github.com/baxt01/">Visit my GitHub Profile</a><br />
        LinkedIn: <a href="https://linkedin.com/in/michael-baxter-48b15718">Visit my LinkedIn</a><br />
        <Resume />
        </div>
        <div className='col-lg-2 col-sm-0'>
        </div>
        </div>
      </div>
    </div>
  );
}

