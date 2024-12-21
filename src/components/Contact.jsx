import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faComment, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    formData.append("access_key", "b9aa9232-bd08-46ab-a035-0273b5ec10ac");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());
  
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully. Thank you! I will get in touch with you shortly",
        });
        event.target.reset(); // Reset the form after submission
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error sending message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Unexpected Error",
        text: "An unexpected error occurred. Please try again.",
      });
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section - Get in Touch */}
          <motion.div
            className="flex-1 bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-teal-500" />
              Get in Touch
            </h2>
            <p className="text-lg mb-6 text-center">Feel free to contact me through any of the following methods:</p>
            <div className="flex flex-col items-center space-y-6">
              {/* Gmail */}
              <motion.div
                className="flex items-center space-x-3 text-lg border-b border-gray-600 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
                <a href="mailto:kedharmatha999@gmail.com" className="hover:underline">
                  kedharmatha999@gmail.com
                </a>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                className="flex items-center space-x-3 text-lg border-b border-gray-600 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
                <a
                  href="https://www.linkedin.com/in/kedhareswar-matha-436803254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center space-x-3 text-lg border-b border-gray-600 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="text-blue-400" />
                <a href="tel:+917981928720" className="hover:underline">
                  +91 7981928720
                </a>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center space-x-3 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="text-blue-400" />
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            className="flex-1 bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faComment} size="lg" className="text-teal-500" />
              Contact Me
            </h2>
            <p className="text-lg text-center mb-8">Feel free to reach out for collaborations or inquiries. I’d love to connect!</p>

            {/* Contact Form */}
            <form onSubmit={onSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
