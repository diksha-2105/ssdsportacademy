import { ShieldCheck, Users, Trophy, Dumbbell } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe Training Environment",
    description:
      "Certified safety mats, child-friendly equipment, and supervised sessions for every gymnast.",
  },
  {
    icon: Users,
    title: "Small Batch Size",
    description:
      "Limited students per batch ensure personal attention and faster learning.",
  },
  {
    icon: Trophy,
    title: "Expert Coaching",
    description:
      "Dedicated coaches focused on technique, confidence, discipline, and overall growth.",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "Professional gymnastics apparatus designed for safe and progressive training.",
  },
];

const highlights = [
  {
    value: "FREE",
    label: "Trial Class",
  },
  {
    value: "SAFE",
    label: "Environment",
  },
  {
    value: "MODERN",
    label: "Equipment",
  },
  {
    value: "ALL",
    label: "Skill Levels",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-100 scroll-mt-16"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border border-red-100 bg-red-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-red-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-light leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Building{" "}
            <span className="font-bold text-red-600">Future Champions</span>
          </h2>

          <p className="mt-4 text-sm font-light leading-relaxed text-slate-600 sm:text-base">
            A professional gymnastics academy where children develop strength,
            confidence, discipline, and lifelong fitness in a safe and
            encouraging environment.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-red-100 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 transition-colors duration-300 group-hover:bg-red-600">
                  <Icon
                    size={22}
                    className="text-red-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Academy Highlights */}
        <div className="mt-12 grid grid-cols-2 gap-5 sm:mt-16 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600"
            >
              <h3 className="text-2xl font-bold tracking-wide text-white sm:text-3xl">
                {item.value}
              </h3>

              <p className="mt-2 text-[10px] font-medium uppercase tracking-[3px] text-slate-300 group-hover:text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
