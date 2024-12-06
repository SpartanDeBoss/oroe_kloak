import React, { useState, useEffect } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
    getACall: '',
  });

  const[statusMessage, setStatusMessage] = useState('');

  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;

  useEffect(() => {
    console.log('Public Key:', publicKey);
    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error('Public key is missing.');
    }
  }, [publicKey, serviceID, templateID]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendMail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!serviceID || !templateID || !publicKey) {
      console.error('Missing serviceID, templateID, or publicKey.');
      return;
    }

    emailjs.send(serviceID, templateID, formData).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          telephone: '',
          message: '',
          getACall: '',
        });

        setTimeout(() => {
          setStatusMessage('');
        }, 7000);
      },
      (error) => {
        console.log('FAILED...', error);
        setStatusMessage('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Kontakt</h1>
      {statusMessage && <div className="status-message">{statusMessage}</div>}
      <div className="contact-content">
        <div className="contact-logo">
          <img
            src="https://st.depositphotos.com/1431107/3046/v/450/depositphotos_30462385-stock-illustration-vector-contact-icons.jpg"
            alt="Contact Icons"
            className="contact-icons"
          />
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={sendMail}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Navn"
              onChange={handleInputChange}
              value={formData.name}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Telefonnummer"
              onChange={handleInputChange}
              value={formData.telephone}
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Besked"
              onChange={handleInputChange}
              value={formData.message}
              required
            ></textarea>
            <select
              id="get-a-call"
              name="getACall"
              onChange={handleInputChange}
              value={formData.getACall}
              required
            >
              <option value="" disabled>
                Ring til mig?
              </option>
              <option value="yes">Ja</option>
              <option value="no">Nej</option>
            </select>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
