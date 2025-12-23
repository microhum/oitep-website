import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-meadow-1 to-meadow-2 overflow-hidden">
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
          {/* Left Side - Quote */}
          <div className="text-center lg:text-left">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold text-white mb-8 leading-2">
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
            <p className="text-xl md:text-2xl font-light text-white/90 mb-12 max-w-2xl">
              Discover a healthier way to satisfy your taste buds while
              maintaining your well-being.
            </p>
            <button className="bg-meadow-3 hover:cursor-pointer hover:border-white border-meadow-3 border-2 text-white px-8 py-2 rounded-lg text-lg font-semibold transition-all duration-100 transform">
              Try it out !
            </button>
          </div>

          {/* Right Side - OITEP Preview */}
          <div className="flex justify-center">
            <Image
              src="/static/preview/Preview.png"
              alt="OITEP Product Preview"
              width={600}
              height={400}
              className="w-full h-auto max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
