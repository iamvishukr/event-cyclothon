import React from "react"
import { motion } from "framer-motion"
import { FaBicycle } from "react-icons/fa"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center"
    >
      <div className="text-center text-white">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <FaBicycle className="text-8xl mb-6 inline-block" />
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Welcome to Cyclothon 2025
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Join us for an exciting ride towards a healthier future!
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Home

