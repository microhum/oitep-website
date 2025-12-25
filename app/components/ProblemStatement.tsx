import Image from "next/image";

export default function ProblemStatement() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-meadow-1 via-meadow-2 to-meadow-3 py-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Story Card */}
        <div className="relative col-span-1 md:col-span-2p-6">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Meet Auntie Ann.
          </h3>
          <p className="text-lg text-white/85 leading-relaxed max-w-3xl">
            She is a chronic kidney disease patient, addicted to salt. Every
            bland meal feels like a punishment, turning her medical diet into a
            daily battle.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white">
              Hospital diet fatigue
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white">
              Craving management
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white">
              Quality of life
            </span>
          </div>
        </div>

        <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Stat: 7/10 patients */}
          <div className="relative bg-white/12 border border-white/20 rounded-3xl p-5 backdrop-blur-lg">
            <p className="text-xl text-white/90 leading-relaxed">
              7/10 Patients lose their appetite because of bland hospital food.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="text-sm text-white/80">
                Taste fatigue leads to poor nutrition and recovery.
              </div>
            </div>
          </div>

          {/* Sodium Limit */}
          <div className="relative bg-white/12 border border-white/20 rounded-3xl p-5 backdrop-blur-lg  ">
            <p className="text-xl text-white/90 leading-relaxed">
              2,000 mg Sodium Daily Limit for high-risk patients.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-white/75">
              <span>Low-sodium diets can feel restrictive.</span>
              <span>Cravings spike adherence challenges.</span>
            </div>
          </div>

          {/* Target Conditions */}
          <div className="relative col-span-1 md:col-span-2 lg:col-span-3 bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Target Conditions
            </h3>
            <p className="text-lg text-white/85">
              Severe Heart Failure, Cirrhosis, Nephrotic Syndrome & Uncontrolled
              HTN.
            </p>
          </div>
        </div>
        {/* Introduce Image */}
        <div className="absolute -top-5 right-5 overflow-hidden hidden lg:block">
          <Image
            src="/static/Elements/Introduce/Introduce.png"
            alt="Introduction"
            width={400}
            height={300}
            className="h-auto w-96 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
