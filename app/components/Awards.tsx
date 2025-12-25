import Image from "next/image";

export default function Awards() {
  return (
    <section className="h-[20vh] min-h-30 bg-white border-2 border-white flex items-center">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <h2 className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 mb-2 md:mb-4">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 xl:gap-6 items-center">
          <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-30 hover:opacity-50 transition-opacity duration-300 p-2 md:p-3">
            <Image
              src="/static/Elements/Awards/MIT_Hacking_Medicine_Logo_Slogan_Blue_OG_Transparent.png"
              alt="MIT Hacking Medicine"
              width={120}
              height={40}
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain max-w-full"
            />
          </div>
          <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-30 hover:opacity-50 transition-opacity duration-300 p-2 md:p-3">
            <Image
              src="/static/Elements/Awards/KX_Knowledge_Exchange.png"
              alt="KX Knowledge Exchange"
              width={120}
              height={40}
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain max-w-full"
            />
          </div>
          <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-30 hover:opacity-50 transition-opacity duration-300 p-2 md:p-3">
            <Image
              src="/static/Elements/Awards/MHESI.png"
              alt="MHESI"
              width={120}
              height={40}
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain max-w-full"
            />
          </div>
          <div className="items-center justify-center grayscale hover:grayscale-0 opacity-30 hover:opacity-50 transition-opacity duration-300 p-2 md:p-3 hidden sm:flex">
            <Image
              src="/static/Elements/Awards/Siriraj_Hosptital.png"
              alt="Siriraj Hospital"
              width={120}
              height={40}
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain max-w-full"
            />
          </div>
          <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-30 hover:opacity-50 transition-opacity duration-300 p-2 md:p-3 md:flex">
            <Image
              src="/static/Elements/Awards/TED_Youth_Startup_LOGO.png"
              alt="TED Youth Startup"
              width={120}
              height={40}
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
