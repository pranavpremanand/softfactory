import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { allServices, clientDetails, logo } from "../../constants";
import img from "../../assets/footer-bg.webp";

const Footer = () => {
  return (
    <footer className="py-[3rem] text-white relative bg-black z-0">
      <img
        src={img}
        className="absolute inset-0 h-full w-full object-cover opacity-30 z-[1] blur-sm"
        alt=""
      />
      <div className="wrapper mx-auto px-5 sm:px-10 flex flex-col gap-3 sm:flex-row-reverse justify-between relative z-[2]">
        <div className="flex flex-col gap-8 items-start">
          <img
            fetchPriority="high"
            src={logo}
            width="150"
            height="100"
            alt="logo"
            className="w-[15rem] object-contain bg-white rounded-xl"
          />
          <div className="flex mt-3 gap-5 items-center">
            <Link to={clientDetails.linkedin}>
              <FaLinkedinIn className="text-2xl" />
            </Link>
            <Link to={clientDetails.instagram}>
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link to={clientDetails.facebook}>
              <GrFacebookOption className="text-2xl" />
            </Link>
            <Link to={clientDetails.twitter}>
              <FaTwitter className="text-2xl" />
            </Link>
          </div>
          <div className="space-y-2 flex flex-col">
            <Link to={`mailto:${clientDetails.email}`} className="">
              {clientDetails.email}
            </Link>
            <Link to={`tel:${clientDetails.phone}`} className="">
              {clientDetails.phone}
            </Link>
            <p className="max-w-[20rem]">{clientDetails.address}</p>
          </div>
        </div>
        <div className="flex flex-col mt-6 sm:mt-0 sm:flex-row gap-7 md:gap-14">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Our Services</p>
            {allServices.map((item) => (
              <Link
                key={item.id}
                to={`/services/${item.title}`}
                className="cursor-pointer"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Quick Links</p>
            <Link to="/about-us" className="cursor-pointer">
              About Us
            </Link>
            <Link to="/services" className="cursor-pointer">
              Services
            </Link>
            <Link to="/blogs" className="cursor-pointer">
              Blogs
            </Link>
            <Link to="/contact-us" className="cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
