import { useState, useEffect } from "react"
import { validateEmail } from '../utils/helpers';

export default function ContactPage(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage('Name is required');
      return;
    } if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    } if (!message) {
      setErrorMessage('Message is required');
      return;
    }
    

    alert(`Thank you for your message!`);
    setName('');
    setEmail('');
    setMessage('');
  };
   return(
      <div className="container text-center">
        <p>This page is under construction. Please see links below or resume for contact information.</p>
      <form className="form" onSubmit={handleFormSubmit}>
        {/* <input value={name} name="name" type="text" onChange={handleInputChange} placeholder="Name" required/> */}
        {/* <input value={email} name="email" type="email" onChange={handleInputChange}  placeholder="sample@example.com"/> */}
        {/* <input value={message} name="message" type="textarea" onChange={handleInputChange} placeholder="Your message here" required/> */}
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
   )
}