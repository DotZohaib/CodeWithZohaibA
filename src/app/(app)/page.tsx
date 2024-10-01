"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Typed from "typed.js";
import { motion } from "framer-motion";
import Link from "next/link";
import { ModeToggle } from "@/components/modeToggle";
import React from "react";

export default function Home() {
  const handleBuyNow = () => {
    toast.success("Proceed to the Login page.!");
  };

  const handleAddToCart = () => {
    toast.success("Proceed to the SignUp page.!");
  };

  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "Full Stack",
        "Mern Stack",
        "Artificial intelligence",
        "Machine Learning",
        "Deep Learning",
        "Natural Language",
        "Python",
        "Database Management",
        "Cyber Security",
        "Animation",
        "Data Science",
        "Network Programming",
        "Scripting",
        "Data Structures",
        "Hacker",
        "Graphics & Multimedia",
        "Testing & Quality",
        "Code Optimization",
        "Analysis",
        "C++",
        "C",
        "Algorithm",
        "API",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>CodeWithZOHAIB</title>
        <meta
          name="description"
          content="Learn web development and other software skills with Zohaib."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer />

      {/* Hero Section */}
        <div className="flex items-center justify-end md:p-7 p-2">
          <div><ModeToggle/></div>
        </div>
      <main className=" flex items-center justify-center">
        <div className="container md:w-[80vw] w-[100vw] mx-auto p-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left space-y-4"
            >
              <h1 className="text-5xl font-extrabold text-black animate-pulse">
                Hy, I’m <span className="text-pink-700">Zohaib</span>
              </h1>
              <p className="text-3xl font-semibold text-black">
                Welcome to{" "}
                <span className="text-purple-700 ">
                  CodeWithZOHAIB
                </span>
              </p>
              <h4 className="md:text-3xl text-2xl text-green-700 -ml-5 md:ml-0 -mr-5 md:mr-0 mt-4">
                Learn: <span className="font-bold text-blue-700" id="element"></span>
                <span className="typed-cursor typed-cursor--blink">|</span>
              </h4>
              <div className="mt-6 flex justify-center md:justify-start space-x-4">
                <Link
                  href="/sign-in"
                  onClick={handleBuyNow}

                  className="inline-block px-8 py-3 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  LOGIN
                </Link>
                <Link
                  href="/sign-up"
                  onClick={handleAddToCart}
                  className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  SIGN-UP
                </Link>
              </div>
            </motion.div>
            <div className="logo mb-8 md:mb-0">
              <Image
                src="/image/Facehfjdh.png"
                alt="Logo"
                width={300}
                height={300}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </main>

    
    </>
  );
}
