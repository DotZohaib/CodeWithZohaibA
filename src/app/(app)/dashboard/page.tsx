"use client";
import { useEffect, useState } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaBlog,
  FaServicestack,
  FaGithub,
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import { IoIosContacts, IoIosLogOut } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { FaSquareUpwork, FaWhatsapp, FaBarsProgress } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import ExperienceBar from "@/components/ExperienceBar";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import LatestWork from "@/components/LatestWork";
import Contact from "@/components/Contact";
import HomePage from "@/components/HomePage";
import { signOut } from "next-auth/react";
// import Navbar from '@/components/Navbar';

export default function deshboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <Navbar/> */}
      <div>
        {/* Menu button for mobile */}
        <button
          className="fixed top-4 left-4 z-50  text-3xl lg:hidden"
          onClick={toggleMenu}
          id="menuBtn"
        >
          <FaBarsProgress />
        </button>

        {/* Sidebar */}
        <header
          className={`fixed top-0 left-0 bottom-0 w-64 p-4 bg-gray-900 z-50 transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <span
            className="text-white text-2xl flex justify-end p-2 lg:hidden"
            onClick={toggleMenu}
          >
            <RxCross1 />
          </span>
          <div className="text-center">
            <Image
              src="/image/IMG-PHOTO-ART-1095822713.jpg"
              alt=""
              width={170}
              height={110}
              className="rounded-full mx-auto"
            />
            <h1 className="text-white font-semibold mt-4">
              <b>ZOHAIB ALI</b>
            </h1>
            <div className="flex justify-center space-x-2 mt-6">
              <Link
                href="https://www.linkedin.com/in/zuhaib-dayo-7862261b5/"
                className="social-icon text-blue-500 transition-transform transform scale-110"
              >
                <FaLinkedin className="text-xl" />
              </Link>
              <Link
                href="https://github.com/DotZohaib"
                className="social-icon text-gray-800 transition-transform transform scale-110"
              >
                <FaGithub className="text-xl" />
              </Link>
              <Link
                href="https://www.fiverr.com/zuhaibdayo926"
                className="social-icon text-blue-400 transition-transform transform scale-110"
              >
                <SiFiverr className="text-xl" />
              </Link>
              <Link
                href="https://www.upwork.com/search"
                className="social-icon text-green-600 transition-transform transform scale-110"
              >
                <FaSquareUpwork className="text-xl" />
              </Link>
              <Link
                href="https://www.instagram.com/zuhaibalid/"
                className="social-icon text-pink-600 transition-transform transform scale-110"
              >
                <FaInstagramSquare className="text-xl" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100090930050044"
                className="social-icon text-blue-600 transition-transform transforscale-110"
              >
                <FaFacebookSquare className="text-xl" />
              </Link>
              <Link
                href="https://www.youtube.com/@CodeWithZohaib"
                className="social-icon text-red-600 transition-transform transform scale-110"
              >
                <FaYoutube className="text-xl" />
              </Link>
              <Link
                href="https://www.whatsapp.com/search"
                className="social-icon text-green-500 transition-transform transform scale-110"
              >
                <FaWhatsapp className="text-xl" />
              </Link>
            </div>
          </div>

          <nav className="mt-8">
            <ul>
              <li>
                <Link
                  className="text-gray-400 flex items-center mt-7 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:scale-105"
                  href="#info"
                >
                  <FaHome className="mr-2 text-blue-700" /> Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 flex items-center mt-7 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:scale-105"
                  href="#about"
                >
                  <ImProfile className="mr-2 text-green-700" /> About Me
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 flex items-center mt-7 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:scale-105"
                  href="#plot"
                >
                  <FaBlog className="mr-2 text-pink-700" /> Blog Me
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 flex items-center mt-7 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:scale-105"
                  href="#fact"
                >
                  <FaServicestack className="mr-2 text-purple-700" /> Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 flex items-center mt-7 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:scale-105"
                  href="#Contact"
                >
                  <IoIosContacts className="mr-2 text-yellow-700" /> Contact Me
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the default anchor link behavior
                    signOut({ callbackUrl: "/" }); // Trigger the sign-out
                  }}
                  href="#" // Provide href to avoid errors, but it's overridden by onClick
                  className="text-gray-400 flex items-center mt-7 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:scale-105"
                >
                  <IoIosLogOut className="mr-2 text-red-700" /> Logout
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="ml-0 lg:ml-64">
        <HomePage />
        <hr />
        <hr className="mb-10 lg:mb-20" />
        <AboutSection />
        <ExperienceBar />
        <Services />
        <LatestWork />
        <Contact />
      </div>
    </div>
  );
}
