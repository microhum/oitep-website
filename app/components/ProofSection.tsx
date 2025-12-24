import Image from "next/image";

export default function ProofSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Neuro-Science Validation
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
              Pilot Study using EEG (Electroencephalography) at Siriraj Hospital
            </span>
          </div>
        </div>

        {/* Validation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Beta Rhythm Card */}
          <div className="bg-linear-to-br from-meadow-50 to-meadow-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border border-meadow-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-meadow-3 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Beta Rhythm</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Confirmed brainwave activation indicating real saltiness perception.
            </p>
            <div className="mt-4 pt-4 border-t border-meadow-200">
              <div className="flex items-center text-sm text-meadow-3 font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                EEG Brainwave Analysis
              </div>
            </div>
          </div>

          {/* 1.5x Impulse Card */}
          <div className="bg-linear-to-br from-meadow-50 to-meadow-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border border-meadow-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-meadow-3 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">1.5x Impulse</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Significant increase in salt impulse response with Beef Odor variant.
            </p>
            <div className="mt-4 pt-4 border-t border-meadow-200">
              <div className="flex items-center text-sm text-meadow-3 font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Measurable Neuro-Response
              </div>
            </div>
          </div>

          {/* Safety Profile Card */}
          <div className="bg-linear-to-br from-meadow-50 to-meadow-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border border-meadow-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-meadow-3 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">100% Safety</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Safety profile with no chemical interaction with food itself.
            </p>
            <div className="mt-4 pt-4 border-t border-meadow-200">
              <div className="flex items-center text-sm text-meadow-3 font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Non-Invasive Technology
              </div>
            </div>
          </div>
        </div>

        {/* Study Details Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Scientific Methodology
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-meadow-3 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">EEG Monitoring</h4>
                    <p className="text-gray-600">Real-time brainwave activity measurement during controlled taste tests</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-meadow-3 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Double-Blind Study</h4>
                    <p className="text-gray-600">Participants unaware of test conditions to ensure unbiased results</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-meadow-3 rounded-full flex items-center justify-center mr-3 mt-1 shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Controlled Environment</h4>
                    <p className="text-gray-600">Siriraj Hospital&apos;s certified medical testing facilities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl md:text-5xl font-bold text-meadow-3 mb-2">1.5x</div>
                <div className="text-lg text-gray-600 mb-4">Average Salt Impulse Increase</div>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-meadow-3 rounded-full"></div>
                  <div className="w-3 h-3 bg-meadow-3 rounded-full"></div>
                  <div className="w-3 h-3 bg-meadow-3 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-500">
                  Based on 47 participant study
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-meadow-3 hover:bg-meadow-2 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Study Results
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Peer-reviewed publication available upon request
          </p>
        </div>
      </div>
    </section>
  );
}
