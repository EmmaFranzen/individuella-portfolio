  
import React, { useState } from "react";
import ReactDOM from "react-dom";

import { useFormspark } from "@formspark/use-formspark";

const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: "YLO1zxyg"
  });
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <form onSubmit={async (e) => {
        e.preventDefault();
        await submit({ message, name, email })
    }}>
        <label for="email">Din e-postadress</label>
        <input name="Email" id="email" type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ></input><br></br>
        <label for="name">Ditt namn</label>
        <input name="name" id="name" type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ></input><br></br>
        <label for="message">Meddelande</label>
        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        /><br></br>
      <button type="submit" disabled={submitting}>Skicka</button>
    </form>
  );
};
 
export default ContactForm;