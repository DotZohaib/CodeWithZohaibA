import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Simulate form submission (you can integrate your backend API here)
    console.log("Form data:", formData);

    // Set form submitted state to true to display the success message
    setFormSubmitted(true);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 md:flex md:justify-between">
        {/* Left side - Contact Info */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
            Let's talk
          </h2>
          <p className="mt-4">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <Link href="mailto:zuhaibalid@gmail.com" className="underline">
                zuhaibalid@gmail.com
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <Link href="tel:+923493237141" className="underline">
                +92 3493237141
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <p>Karachi, Sindh, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Get in touch
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Write your message here
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg hover:from-orange-600 hover:to-pink-600"
              >
                Submit now
              </button>
            </div>
          </form>

          {/* Success message */}
          {formSubmitted && (
            <div className="mt-6 p-4 text-center bg-green-500 text-white rounded-lg">
              Your form has been submitted successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
