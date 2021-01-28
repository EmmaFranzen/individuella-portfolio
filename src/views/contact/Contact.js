import React, { Component } from 'react';

import ContactForm from "../../components/contact-form/ContactForm";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>This is contact!</h1>
                <ContactForm></ContactForm>
            </div>
         );
    }
}
 
export default Contact;