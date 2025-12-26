"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function ContactSection() {
  const { translations } = useLocale();
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
        setSubmitMessage(translations.contactSection.thankYou);
      }, 1000);
    } catch (error) {
      setSubmitMessage(translations.contactSection.errorMessage);
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
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="bg-meadow-1 rounded-full p-3">
                    <Phone className="h-6 w-6 text-meadow-3" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{translations.contactSection.phone}</h3>
                  <p className="text-gray-600">{translations.contactSection.phoneNumber}</p>
                  <p className="text-gray-500 text-sm">{translations.contactSection.phoneHours}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="bg-meadow-1 rounded-full p-3">
                    <Mail className="h-6 w-6 text-meadow-3" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{translations.contactSection.email}</h3>
                  <p className="text-gray-600">{translations.contactSection.emailAddress}</p>
                  <p className="text-gray-500 text-sm">
                    {translations.contactSection.emailResponse}
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
                    {translations.contactSection.location}
                  </h3>
                  <p className="text-gray-600">{translations.contactSection.locationAddress}</p>
                  <p className="text-gray-500 text-sm">
                    {translations.contactSection.locationVirtual}
                  </p>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {translations.contactSection.aboutOitep}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {translations.contactSection.aboutOitepDescription}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {translations.contactSection.sendMessage}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {translations.contactSection.fullName}
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
                  {translations.contactSection.emailLabel}
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
                  {translations.contactSection.company}
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
                  {translations.contactSection.content}
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-meadow-2 focus:border-meadow-2 outline-none transition-colors resize-none"
                  placeholder={translations.contactSection.contentPlaceholder}
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
                    <span>{translations.contactSection.sending}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>{translations.contactSection.sendMessageBtn}</span>
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
