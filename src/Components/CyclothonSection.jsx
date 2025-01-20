import React from "react";
import { motion } from "framer-motion";
import { FaBicycle, FaLeaf, FaHeart, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CyclothonSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const features = [
    {
      icon: FaBicycle,
      title: "Exciting Routes",
      description:
        "Experience breathtaking scenery along our carefully planned routes.",
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description:
        "Promote sustainability and reduce carbon footprint with every pedal.",
    },
    {
      icon: FaHeart,
      title: "Health Benefits",
      description:
        "Improve your fitness and overall well-being while having fun.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50"></div>
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
          variants={itemVariants}
        >
          Join Our Cyclothon!
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Be a part of an exciting adventure to promote health and
          sustainability.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl glass-effect"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4 mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <feature.icon className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CyclothonSection;
