import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaClock,
  FaMapMarkerAlt,
  FaCheck,
  FaInfoCircle,
  FaUsers,
  FaRoute,
  FaShieldAlt,
  FaBicycle,
} from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import RegistrationForm from "../components/RegistrationForm";
import cyclothonBackground from "../assets/cyclothonBackground.jpg";
import cyclothonBackground2 from "../assets/cyclothonBackground2.jpg";
import CyclothonSection from "./CyclothonSection";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

const CyclothonLanding = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const images = [cyclothonBackground, cyclothonBackground2];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1); // Set direction to forward
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section with Carousel */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            i3 Foundation Cyclothon 2025
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl mb-8 text-gray-200 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join us for a ride that matters - Promoting health and environmental
            awareness
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#register"
              className="bg-[#DC3545] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300 inline-block transform hover:scale-105"
            >
              Register Now
            </a>
          </motion.div>
        </div>

        {/* Animated bicycle icon */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <FaBicycle className="text-white text-8xl -translate-x-8 -translate-y-8" />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* New Heading */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800">
              Register Now for the Cyclothon!
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Gear up for an unforgettable ride on 9th February and join us in
              celebrating International Youth Day with the spirit of fitness and
              unity! 🎉
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Event Details Column */}
            <motion.div className="bg-gradient-to-br from-red-500 to-red-700 p-8 rounded-2xl shadow-lg">
            
              <div className="space-y-6">
                {/* Event Details */}
                {/* Event Details Column */}
                <motion.div
                  className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg"
                >
                  <h2 className="text-3xl font-bold mb-8 text-gray-800">
                    Event Highlights
                  </h2>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <FaCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          <span className="font-semibold">25 KM Ride</span> –
                          Perfect for beginners and fitness enthusiasts
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FaCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          <span className="font-semibold">50 KM Ride</span> – A
                          thrilling challenge for seasoned cyclists
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FaCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                          Explore scenic routes and celebrate community fitness
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <FaClock className="text-blue-500 text-xl" />
                        <p className="text-gray-700">
                          <span className="font-semibold">Date:</span> 9th
                          February 2025
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="text-blue-500 text-xl" />
                        <p className="text-gray-700">
                          <span className="font-semibold">Starting Point:</span>{" "}
                          Morabadi Ground, Ranchi
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Who can participate?
                      </h3>
                      <p className="text-gray-700 mb-4">
                        All age groups and skill levels are welcome! Whether
                        you're a seasoned cyclist or a beginner, this event is
                        for YOU.
                      </p>
                      <div className="flex items-center space-x-2 text-green-600 font-semibold">
                        <FaInfoCircle />
                        <p>Registration Fees: ₹400/-</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                        <FaHelmetSafety className="mr-2" />
                        Important Guidelines
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <FaCheck className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            Helmets are mandatory for all participants to ensure
                            safety.
                          </p>
                        </li>
                        <li className="flex items-start space-x-3">
                          <FaCheck className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
                          <p className="text-gray-700">
                            Follow all event rules and regulations for a smooth
                            ride.
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="text-center bg-green-50 rounded-xl p-6">
                      <p className="text-lg font-semibold text-green-800 mb-2">
                        Limited slots available!
                      </p>
                      <p className="text-gray-700">
                        Don't miss this exciting opportunity to pedal towards
                        health, fitness, and fun. 🚴💪
                      </p>
                      <p className="text-sm text-gray-500 mt-4">*T&C apply</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Registration Form Column */}
            <motion.div
              transition={{ delay: 0.3 }}
              id="register"
              className="sticky top-8"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Register Now
              </h2>
              <RegistrationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remaining sections */}
      {/* <RegistrationForm /> */}
      <CyclothonSection />
      <Gallery />
    </div>
  );
};

export default CyclothonLanding;
