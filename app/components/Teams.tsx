import Image from "next/image";

export default function Teams() {
  return (
    <section className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12">
          Our Teams
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Kasidit Wiboonkiat */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="grayscale hover:grayscale-0 transition-all duration-300 rounded-full overflow-hidden border-4 border-meadow-2 p-2">
                <Image
                  src="/static/Elements/Teams/Kasidit_Wiboonkiat.png"
                  alt="Mr. Kasidit Wiboonkiat (Kong)"
                  width={200}
                  height={200}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Mr. Kasidit Wiboonkiat (Kong)
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-1">
              Medicine, Faculty of Medicine Siriraj Hospital, Mahidol University
            </p>
            <p className="text-sm sm:text-base font-semibold text-meadow-3">
              Co-Founder & Director of Research and Development
            </p>
          </div>

          {/* Pongpanoot Kasembunyakorn */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="grayscale hover:grayscale-0 transition-all duration-300 rounded-full overflow-hidden border-4 border-meadow-2 p-2">
                <Image
                  src="/static/Elements/Teams/Pongpanoot_Kasembunyakorn.png"
                  alt="Mr. Pongpanoot Kasembunyakorn (Hoff)"
                  width={200}
                  height={200}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Mr. Pongpanoot Kasembunyakorn (Hoff)
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-1">
              Biomedical Engineering, Srinakharinwirot University
            </p>
            <p className="text-sm sm:text-base font-semibold text-meadow-3">
              Co-Founder & Director of Operations
            </p>
          </div>

          {/* Guntee Doungmanee */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="grayscale hover:grayscale-0 transition-all duration-300 rounded-full overflow-hidden border-4 border-meadow-2 p-2">
                <Image
                  src="/static/Elements/Teams/Guntee_Doungmanee.png"
                  alt="Mr. Guntee Doungmanee (Piang)"
                  width={200}
                  height={200}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Mr. Guntee Doungmanee (Piang)
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-1">
              Computer Engineering, King Mongkut&#39;s University of Technology Thonburi
            </p>
            <p className="text-sm sm:text-base font-semibold text-meadow-3">
              Co-Founder & Director of Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
