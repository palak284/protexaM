import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} AI Email Layer. All rights reserved.
        </div>

        {/* Center: Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/docs" className="hover:text-white transition-colors duration-200">
            Docs
          </Link>
          <Link to="/privacy" className="hover:text-white transition-colors duration-200">
            Privacy
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Right: Social icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:support@aiemaillayer.com"
            className="hover:text-white transition-colors duration-200"
          >
            <MdMail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Optional subtle bottom line */}
      <div className="h-px bg-gray-800"></div>
    </footer>
  );
}
