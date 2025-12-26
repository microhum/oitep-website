import Image from "next/image";

export default function Teams() {
  return (
    <section className="min-h-screen bg-white">
      <div className=" bg-linear-to-br from-meadow-1 via-meadow-2 to-meadow-2 px-6 py-6 pt-24  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12">
        <div className="inline-flex w-full justify-center gap-3">
          <h1>Teams</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Kasidit Wiboonkiat */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-96 group">
            <Image
              src="/static/Elements/Teams/Kasidit_Wiboonkiat.png"
              alt="Kasidit Wiboonkiat"
              fill
              className="object-cover grayscale group-hover:grayscale-0 brightness-30 group-hover:brightness-70 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                Kasidit Wiboonkiat
              </h3>
              <p className="text-sm sm:text-base text-gray-200 mb-1">
                Medicine, Faculty of Medicine Siriraj Hospital, Mahidol
                University
              </p>
              <p className="text-sm sm:text-base font-semibold text-meadow-2">
                Co-Founder & Chief Product Officer (CFO)
              </p>
            </div>
          </div>

          {/* Pongpanoot Kasembunyakorn */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-96 group">
            <Image
              src="/static/Elements/Teams/Pongpanoot_Kasembunyakorn.png"
              alt="Pongpanoot Kasembunyakorn"
              fill
              className="object-cover grayscale group-hover:grayscale-0 brightness-30 group-hover:brightness-70 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                Pongpanoot Kasembunyakorn
              </h3>
              <p className="text-sm sm:text-base text-gray-200 mb-1">
                Biomedical Engineering, Srinakharinwirot University
              </p>
              <p className="text-sm sm:text-base font-semibold text-meadow-2">
                Co-Founder & Chief Executive Officer (CEO)
              </p>
            </div>
          </div>

          {/* Guntee Doungmanee */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-96 group">
            <Image
              src="/static/Elements/Teams/Guntee_Doungmanee.png"
              alt="Guntee Doungmanee"
              fill
              className="object-cover grayscale group-hover:grayscale-0 brightness-30 group-hover:brightness-70  transition-all duration-300"
            />
            <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                Guntee Doungmanee
              </h3>
              <p className="text-sm sm:text-base text-gray-200 mb-1">
                Computer Engineering, King Mongkut&#39;s University of
                Technology Thonburi
              </p>
              <p className="text-sm sm:text-base font-semibold text-meadow-2">
                Co-Founder & Chief Technology Officer (CTO)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
