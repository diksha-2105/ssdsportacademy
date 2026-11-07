import aboutImage from "../images/about.jpeg";
import {
  ShieldCheck,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const coreFeatures = [
    {
      icon: <ShieldCheck size={18} />,
      color: "text-red-600",
      bg: "bg-red-50",
      title: "Safe Training",
      desc: "Professional supervision in every session.",
    },
    {
      icon: <GraduationCap size={18} />,
      color: "text-amber-500",
      bg: "bg-amber-50",
      title: "Expert Coaches",
      desc: "Experienced mentors focused on every child.",
    },
    {
      icon: <HeartHandshake size={18} />,
      color: "text-blue-500",
      bg: "bg-blue-50",
      title: "Personal Attention",
      desc: "Small batches for better learning.",
    },
    {
      icon: <CheckCircle2 size={18} />,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      title: "Skill Development",
      desc: "Building strength, balance and confidence.",
    },
  ];

  return (
    <section id="about" className="bg-white py-14 lg:py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-red-600">
            About SSD Sports Academy
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-slate-900">
            Safe and Structured
            <span className="font-bold text-red-600">
              {" "}
              Gymnastics Classes in Dhanori, Pune
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Located in Dhanori, Pune, SSD Sport Academy offers professional
            gymnastics classes for toddlers, kids, and teens focused on
            confidence, flexibility, discipline, and joyful growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-100">
              <img
                src={aboutImage}
                alt="Gymnastics classes in Dhanori, Pune at SSD Sport Academy"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-light text-slate-900">
              Why Parents in Dhanori Choose
              <span className="font-bold text-red-600"> SSD Sport Academy</span>
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Our structured coaching programs focus on proper technique,
              physical fitness, and character development. Every session is
              designed to help children learn safely while enjoying the journey
              of becoming stronger, more confident, and more active.
            </p>

            {/* Features */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-lg"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#programs"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600"
            >
              View Programs
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
