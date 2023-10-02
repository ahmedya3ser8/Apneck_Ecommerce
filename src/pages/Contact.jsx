import ContactForm from "../components/contact/ContactForm";
import ContactLanding from "../components/contact/ContactLanding";
import ContactUs from "../components/contact/ContactUs";

function Contact() {
  return (
    <main className="overflow-hidden">
      <ContactLanding />
      <ContactUs />
      <ContactForm />
    </main>
  )
}

export default Contact;