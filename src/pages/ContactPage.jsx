import { useState, useEffect } from "react"


export default function ContactPage(){

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you for your message!`);
    setName('');
    setEmail('');
    setMessage('');
  };
   return(
      <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          placeholder="sample@example.com"
        />
        <input
          name="message"
          type="textarea"
          placeholder="Your message here"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
   )
}