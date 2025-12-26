"use client";

import Image from "next/image";
import { Users, AlertTriangle, Target } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function ProblemStatement() {
  const { translations } = useLocale();
  return (
    <section className="relative min-h-[110vh] bg-linear-to-b   from-meadow-3 via-meadow-2    to-gray-50 via-65% py-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Story Card */}
        <div className="relative col-span-1 md:col-span-2p-6">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            {translations.problemStatement.meetAuntieAnn}
          </h3>
          <p className="text-lg text-white/85 leading-relaxed max-w-3xl">
            {translations.problemStatement.auntieAnnStory}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white">
              {translations.problemStatement.hospitalDietFatigue}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white">
              {translations.problemStatement.cravingManagement}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white">
              {translations.problemStatement.qualityOfLife}
            </span>
          </div>
        </div>

        <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Stat: 7/10 patients */}
          <div className="relative bg-white/12 border border-white/20 rounded-3xl p-5 backdrop-blur-lg">
            <p className="text-xl text-white/90 leading-relaxed flex items-start gap-3">
              <Users className="w-6 h-6 text-white mt-1 shrink-0" />
              <span>
                <span className="font-bold">
                  {translations.problemStatement.sevenOfTen}
                </span>{" "}
                {translations.problemStatement.patientsLoseAppetite}
              </span>
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="text-sm text-white/80">
                {translations.problemStatement.tasteFatigue}
              </div>
            </div>
          </div>

          {/* Sodium Limit */}
          <div className="relative bg-white/12 border border-white/20 rounded-3xl p-5 backdrop-blur-lg  ">
            <p className="text-xl text-white/90 leading-relaxed flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-white mt-1 shrink-0" />
              <span>
                <span className="font-bold">
                  {translations.problemStatement.sodiumLimit}
                </span>{" "}
                {translations.problemStatement.sodiumDailyLimit}
              </span>
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-white/75">
              <span>{translations.problemStatement.lowSodiumRestrictive}</span>
              <span>{translations.problemStatement.cravingsSpike}</span>
            </div>
          </div>

          {/* Target Conditions */}
          <div className="relative col-span-1 md:col-span-2 lg:col-span-3 bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
              <Target className="w-8 h-8 text-white" />
              <span>{translations.problemStatement.targetConditions}</span>
            </h3>
            <p className="text-lg text-white/85">
              {translations.problemStatement.conditionsList}
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
