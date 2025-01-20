import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Gallery = () => {
  const images = [
    {
      url: "./cardImage2.jpg",
      height: "h-96",
    },
    {
      url: "./cardImage3.jpg",
      height: "h-64",
    },
    {
      url: "./cardImage4.jpg",
      height: "h-80",
    },
    {
      url: "./cardImage5.jpg",
      height: "h-72",
    },
    {
      url: "./nightCycling.jpg",
      height: "h-80",
    },
    {
      url: "./cardImage6.jpg",
      height: "h-96",
    },
    {
      url: "./cardImage7.jpg",
      height: "h-80",
    },
    {
      url: "./cardImage8.jpg",
      height: "h-72",
    },
    {
      url: "./cardImage9.jpg",
      height: "h-96",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          {/* <Link
            to="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link> */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-2 mb-4">
            Event Gallery
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Relive the memorable moments from our previous cyclothon events
            through these captivating images
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="transition-transform duration-300"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className={`w-full ${image.height} object-cover transform group-hover:scale-110 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
