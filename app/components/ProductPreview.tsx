"use client";

import Image from "next/image";
import { useLocale } from "./LocaleProvider";

export default function ProductPreview() {
  const { translations } = useLocale();
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium text-gray-900 mb-4">
            {translations.productPreview.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations.productPreview.sectionSubtitle}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Beef Odor Variant */}
          <div className="overflow-hidden duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Product Images */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-3 -right-3 bg-meadow-3 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                    {translations.productPreview.beefImpulse}
                  </div>
                  <Image
                    src="/static/Elements/Solution/Amber_Bottle_Mockup_beef.png"
                    alt="Beef Odor Product"
                    width={300}
                    height={400}
                    className="w-full h-auto max-w-36 mx-auto object-contain"
                  />
                  {/* Sticker positioned absolutely at bottom left with overlap */}
                  <div className="absolute bottom-[20] left-[-80] transform translate-y-1/2 z-20">
                    <Image
                      src="/static/Elements/Solution/meat_sticker.png"
                      alt="Meat Sticker"
                      width={120}
                      height={120}
                      className="w-36 h-36 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {translations.productPreview.beefOdor}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {translations.productPreview.beefDescription}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-meadow-3 rounded-full mr-3"></div>
                    {translations.productPreview.beefFeature1}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-meadow-3 rounded-full mr-3"></div>
                    {translations.productPreview.beefFeature2}
                  </li>
                </ul>
                <button className="bg-meadow-3 hover:bg-meadow-2 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 w-full md:w-auto">
                  {translations.productPreview.learnMore}
                </button>
              </div>
            </div>
          </div>

          {/* Sea Breeze Variant */}
          <div className="overflow-hidden duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Product Images */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-3 -right-3 bg-meadow-3 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                    {translations.productPreview.seaImpulse}
                  </div>
                  <Image
                    src="/static/Elements/Solution/Amber_Bottle_Mockup_fish.png"
                    alt="Sea Breeze Product"
                    width={300}
                    height={400}
                    className="w-full h-auto max-w-36 mx-auto object-contain"
                  />
                  {/* Sticker positioned absolutely at bottom left with overlap */}
                  <div className="absolute bottom-[20] left-[-80] transform translate-y-1/2 z-20">
                    <Image
                      src="/static/Elements/Solution/fish_sticker.png"
                      alt="Fish Sticker"
                      width={120}
                      height={120}
                      className="w-36 h-36 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {translations.productPreview.seaBreeze}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {translations.productPreview.seaDescription}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-meadow-3 rounded-full mr-3"></div>
                    {translations.productPreview.seaFeature1}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-meadow-3 rounded-full mr-3"></div>
                    {translations.productPreview.seaFeature2}
                  </li>
                </ul>
                <button className="bg-meadow-3 hover:bg-meadow-2 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 w-full md:w-auto">
                  {translations.productPreview.learnMore}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Product Showcase */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center">
            <Image
              src="/static/Elements/Solution/bowl_with_sticker.png"
              alt="Bowl with Sticker"
              width={200}
              height={200}
              className="w-full h-36 mx-auto mb-3 object-contain"
            />
            <p className="text-sm text-gray-600">{translations.productPreview.easyApplication}</p>
          </div>
          <div className="text-center">
            <Image
              src="/static/Elements/Solution/meat_box_preview.png"
              alt="Meat Box"
              width={200}
              height={200}
              className="w-full h-36 mx-auto mb-3 object-contain"
            />
            <p className="text-sm text-gray-600">{translations.productPreview.proteinSolutions}</p>
          </div>
          <div className="text-center">
            <Image
              src="/static/Elements/Solution/fish_box_preview.png"
              alt="Fish Box"
              width={200}
              height={200}
              className="w-full h-36 mx-auto mb-3 object-contain"
            />
            <p className="text-sm text-gray-600">{translations.productPreview.seafoodOptions}</p>
          </div>
          <div className="text-center">
            <Image
              src="/static/Elements/Solution/Sachet_preview.png"
              alt="Sachet"
              width={200}
              height={200}
              className="w-full h-36 mx-auto mb-3 object-contain"
            />
            <p className="text-sm text-gray-600">{translations.productPreview.portableFormat}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
