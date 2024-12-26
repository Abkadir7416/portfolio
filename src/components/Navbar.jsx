import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import Link from 'react'
import { Link } from "react-router-dom";
// import logo from '../assets/kevinRushLogo.png'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="mx-2 w-15 ">
          {/* <img src={logo} alt="" /> */}
          <span className="text-3xl">Abdul</span>
        </div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        
         {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/abdul-kadir-25b3a4232" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-4xl text-blue-600 hover:text-blue-800" />
      </a>

      {/* GitHub */}
      <a href="https://github.com/Abkadir7416" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-4xl text-white hover:text-gray-300" />
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/abdul_quadir_04" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-4xl text-pink-500 hover:text-pink-700" />
      </a>

      </div>
    </nav>
  );
};

export default Navbar;
