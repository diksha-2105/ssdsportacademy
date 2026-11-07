import { ArrowRight, Clock, Award, Move } from "lucide-react";

import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

export default function Programs() {
  const programs = [
    {
      title: "Toddlers Gymnastics",
      age: "4 - 6 Years",
      duration: "60 Mins",
      focus:
        "Safe first steps in gymnastics for toddlers and young children in Dhanori, Pune.",
      badge: "Beginner",
      badgeBg: "bg-emerald-500",
      image: image1,
      icon: <Move size={18} />,
    },
    {
      title: "Foundation Training",
      age: "7 - 10 Years",
      duration: "60 Mins",
      focus:
        "Perfect for school-age children building flexibility, control, and confidence through structured coaching.",
      badge: "Popular",
      badgeBg: "bg-red-600",
      image: image2,
      icon: <Award size={18} />,
    },
    {
      title: "Advanced Training",
      age: "11 - 15 Years",
      duration: "60 Mins",
      focus:
        "Advanced coaching for teens ready to improve technique, conditioning, and performance with confidence.",
      badge: "Elite",
      badgeBg: "bg-slate-900",
      image: image3,
      icon: <Clock size={18} />,
    },
  ];

  return (
    <section
      id="programs"
      className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[11px] uppercase font-semibold tracking-[0.25em]">
            Our Programs
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
            Gymnastics Programs for
            <span className="font-bold text-red-600"> Kids in Dhanori</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Age-based gymnastics training for toddlers to teens, designed to
            build strength, balance, flexibility, and confidence in a safe,
            encouraging environment.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {programs.map((prog, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Card Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] shrink-0">
                <img
                  src={prog.image}
                  alt={prog.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Bottom Shadow Gradient for Text Contrast */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                {/* Badge Shifted to Bottom Right */}
                <span
                  className={`absolute bottom-3 right-3 ${prog.badgeBg} text-white px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider shadow-md backdrop-blur-sm z-10`}
                >
                  {prog.badge}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      {prog.icon}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {prog.title}
                    </h3>
                  </div>

                  {/* Metadata Pills */}
                  <div className="flex items-center gap-2.5 mt-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      Age {prog.age}
                    </span>

                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                      {prog.duration}
                    </span>
                  </div>

                  {/* Program Description */}
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed font-light">
                    {prog.focus}
                  </p>
                </div>

                {/* Action CTA */}
                <a
                  href="#contact"
                  className="mt-6 flex items-center justify-between rounded-full bg-slate-900 px-5 py-3 text-sm text-white font-semibold hover:bg-red-600 transition-colors duration-300 shadow-sm"
                >
                  <span>Reserve Your Trial</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
