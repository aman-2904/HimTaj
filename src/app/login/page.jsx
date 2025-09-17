"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiEye, HiEyeOff, HiX } from "react-icons/hi";

// --- Reusable Input Component ---
const Input = ({
  id,
  label,
  type,
  value,
  onChange,
  showPassword,
  onToggleVisibility,
}) => (
  <div className="relative">
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full pb-2 border-b border-gray-300 bg-transparent text-black outline-none focus:border-black peer transition-colors"
      placeholder=" " // Required for floating label
    />
    <label
      htmlFor={id}
      className="absolute left-0 -top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-gray-500 peer-focus:text-sm"
    >
      {label}*
    </label>
    {onToggleVisibility && (
      <button
        type="button"
        onClick={onToggleVisibility}
        className="absolute right-0 top-0 text-gray-500"
      >
        {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
      </button>
    )}
  </div>
);

// --- Main Auth Component ---
const Login = () => {
  const [view, setView] = useState("main"); // 'main' or 'signup'
  const [showPassword, setShowPassword] = useState(false);

  // --- Selection states ---
  const [loginMethod, setLoginMethod] = useState("email"); // 'email' or 'phone'
  const [signupMethod, setSignupMethod] = useState("email"); // 'email' or 'phone'

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center font-sans text-gray-800 p-4">
      <div className="w-full max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {view === "main" && (
            <motion.div
              key="main"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              className="flex flex-col"
            >
              {/* --- Login Section --- */}
              <h2 className="text-2xl mb-6">I have an account</h2>

              {/* Choose Login Method */}
              <div className="flex space-x-6 mb-6 text-sm">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="email"
                    checked={loginMethod === "email"}
                    onChange={() => setLoginMethod("email")}
                    className="mr-2"
                  />
                  Email
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="phone"
                    checked={loginMethod === "phone"}
                    onChange={() => setLoginMethod("phone")}
                    className="mr-2"
                  />
                  Phone Number
                </label>
              </div>

              <form className="space-y-10">
                {loginMethod === "email" ? (
                  <Input id="login-email" label="Email" type="email" />
                ) : (
                  <Input id="login-phone" label="Phone Number" type="tel" />
                )}

                <Input
                  id="login-password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  showPassword={showPassword}
                  onToggleVisibility={() => setShowPassword(!showPassword)}
                />
                <div className="flex justify-between items-center text-sm">
                  <a href="#" className="hover:underline">
                    Forgot password?
                  </a>
                  <div className="flex items-center">
                    <input type="checkbox" id="remember-me" className="mr-2" />
                    <label htmlFor="remember-me">Remember me</label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-br from-rose-300 via-amber-50 to-orange-300 text-black font-bold tracking-widest "
                >
                  LOG IN
                </button>
              </form>

              {/* --- Create Account Button --- */}
              <div className="mt-6">
                <p className="text-center text-gray-600 mb-2">
                  Not a member yet?
                </p>
                <button
                  onClick={() => setView("signup")}
                  className="w-full py-3 bg-gradient-to-br from-rose-300 via-amber-50 to-orange-300 text-black font-bold tracking-widest"
                >
                  CREATE YOUR ACCOUNT
                </button>
              </div>
            </motion.div>
          )}

          {view === "signup" && (
            <motion.div
              key="signup"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              className="w-full relative"
            >
              <HiX
                onClick={() => setView("main")}
                className="absolute top-0 right-0 cursor-pointer text-gray-600 hover:text-black"
                size={24}
              />
              <h2 className="text-3xl mb-10">Create new account</h2>

              {/* Choose Signup Method */}
              <div className="flex space-x-6 mb-6 text-sm">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="email"
                    checked={signupMethod === "email"}
                    onChange={() => setSignupMethod("email")}
                    className="mr-2"
                  />
                  Email
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="phone"
                    checked={signupMethod === "phone"}
                    onChange={() => setSignupMethod("phone")}
                    className="mr-2"
                  />
                  Phone Number
                </label>
              </div>

              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input id="first-name" label="First Name" type="text" />
                  <Input id="last-name" label="Last Name" type="text" />

                  {signupMethod === "email" ? (
                    <Input id="signup-email" label="Email" type="email" />
                  ) : (
                    <Input id="signup-phone" label="Phone Number" type="tel" />
                  )}

                  <Input
                    id="signup-password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    showPassword={showPassword}
                    onToggleVisibility={() => setShowPassword(!showPassword)}
                  />
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                  <p>
                    Having read and understood the Privacy Information Notice, I
                    declare that I am over 16 years of age and:
                  </p>
                  <div className="flex items-start">
                    <input type="checkbox" id="privacy1" className="mt-1 mr-2" />
                    <label htmlFor="privacy1">
                      I agree to share information regarding my interests,
                      preferences and purchasing habits (profiling) based on my
                      purchases made at Bvlgari and other LVMH Maisons.
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" id="privacy2" className="mt-1 mr-2" />
                    <label htmlFor="privacy2">
                      I consent to receiving marketing communications from
                      Bvlgari regarding product care, services, events, and new
                      collections.
                    </label>
                  </div>
                </div>

                <p className="text-xs text-gray-500">*Required fields</p>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-br from-rose-300 via-amber-50 to-orange-300 text-black font-bold tracking-widest "
                >
                  SUBMIT
                </button>

                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setView("main")}
                    className="font-bold hover:underline"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Login;
 