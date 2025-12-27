"use client";

import Image from "next/image";
import {
  BarChart3,
  TrendingUp,
  Shield,
  CheckCircle,
  Download,
} from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function ProofSection() {
  const { translations } = useLocale();
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {translations.proofSection.sectionTitle}
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image
              src="/static/Elements/Awards/Siriraj_Hosptital.png"
              alt="Siriraj Hospital"
              width={40}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <span className="text-lg md:text-xl text-gray-600 font-medium">
              {translations.proofSection.pilotStudy}
            </span>
          </div>
        </div>

        {/* Validation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Beta Rhythm Card */}
          <div className="bg-linear-to-br from-meadow-50 to-meadow-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border border-meadow-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-meadow-3 rounded-full flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {translations.proofSection.betaRhythm}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {translations.proofSection.betaDescription}
            </p>
            <div className="mt-4 pt-4 border-t border-meadow-200">
              <div className="flex items-center text-sm text-meadow-3 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                {translations.proofSection.eegAnalysis}
              </div>
            </div>
          </div>

          {/* 1.5x Impulse Card */}
          <div className="bg-linear-to-br from-meadow-50 to-meadow-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border border-meadow-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-meadow-3 rounded-full flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {translations.proofSection.impulseTitle}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {translations.proofSection.impulseDescription}
            </p>
            <div className="mt-4 pt-4 border-t border-meadow-200">
              <div className="flex items-center text-sm text-meadow-3 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                {translations.proofSection.neuroResponse}
              </div>
            </div>
          </div>

          {/* Safety Profile Card */}
          <div className="bg-linear-to-br from-meadow-50 to-meadow-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border border-meadow-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-meadow-3 rounded-full flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {translations.proofSection.safetyTitle}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {translations.proofSection.safetyDescription}
            </p>
            <div className="mt-4 pt-4 border-t border-meadow-200">
              <div className="flex items-center text-sm text-meadow-3 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                {translations.proofSection.nonInvasive}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
