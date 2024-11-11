import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope);

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  const toolsStyle =
    "hover:bg-transparent  border-2 border-blue-950 hover:border-blue-600 transition-all  duration-500";

  return (
    <div
      id="contact"
      ref={ref}
      className="h-screen flex items-center justify-center"
    >
      <div className=" flex flex-col items-center justify-center text-center w-1/2">
        <div className={`w-4/5 bg-blue-950 p-7 rounded-xl ${toolsStyle}`}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
          <h1 className="text-slate-100">email</h1>
          <h1 className="text-slate-100 mb-7">britocoding@gmail.com</h1>
          <a
            className="px-5 py-2 border-solid border-2 border-slate-200 text-slate-200 rounded-md m-2"
            href="mailto:britocoding@gmail.com"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
