import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [callOption, setCallOption] = useState('');

  const handleSelectChange = (e) => {
    setCallOption(e.target.value);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-info-container">
        <h1 className="contact-title">Contact</h1>
        <form className="contact-form">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Email" />
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Telephone"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <select 
            id="get-a-call" 
            name="get-a-call"
            value={callOption}
            onChange={handleSelectChange}
          >
            <option value="" disabled selected>
              Get a call
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
