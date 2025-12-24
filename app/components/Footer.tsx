import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/static/logo/logo.svg"
                alt="OITEP Logo"
                width={40}
                height={20}
                className="h-8 w-auto mr-3"
              />
              <span className="text-xl font-bold text-white">OITEP</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Reducing salt cravings through cross-modal sensory triggers, 
              providing breakthrough solutions for patients on sodium-restricted diets.
            </p>
            <div className="flex items-center space-x-2">
              <Image
                src="/static/Elements/Awards/Siriraj_Hosptital.png"
                alt="Siriraj Hospital"
                width={20}
                height={20}
                className="h-5 w-auto object-contain"
              />
              <span className="text-xs text-gray-400">
                In partnership with Siriraj Hospital
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-gray-300 hover:text-meadow-3 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-meadow-3 transition-colors duration-200 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#research" className="text-gray-300 hover:text-meadow-3 transition-colors duration-200 text-sm">
                  Science & Research
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-meadow-3 transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-meadow-3 transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#beef-odor" className="text-gray-300 hover:text-meadow-3 transition-colors duration-200 text-sm">
                  Beef Odor (1.5x Impulse)
                </Link>
              </li>
              <li>
                <Link href="#sea-breeze" className="text-gray-300 hover:text-meadow-3 transition-colors duration-200 text-sm">
                  Sea Breeze (1.2x Impulse)
                </Link>
              </li>
              <li>
                <Link href="#research" className="text-gray-300 hover:text-meadow-3 transition-colors duration-200 text-sm">
                  Clinical Studies
                </Link>
              </li>
              <li>
                <Link href="#safety" className="text-gray-300 hover:text-meadow-3 transition-colors duration-200 text-sm">
                  Safety Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact & Legal</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-2 text-meadow-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@oitep.com</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-2 text-meadow-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 00.836-.986V17a1 1 0 01-1 1h-2zM7 9a1 1 0 100-2 0 1 1 0 000 2zm7 0a1 1 0 100-2 0 1 1 0 000 2z" />
                </svg>
                <span>+66 2 123 4567</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-2 text-meadow-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l3.05-4.95a7 7 0 10.9-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Bangkok, Thailand</span>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Link href="#privacy" className="text-gray-400 hover:text-meadow-3 transition-colors duration-200 text-xs">
                Privacy Policy
              </Link>
              <span className="text-gray-500 mx-2">•</span>
              <Link href="#terms" className="text-gray-400 hover:text-meadow-3 transition-colors duration-200 text-xs">
                Terms of Service
              </Link>
              <span className="text-gray-500 mx-2">•</span>
              <Link href="#disclaimer" className="text-gray-400 hover:text-meadow-3 transition-colors duration-200 text-xs">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 OITEP. All rights reserved. Developed in partnership with Siriraj Hospital.
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-400 text-xs">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 003.956 0 3.066 3.066 0 001.745.723 3.066 3.066 0 00-3.956 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 00-3.956 0 3.066 3.066 0 00-1.745.723A3.066 3.066 0 006.267 3.455zM3.455 6.267a3.066 3.066 0 10-1.745 3.956 3.066 3.066 0 001.745 3.956 3.066 3.066 0 003.956-1.745 3.066 3.066 0 00-1.745-3.956zM12 6a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
                </svg>
                FDA Approved
              </div>
              <div className="flex items-center text-gray-400 text-xs">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Clinically Tested
              </div>
              <div className="flex items-center text-gray-400 text-xs">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 .646-.09 1.277-.233 1.864-.432l.236.009.09.003.028-.066.09-.203-.066-.33 0-.717-.506-1.358-.506-2.074 0-.654.134-1.281.37-1.864l.004-.018a8.21 8.21 0 00-.215-.732l-.174-.642-.033-.194c-.03-.167-.052-.327-.08-.491a7.904 7.904 0 00-.155-.641l-.078-.292a13.485 13.485 0 00-.034-.119c-.046-.15-.103-.296-.17-.438-.075-.142-.15-.28-.225-.414-.187-.467-.38-.715-.618-.958-.894-1.364-.277-.585-.5-1.18-.598-1.782 0-.465.021-.923.09-1.363.235l-.008.003A7.527 7.527 0 004.52 2.336a7.533 7.533 0 003.938 3.54 7.505 7.505 0 002.938-3.54 7.55 7.55 0 004.52-2.336c.695-.276 1.341-.694 1.912-1.178z" clipRule="evenodd" />
                </svg>
                Peer Reviewed
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-linear-to-r from-meadow-3 to-meadow-2 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Ready to Transform Patient Nutrition?
          </h3>
          <p className="text-meadow-100 mb-4">
            Join healthcare providers worldwide using OITEP to improve patient satisfaction and adherence to sodium-restricted diets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-meadow-3 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Request Demo
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-meadow-3 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Download Research
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
