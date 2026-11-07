import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[11px] uppercase font-semibold tracking-[0.25em]">
              Testimonials
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
              Parents Trust{" "}
              <span className="font-bold text-red-600">SSD Sports Academy</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-500 font-light leading-relaxed">
              Real experiences from parents who have watched their children grow
              stronger, more confident, and disciplined.
            </p>

            {/* Overall Rating Badge */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#facc15"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <span className="font-semibold text-slate-900">5.0</span>

              <span className="text-xs text-slate-400 border-l border-slate-200 pl-3">
                Parent Reviews
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex gap-3">
            <button
              aria-label="Previous testimonial"
              className="testimonial-prev w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              aria-label="Next testimonial"
              className="testimonial-next w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="testimonial-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            className="pb-14 !overflow-visible"
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {testimonials.map((review) => {
              // Extract initials cleanly
              const initials = review.name
                ? review.name
                    .split(" ")
                    .filter(Boolean)
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                : "PA";

              return (
                <SwiperSlide key={review.id} className="!h-auto">
                  <div className="h-full bg-slate-50/70 rounded-3xl border border-slate-100 p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:border-red-100 transition-all duration-500">
                    <div>
                      {/* Top Row: Quote Icon & Stars */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
                          <Quote size={20} className="text-red-600" />
                        </div>

                        <div className="flex gap-1">
                          {[...Array(review.rating || 5)].map((_, i) => (
                            <Star
                              key={i}
                              size={15}
                              fill="#facc15"
                              className="text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-sm text-slate-600 leading-relaxed font-light">
                        "{review.text}"
                      </p>
                    </div>

                    {/* User Profile */}
                    <div className="mt-8 pt-5 border-t border-slate-200/60 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold text-xs tracking-wider shrink-0">
                        {initials}
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-slate-900 truncate">
                          {review.name}
                        </h3>
                        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                          {review.role || "Parent"}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Swiper Custom Pagination Style Overrides */}
      <style>{`
        .testimonial-wrapper .swiper-wrapper {
          align-items: stretch;
        }
        .testimonial-wrapper .swiper-pagination {
          bottom: 0 !important;
        }
        .testimonial-wrapper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }
        .testimonial-wrapper .swiper-pagination-bullet-active {
          background: #dc2626 !important;
          width: 22px !important;
          border-radius: 999px !important;
        }
      `}</style>
    </section>
  );
}
