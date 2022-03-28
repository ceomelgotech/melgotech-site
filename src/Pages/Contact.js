import React from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
  return (
    <>
      <Breadcrumb
        title="Contact Us"
        name="Contact Us"
      />
      <ContactForm />
    </>
  )
}

export default Contact;