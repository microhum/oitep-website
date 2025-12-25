"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    fullName: "",
    company: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Create email content
      const emailContent = `
Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}

Message:
${formData.subject}
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:hofahoff@gmail.com?subject=Contact Form: ${
        formData.subject
      }&body=${encodeURIComponent(emailContent)}`;

      // Open email client
      window.location.href = mailtoLink;

      setSubmitMessage("Opening your email client...");
      setTimeout(() => {
        setFormData({
          email: "",
          subject: "",
          fullName: "",
          company: "",
        });
        setSubmitMessage(
          "Thank you for your message! We'll get back to you soon."
        );
      }, 1000);
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-16">
      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We&#39;re here to answer any questions you might have about our
                products, research, or partnership opportunities. Reach out to
                us and we&#39;ll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="bg-meadow-1 rounded-full p-3">
                    <Phone className="h-6 w-6 text-meadow-3" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">0889945445</p>
                  <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM ICT</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="bg-meadow-1 rounded-full p-3">
                    <Mail className="h-6 w-6 text-meadow-3" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">hofahoff@gmail.com</p>
                  <p className="text-gray-500 text-sm">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="bg-meadow-1 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-meadow-3" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Location
                  </h3>
                  <p className="text-gray-600">Bangkok, Thailand</p>
                  <p className="text-gray-500 text-sm">
                    Available for virtual meetings worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                About OITEP
              </h3>
              <p className="text-gray-600 leading-relaxed">
                OITEP is pioneering breakthrough solutions for patients on
                sodium-restricted diets through cross-modal sensory triggers.
                Our innovative approach helps reduce salt cravings while
                maintaining food satisfaction.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name of Contact Person
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-meadow-2 focus:border-meadow-2 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-meadow-2 focus:border-meadow-2 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Agency / Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-meadow-2 focus:border-meadow-2 outline-none transition-colors"
                  placeholder="Company name (optional)"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Content to Inquire About *
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-meadow-2 focus:border-meadow-2 outline-none transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-meadow-2 hover:bg-meadow-3 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {submitMessage && (
              <div
                className={`mt-4 p-4 rounded-md ${
                  submitMessage.includes("Error")
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-green-50 text-green-700 border border-green-200"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
