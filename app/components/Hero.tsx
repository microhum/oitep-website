import Image from "next/image";
import { Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-meadow-1 via-meadow-2 to-meadow-3 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile - Image First, Desktop - Text First */}
          {/* Right Side - OITEP Preview (Mobile First) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <Image
              src="/static/preview/Preview.png"
              alt="OITEP Product Preview"
              width={600}
              height={400}
              className="w-full h-auto max-w-2xl"
            />
          </div>

          {/* Left Side - Quote (Desktop First) */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-8 leading-4">
              Reduce Your Salt Craving With{" "}
              <span className="text-meadow-3 relative inline-flex items-center">
                <Image
                  src="/static/logo/logo.svg"
                  alt="OITE:P"
                  width={160}
                  height={80}
                  className="relative -bottom-3"
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/90 mb-12 max-w-2xl">
              Designing environments that prioritize patient joy without
              compromising health.
            </p>
            <button className="capitalize bg-meadow-3 hover:cursor-pointer hover:border-white border-meadow-3 border-2 text-white px-6 py-2 rounded-lg text-lg font-bold transition-all duration-100 transform">
              Try it out !
            </button>
          </div>
        </div>
      </div>

      {/* Awards Section - Absolute Positioned */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4 lg:py-6">
          <h2 className="text-center text-sm md:text-base lg:text-lg font-semibold text-gray-700 mb-3 md:mb-4 lg:mb-6">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6 items-center">
            <div className="flex items-center justify-center grayscale opacity-30 hover:opacity-50 transition-opacity duration-300 p-2">
              <Image
                src="/static/Elements/Awards/MIT_Hacking_Medicine_Logo_Slogan_Blue_OG_Transparent.png"
                alt="MIT Hacking Medicine"
                width={120}
                height={40}
                className="h-4 md:h-6 lg:h-8 w-auto object-contain max-w-full"
              />
            </div>
            <div className="flex items-center justify-center grayscale opacity-30 hover:opacity-50 transition-opacity duration-300 p-2">
              <Image
                src="/static/Elements/Awards/KX_Knowledge_Exchange.png"
                alt="KX Knowledge Exchange"
                width={120}
                height={40}
                className="h-4 md:h-6 lg:h-8 w-auto object-contain max-w-full"
              />
            </div>
            <div className="flex items-center justify-center grayscale opacity-30 hover:opacity-50 transition-opacity duration-300 p-2">
              <Image
                src="/static/Elements/Awards/MHESI.png"
                alt="MHESI"
                width={120}
                height={40}
                className="h-4 md:h-6 lg:h-8 w-auto object-contain max-w-full"
              />
            </div>
            <div className="flex items-center justify-center grayscale opacity-30 hover:opacity-50 transition-opacity duration-300 p-2">
              <Image
                src="/static/Elements/Awards/Siriraj_Hosptital.png"
                alt="Siriraj Hospital"
                width={120}
                height={40}
                className="h-4 md:h-6 lg:h-8 w-auto object-contain max-w-full"
              />
            </div>
            <div className="flex items-center justify-center grayscale opacity-30 hover:opacity-50 transition-opacity duration-300 p-2">
              <Image
                src="/static/Elements/Awards/TED_Youth_Startup_LOGO.png"
                alt="TED Youth Startup"
                width={120}
                height={40}
                className="h-4 md:h-6 lg:h-8 w-auto object-contain max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
