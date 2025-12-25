import Image from "next/image";

export default function ProductPreview() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Product Variants
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized solutions designed to enhance flavor perception through
            cross-modal sensory triggers
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
                    1.5x Impulse
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
                  Beef Odor
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Beef odor can induce saltiness perception through cross-modal
                  sensory triggers. Specifically designed to enhance the flavor
                  profile of main protein dishes, it offers a breakthrough
                  solution for patients on sodium-restricted diets.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-meadow-3 rounded-full mr-3"></div>
                    For main protein-based meals
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-meadow-3 rounded-full mr-3"></div>
                    Strongest Neuro-triggering
                  </li>
                </ul>
                <button className="bg-meadow-3 hover:bg-meadow-2 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 w-full md:w-auto">
                  Learn More
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
                    1.2x Impulse
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
                  Sea Breeze
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Sea Breeze enhances the dining environment by providing a
                  refreshing oceanic aroma, helping to alleviate the stress of
                  bland meals and increasing satisfaction among elderly
                  patients.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-meadow-3 rounded-full mr-3"></div>
                    Refreshing oceanic profile
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-meadow-3 rounded-full mr-3"></div>
                    Ideal for salads & healthy snacks
                  </li>
                </ul>
                <button className="bg-meadow-3 hover:bg-meadow-2 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 w-full md:w-auto">
                  Learn More
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
            <p className="text-sm text-gray-600">Easy Application</p>
          </div>
          <div className="text-center">
            <Image
              src="/static/Elements/Solution/meat_box_preview.png"
              alt="Meat Box"
              width={200}
              height={200}
              className="w-full h-36 mx-auto mb-3 object-contain"
            />
            <p className="text-sm text-gray-600">Protein Solutions</p>
          </div>
          <div className="text-center">
            <Image
              src="/static/Elements/Solution/fish_box_preview.png"
              alt="Fish Box"
              width={200}
              height={200}
              className="w-full h-36 mx-auto mb-3 object-contain"
            />
            <p className="text-sm text-gray-600">Seafood Options</p>
          </div>
          <div className="text-center">
            <Image
              src="/static/Elements/Solution/Sachet_preview.png"
              alt="Sachet"
              width={200}
              height={200}
              className="w-full h-36 mx-auto mb-3 object-contain"
            />
            <p className="text-sm text-gray-600">Portable Format</p>
          </div>
        </div>
      </div>
    </section>
  );
}
