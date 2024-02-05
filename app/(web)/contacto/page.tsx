import React from "react";
import ContactForm from "./form";

const ContactePage = () => {
  return (
    <div className="justify-center flex flex-col items-center gap-6 ">
      <h1 className="text-secondary-50 text-5xl">Contacto</h1>
      <ContactForm />
    </div>
  );
};

export default ContactePage;
