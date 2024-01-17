import { FaMeta } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full flex flex-col md:flex-row justify-around items-center bg-slate-500 text-white p-4 md:p-8">
      <div className="flex flex-row justify-center items-center space-x-2 mb-4 md:mb-0">
        <FaMeta />
        <CiInstagram />
        <FaGoogle />
      </div>
      <nav className="flex justify-center space-x-2">
        <div className="hover:underline">
          About
        </div>
        <div className="hover:underline">
          Guide
        </div>
        <div className="hover:underline">
          Help
        </div>
      </nav>
      <div className="mt-4 md:mt-0">© Acme Inc. All rights reserved.</div>
    </div>
  );
}

export default Footer;
