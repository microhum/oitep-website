import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-[80vh] flex items-center justify-center bg-linear-to-br from-meadow-1 via-meadow-2 to-meadow-3 overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Mobile - Image First, Desktop - Text First */}
          {/* Right Side - OITEP Preview (Mobile First) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <Image
              src="/static/preview/Preview.png"
              alt="OITEP Product Preview"
              width={600}
              height={400}
              className="w-full h-auto max-w-lg lg:max-w-2xl"
            />
          </div>

          {/* Left Side - Quote (Desktop First) */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Reduce Your Salt Craving With{" "}
              <span className="text-meadow-3 relative inline-flex items-center">
                <Image
                  src="/static/logo/logo.svg"
                  alt="OITE:P"
                  width={120}
                  height={60}
                  className="relative -bottom-2 w-20 sm:w-24 md:w-32 lg:w-40 h-auto"
                />
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white/90 mb-8 md:mb-12 max-w-2xl">
              Designing environments that prioritize patient joy without
              compromising health.
            </p>
            <button className="capitalize bg-meadow-3 hover:cursor-pointer hover:border-white border-meadow-3 border-2 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base lg:text-lg font-bold transition-all duration-100 transform">
              Try it out !
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
