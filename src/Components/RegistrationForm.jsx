import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBiking,
  FaCalendarAlt,
  FaHeartbeat,
  FaShieldAlt,
  FaIdCard,
  FaMapMarkerAlt,
} from "react-icons/fa"

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      navigate("/payment", { state: { registrationData: data } })
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
  }

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            {/* Event Banner */}
            <motion.div
              className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-lg text-white mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">Event Details</h3>
              <div className="flex items-center space-x-2 mb-2">
                <FaCalendarAlt />
                <span>9th Feb 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>Morabadi Ground, Ranchi</span>
              </div>
            </motion.div>

            <InputField
              icon={FaUser}
              label="Full Name"
              name="name"
              register={register}
              errors={errors}
              placeholder="Enter your full name"
              required="Name is required"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                icon={FaEnvelope}
                label="Email"
                name="email"
                type="email"
                register={register}
                errors={errors}
                placeholder="Enter your email"
                required="Email is required"
                pattern={{
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }}
              />

              <InputField
                icon={FaPhone}
                label="Phone Number"
                name="phone"
                type="tel"
                register={register}
                errors={errors}
                placeholder="Enter your phone number"
                required="Phone number is required"
                pattern={{
                  value: /^\d{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Age"
                name="age"
                type="number"
                register={register}
                errors={errors}
                placeholder="Enter your age"
                required="Age is required"
                min={{ value: 12, message: "Minimum age is 12 years" }}
              />

              <div className="relative">
                <label className="block text-gray-700 mb-2 font-medium">Gender</label>
                <select
                  {...register("gender", { required: "Please select your gender" })}
                  className="w-full pl-4 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <span className="text-red-500 text-sm mt-1">{errors.gender.message}</span>}
              </div>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            key="step2"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            <motion.div
              className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-lg text-white mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Choose Your Challenge</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold">25 KM Ride</h4>
                  <p className="text-sm">Perfect for beginners</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold">50 KM Ride</h4>
                  <p className="text-sm">For seasoned cyclists</p>
                </div>
              </div>
            </motion.div>

            <InputField
              icon={FaBiking}
              label="Select Your Category"
              name="category"
              register={register}
              errors={errors}
              required="Please select a category"
              as="select"
            >
              <option value="">Select Category</option>
              <option value="25km">25 KM Ride - ₹400</option>
              <option value="50km">50 KM Ride - ₹400</option>
            </InputField>

            <InputField
              icon={FaPhone}
              label="Emergency Contact"
              name="emergencyContact"
              type="tel"
              register={register}
              errors={errors}
              placeholder="Emergency contact number"
              required="Emergency contact is required"
              pattern={{
                value: /^\d{10}$/,
                message: "Please enter a valid 10-digit phone number",
              }}
            />

            <motion.div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4 flex items-center">
                <FaShieldAlt className="mr-2 text-green-600" />
                Important Guidelines
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Helmets are mandatory for all participants</li>
                <li>• Follow all event rules and regulations</li>
                <li>• Carry your own water bottle</li>
                <li>• Report at venue 30 minutes before start time</li>
              </ul>
            </motion.div>

            <div className="relative">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  {...register("acceptTerms", { required: "You must accept the terms and conditions" })}
                  className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500"
                />
                <span className="text-gray-700">I accept the terms and conditions</span>
              </label>
              {errors.acceptTerms && (
                <span className="text-red-500 text-sm mt-1 block">{errors.acceptTerms.message}</span>
              )}
            </div>
          </motion.div>
        )
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
    >
      {/* Decorative Bicycle Wheel Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-20" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full -ml-12 -mb-12 opacity-20" />

      <div className="relative">
        <div className="mb-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Join the Ride!
          </motion.h2>
          <motion.p
            className="text-center text-gray-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Register for i3 Foundation Cyclothon 2025
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-4 mt-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              1
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? "bg-red-600" : "bg-gray-200"}`} />
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              2
            </div>
          </motion.div>
          <div className="flex justify-between mt-2 px-4">
            <span className="text-sm text-gray-600">Personal Info</span>
            <span className="text-sm text-gray-600">Event Details</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">{renderFormStep()}</AnimatePresence>

          <motion.div
            className="flex justify-between mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300 flex items-center"
              >
                <span className="mr-2">←</span> Previous
              </button>
            )}
            {step < 2 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 ml-auto flex items-center"
              >
                Next <span className="ml-2">→</span>
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className={`px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Proceed to Payment <span className="ml-2">₹400</span>
                  </>
                )}
              </button>
            )}
          </motion.div>
        </form>
      </div>
    </motion.div>
  )
}

const InputField = ({
  icon: Icon,
  label,
  name,
  register,
  errors,
  required,
  pattern,
  as = "input",
  children,
  ...rest
}) => (
  <div className="relative">
    <label className="block text-gray-700 mb-2 font-medium">{label}</label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
      {as === "select" ? (
        <select
          {...register(name, { required, pattern })}
          className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300`}
          {...rest}
        >
          {children}
        </select>
      ) : (
        <input
          {...register(name, { required, pattern })}
          className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300`}
          {...rest}
        />
      )}
    </div>
    {errors[name] && <span className="text-red-500 text-sm mt-1">{errors[name].message}</span>}
  </div>
)

export default RegistrationForm

