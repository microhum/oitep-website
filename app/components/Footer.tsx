"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function Footer() {
  const { translations } = useLocale();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/static/logo/logo.svg"
                alt="OITEP Logo"
                width={40}
                height={20}
                className="h-8 w-auto mr-3 text-white"
              />
              <span className="text-xl font-bold text-white">OITEP</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {translations.footer.description}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {translations.footer.contact}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-2 text-meadow-3" />
                <span>0889945445</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-2 text-meadow-3" />
                <span>hofahoff@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-meadow-3" />
                <span>Bangkok, Thailand</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <div className="space-y-2">
              <Link
                href="#privacy"
                className="text-gray-400 hover:text-meadow-3 transition-colors duration-200 text-sm block"
              >
                {translations.footer.privacyPolicy}
              </Link>
              <Link
                href="#terms"
                className="text-gray-400 hover:text-meadow-3 transition-colors duration-200 text-sm block"
              >
                {translations.footer.termsOfService}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              {translations.footer.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
