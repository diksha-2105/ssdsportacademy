import coach1 from "../images/coach1.png";
import coach2 from "../images/coach2.png";
import coach3 from "../images/coach3.png";

export default function Coaches() {
  const coaches = [
    {
      name: "Somesh Daterao",
      role: "Head Coach",
      specialization:
        "NIS Certified • National Team Coach • Artistic & Acrobatic Gymnastics",
      experience: "10+ Years",
      bio: "NIS Certified Coach and National-level gymnast with over 10 years of coaching experience. Passionate about helping athletes build technical excellence, confidence, and a winning mindset.",
      image: coach1,
    },
    {
      name: "Pavan Daterao",
      role: "Former Senior Coach",
      specialization: "Artistic & Acrobatic Gymnastics",
      experience: "8+ Years",
      bio: "School National Gold Medalist in Acrobatic Gymnastics at Agra, Uttar Pradesh. Contributed to developing young gymnasts through strong technical training and disciplined coaching until 2025.",
      image: coach2,
    },
    {
      name: "Siddhant Yadav",
      role: "Senior Coach",
      specialization: "Artistic & Acrobatic Gymnastics",
      experience: "6+ years",
      bio: "International gymnast who represented India at the 19th Asian Acrobatic Gymnastics Championship in Uzbekistan. Passionate about coaching athletes to improve their skills, confidence, and performance.",
      image: coach3,
    },
  ];

  return (
    <section
      id="coaches"
      className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[11px] uppercase font-semibold tracking-[0.25em]">
            Our Team
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900">
            Meet Our <span className="font-bold text-red-600">Coaches</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Dedicated professionals who coach with experience, care and a focus
            on safe, progressive development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((c, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center shadow-md ring-2 ring-white">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`${c.name} photo`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-600 font-bold">
                    {c.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {c.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500 font-medium uppercase tracking-wide">
                {c.role}
              </p>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {c.bio}
              </p>

              <div className="mt-4 flex flex-col items-center gap-2">
                <span className="text-xs text-slate-500">
                  {c.specialization}
                </span>
                <span className="text-xs text-slate-500">{c.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
