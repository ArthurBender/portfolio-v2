import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import type { JSX } from "react";

interface ContactLink {
  id: number;
  address: string;
  link: string;
  icon: JSX.Element;
  color: string;
}

const Contact = () => {
  const contacts = [
    {id: 1, address: "linkedin.com/in/arthur-bender", link: "https://linkedin.com/in/arthur-bender", icon: <FaLinkedinIn />, color: "#0a66c2"},
    {id: 2, address: "arthurllbender@gmail.com", link: "mailto:arthurllbender@gmail.com", icon: <SiGmail />, color: "#ea4335"},
    {id: 3, address: "github.com/arthurbender", link: "https://github.com/arthurbender", icon: <FaGithub />, color: "#aaaaaa"},
  ] as ContactLink[];

  const fieldClasses = "w-full p-2 bg-white rounded-lg text-black";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div className="section">
      <div className="grid grid-cols-2 gap-12">
        <div className="flex flex-col gap-6 items-center py-10">
          {contacts.map((contact) => (
            <a href={contact.link} key={contact.id} target="_blank" rel="noreferrer" className="flex gap-4 items-center">
              <span style={{backgroundColor: contact.color}} className="p-1 rounded text-white text-2xl">{contact.icon}</span>
              <span style={{color: contact.color}} className="text-lg">{contact.address}</span>
            </a>
          ))}
        </div>

        <form className="border-2 border-white text-white rounded-xl p-4 flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName">* First Name</label>
              <input type="text" id="firstName" className={fieldClasses} required />
            </div>

            <div className="flex-1">
              <label htmlFor="lastName">* Last Name</label>
              <input type="text" id="lastName" className={fieldClasses} required  />
            </div>
          </div>

          <div>
            <label htmlFor="email">* Email</label>
            <input type="email" id="email" className={fieldClasses} required />
          </div>

          <div>
            <label htmlFor="subject">* Subject</label>
            <input type="text" id="subject" className={fieldClasses} required />
          </div>

          <div>
            <label htmlFor="subject">* Message</label>
            <textarea rows={4} id="subject" className={fieldClasses} required />
          </div>

          <button type="submit" className="p-2 bg-primary hover:bg-dark rounded-lg cursor-pointer">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;