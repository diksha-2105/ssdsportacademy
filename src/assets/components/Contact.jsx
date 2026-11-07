import { MapPin, Phone, Mail, Clock3 } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const timings = [
  { day: "Monday", hours: "11:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "11:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "11:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "Closed", closed: true },
  { day: "Friday", hours: "11:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "09:00 AM – 7:00 PM" },
  { day: "Sunday", hours: "09:00 AM – 7:00 PM" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-100 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[11px] uppercase font-semibold tracking-[0.25em]">
            Contact Us
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
            Join the Best Gymnastics Classes in
            <span className="font-bold text-red-600"> Dhanori, Pune</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-500 font-light leading-relaxed">
            Visit SSD Sport Academy for a free trial class and experience
            professional gymnastics coaching in a safe, encouraging environment.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Information Card */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 p-6 sm:p-8 space-y-8 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-200">
                  <MapPin size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Address
                  </h3>
                  <a
                    href="https://www.google.com/maps/dir/18.6094652,73.9149053/SSD+SPORTS+ACADEMY,+S.+No.19,+Rd.+No.+11,+Kamal+Park,+M.S.E.B.+office,+Sports+Kingdom,+behind+Dhanori,+Pune,+Maharashtra+411015/@18.6053159,73.8996968,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2c781dab1f179:0xcf585791dd9e2022!2m2!1d73.904768!2d18.5962369?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SSD Sport Academy location on Google Maps"
                    className="mt-1 text-sm text-slate-500 leading-relaxed font-light hover:text-red-600 transition-colors"
                  >
                    S. No.19, Road No.11, Kamal Park,
                    <br />
                    M.S.E.B Office, Sports Kingdom,
                    <br />
                    Dhanori, Pune - 411015
                  </a>
                </div>
              </div>

              {/* Phone & Instagram Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Phone</h3>
                    <a
                      href="tel:+919325017557"
                      className="text-sm text-slate-500 hover:text-red-600 transition-colors font-light"
                    >
                      +91 93250 17557
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <FaInstagram size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Instagram
                    </h3>
                    <a
                      href="https://instagram.com/ssdsportacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 hover:text-red-600 transition-colors font-light"
                    >
                      @ssdsportacademy
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Email</h3>
                  <a
                    href="mailto:ssdsportacademy27@gmail.com"
                    className="text-sm text-slate-500 hover:text-red-600 transition-colors font-light break-all"
                  >
                    ssdsportacademy27@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="border-t border-slate-100 pt-6">
              <div className="flex gap-3 items-center mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Clock3 size={18} />
                </div>

                <h3 className="font-bold text-slate-900 text-base">
                  Opening Hours
                </h3>
              </div>

              <div className="space-y-2.5">
                {timings.map((time, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm items-center"
                  >
                    <span className="text-slate-500 font-light">
                      {time.day}
                    </span>
                    <span
                      className={
                        time.closed
                          ? "text-red-600 font-semibold text-xs uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded-md"
                          : "text-slate-800 font-medium"
                      }
                    >
                      {time.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Google Maps Embed Card */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg min-h-[400px] h-full">
            <iframe
              title="SSD Sports Academy Location"
              src="https://www.google.com/maps?q=18.5962369,73.904768&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
