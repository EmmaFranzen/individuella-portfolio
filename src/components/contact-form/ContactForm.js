import React, { useState } from "react";

import ShadowBox from "../../hoc/shadowbox/ShadowBox";

import "./ContactForm.css";

import { useFormspark } from "@formspark/use-formspark";

const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: "YLO1zxyg"
  });
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <ShadowBox>
    <form onSubmit={async (e) => {
        e.preventDefault();
        await submit({ message, name, email })
    }}>
        <input name="Email" id="email" type="email" placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ></input><br></br>
        <input name="name" id="name" type="text" placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ></input><br></br>
        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)} placeholder="Your message"
        /><br></br>
      <button className="contact-button" type="submit" disabled={submitting}>Send</button>
    </form>
    </ShadowBox>
  );
};
 
export default ContactForm;