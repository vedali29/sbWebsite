import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaLink,
} from "react-icons/fa"; // Importing the required icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" bg-slate-900 mt-10">
        <div className="flex flex-row">
          <div className="basis-2/3  m-10 md:ml-32 text-white flex flex-col">
            <div className="mb-4">
              <span className="w-max md:text-3xl">
                <strong>Sustainable Bhava</strong>
              </span>
            </div>
            <div className="md:text-xl">
              <Link to="/contact">Our Team</Link>
            </div>
            <div className="md:text-xl">
              <Link to="/about">About Us</Link>
            </div>
            <div className="md:text-xl">
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="md:text-xl">
              <Link to="/contact">Privacy Policy</Link>
            </div>
            <div className="md:text-xl">
              <Link to="/contact">Terms & Conditions</Link>
            </div>
          </div>
          <div className="basis-1/3 my-10 md:ml-32 text-white flex flex-col">
          <div className="bg-slate-800 rounded-lg w-min p-4 m-2 mb-10 hover:scale-105 duration-300 hover:bg-slate-700"><button className="w-max">Download Our App</button></div>

            <div className="hidden md:block">
              <strong>Connect on Social Media</strong>
            </div>
            <div className="md:hidden m-2">
              <span>
                <strong>Connect on Socials</strong>
              </span>
            </div>
            <div>
              <div className="my-1 md:text-xl flex items-center m-2">
                <FaInstagram className="mr-2" />
                <FaLinkedin className="mr-2" />
                {/* <span>@ecoisticpathshala</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
