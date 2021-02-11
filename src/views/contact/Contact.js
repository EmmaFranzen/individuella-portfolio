import React, { Component } from 'react';

import ContactForm from "../../components/contact-form/ContactForm";

import "./Contact.css";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="contact-page">
                <h1>Feel free to contact me!</h1>
                <ContactForm></ContactForm>
            </div>
         );
    }
}
 
export default Contact;