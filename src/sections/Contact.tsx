import { useRef, useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import type { JSX } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import SectionTitle from "../components/SectionTitle";

interface ContactLink {
  id: number;
  address: string;
  link: string;
  icon: JSX.Element;
  color: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const contacts = [
    {id: 1, address: "linkedin.com/in/arthur-bender", link: "https://linkedin.com/in/arthur-bender", icon: <FaLinkedinIn />, color: "#0a66c2"},
    {id: 2, address: "arthurllbender@gmail.com", link: "mailto:arthurllbender@gmail.com", icon: <SiGmail />, color: "#ea4335"},
    {id: 3, address: "github.com/arthurbender", link: "https://github.com/arthurbender", icon: <FaGithub />, color: "#aaaaaa"},
  ] as ContactLink[];

  const fieldClasses = "w-full p-2 bg-white rounded-lg text-black";
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [captchaSuccess, setCaptchaSuccess] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;
    if (!emailJsPublicKey) {
      alert("EmailJS public key not found!");
      return;
    }

    emailjs.sendForm(
      "service_7zyen6g",
      "template_h1s51ms",
      formRef.current!,
      emailJsPublicKey
    );

    alert("Email sent successfully!");
  }

  const handleCaptchaChange = (token: string | null) => {
    if (token) {
      setCaptchaSuccess(true);
    }
  };

  return (
    <div className="section pb-12" id="contact">
      <SectionTitle title="Contact" description="Get in touch with me anytime!" />

      <div className="relative">
        <hr className="hidden lg:block absolute border-2 border-text w-1/2 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-0"/>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 z-10 relative">
          <div className="flex flex-col gap-6 items-start border-2 border-text rounded-xl w-fit h-fit m-auto p-6 bg-surface">
            <h2 className="text-3xl text-center font-semibold mb-2 text-text">Find me in:</h2>

            {contacts.map((contact) => (
              <a href={contact.link} key={contact.id} target="_blank" rel="noreferrer" className="flex gap-4 items-center">
                <span style={{backgroundColor: contact.color}} className="p-1 rounded text-white sm:text-2xl">{contact.icon}</span>
                <span style={{color: contact.color}} className="text-lg">{contact.address}</span>
              </a>
            ))}
          </div>

          <form className="border-2 border-text text-text rounded-xl p-6 flex flex-col gap-4 bg-surface" onSubmit={handleSubmit} ref={formRef}>
            <h2 className="text-3xl text-center font-semibold mb-2">Send me a message:</h2>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName">* First Name</label>
                <input type="text" id="firstName" name="firstName" className={fieldClasses} required />
              </div>

              <div className="flex-1">
                <label htmlFor="lastName">* Last Name</label>
                <input type="text" id="lastName" name="lastName" className={fieldClasses} required  />
              </div>
            </div>

            <div>
              <label htmlFor="email">* Email</label>
              <input type="email" id="email" name="email" className={fieldClasses} required />
            </div>

            <div>
              <label htmlFor="subject">* Subject</label>
              <input type="text" id="subject" name="subject" className={fieldClasses} required />
            </div>

            <div>
              <label htmlFor="subject">* Message</label>
              <textarea rows={4} id="subject" name="message" className={fieldClasses} required />
            </div>

            <div className="flex justify-center">
              <div className="scale-[0.95] sm:scale-100 origin-top">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                  onExpired={() => setCaptchaSuccess(false)}
                />
              </div>
            </div>

            <button type="submit" className={`p-2 bg-primary text-background rounded-lg ${!captchaSuccess ? "opacity-50": "hover:bg-accent cursor-pointer"}`} disabled={!captchaSuccess}>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;