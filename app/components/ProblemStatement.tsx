import Image from "next/image";

export default function ProblemStatement() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br py-10 from-meadow-1 via-meadow-2 to-meadow-3 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Side - Auntie Ann Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/static/Elements/Introduce/Auntie_ann.png"
                alt="Auntie Ann"
                width={300}
                height={400}
                className="w-full h-auto max-w-sm lg:max-w-md"
              />
            </div>
          </div>

          {/* Center - Problem Statement Content */}
          <div className="text-center space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Meet
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-meadow-3 mb-4">
                Auntie Ann.
              </h3>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                70 years old, Chronic Kidney Disease patient. She is strictly
                addicted to salt, making her medical diet a daily struggle.
              </p>
            </div>

            {/* Prominent Problem Statement */}
            <div className="bg-meadow-3 border-4 border-white rounded-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Where is my SALTY Food !!!
              </h3>
            </div>

            {/* Problem Statistics */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6">
              <p className="text-xl lg:text-2xl font-bold text-white mb-4">
                7/10 patients lose their appetite because of bland hospital
                food.
              </p>

              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-meadow-3">
                    2,000mg
                  </div>
                  <div className="text-lg text-white/90">
                    Sodium Daily Limit
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Salty Food Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src="/static/Elements/Introduce/High-Sodium-Food.png"
                alt="High Sodium Food"
                width={300}
                height={400}
                className="w-full h-auto max-w-sm lg:max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Target Conditions Section */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Target Conditions
            </h3>
            <div className="text-lg lg:text-xl text-white/90">
              Severe Heart Failure, Cirrhosis, Nephrotic Syndrome & Uncontrolled
              HTN.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
