import React, { useState, useEffect } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [ callOption, setCallOption] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
    getACall: '',
  });

  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const serviceID = process.env.REACT_APP_SERVICE_KEY;
  const templateKey = process.env.REACT_APP_TEMPLATE_KEY;

  useEffect(() => {
    emailjs.init(publicKey);
  }, [publicKey]);

  const handleSelectChange = (e) => {
    setCallOption(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    })
    );
    console.log(formData);
  };

  const onChange = (e) => {
    handleInputChange(e);
    setCallOption(e.target);
  };

  const initMail = () => {
    emailjs.init({
      publicKey: publicKey,
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        // The variable contains the email address
        watchVariable: 'userEmail',
      },
    });
  };

  const sendMail = () => {
    initMail();
    emailjs
      .send(serviceID, templateKey, formData, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text, response);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
    console.log(formData, 'clicked');
  };

  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content">
        <div className="contact-logo">
          <img
            src="https://st.depositphotos.com/1431107/3046/v/450/depositphotos_30462385-stock-illustration-vector-contact-icons.jpg"
            alt="Contact Icons"
            className="contact-icons"
          />
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              value={formData.name}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={formData.email}
            />
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Telephone"
              onChange={handleInputChange}
              value={formData.telephone}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              onChange={handleInputChange}
              value={formData.message}
            ></textarea>
            <select id="get-a-call" name="getACall" onChange={onChange}  value={formData.getACall}>
              <option value="" disabled>
                Get a call?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <button type="submit" onClick={sendMail}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
