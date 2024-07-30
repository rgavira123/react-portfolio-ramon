import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl"> Get In touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4 ">+34 633 499 454</p>
        <a>rgavison@gmail.com</a>
        <div>
          <a>ramgavsan@alum.us.es</a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/ramón-gavira-sánchez-8a65a5159/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rgavira123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
