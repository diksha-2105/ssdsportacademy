import {
  PlayCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../images/gallery1.jpeg";
import image2 from "../images/gallery2.jpeg";
import image3 from "../images/gallery3.jpeg";
import image4 from "../images/gallery4.jpeg";
import image5 from "../images/gallery5.jpeg";
import image6 from "../images/gallery6.jpeg";
import image7 from "../images/gallery7.jpeg";
import image8 from "../images/gallery8.jpeg";
import image9 from "../images/gallery9.jpeg";
import image10 from "../images/gallery10.jpeg";

import video1 from "../images/video1.mp4";
import video2 from "../images/video2.mp4";

export default function Gallery() {
  const media = [
    {
      type: "image",
      src: image1,
      title: "Toddlers Warm-Up Session",
      description: "Fun, entry-level mobility and stretching exercises designed to build early motor skills.",
    },
    {
      type: "image",
      src: image2,
      title: "Parallel Bar Training",
      description: "Focusing on upper body strength, balance, and controlled holds under expert supervision.",
    },
    {
      type: "video",
      src: video1,
      title: "High Bar Performance",
      description: "Live demonstration of dynamic swing transitions and dismount techniques.",
    },
    {
      type: "image",
      src: image3,
      title: "Vault Training Drill",
      description: "Practicing approach speed, explosive spring-board takeoff, and safe landing mechanics.",
    },
    {
      type: "video",
      src: video2,
      title: "Floor Exercise Session",
      description: "A showcase of tumbling combinations, flexibility, and fluid movement routines.",
    },
    {
      type: "image",
      src: image4,
      title: "Coaches & Young Athletes",
      description: "Dedicated mentorship fostering positive sportsmanship and personal growth.",
    },
    {
      type: "image",
      src: image5,
      title: "Gymnastics Practice",
      description: "Structured daily conditioning routines to build endurance and core control.",
    },
    {
      type: "image",
      src: image6,
      title: "Balance & Coordination",
      description: "Precision team work aimed at refining posture, focus, and stability.",
    },
    {
      type: "image",
      src: image7,
      title: "Guru Purnima Celebration",
      description: "Honoring our mentors and coaches who inspire dedication and passion every day.",
    },
    {
      type: "image",
      src: image8,
     title: "Future Champions",
      description: "Inspiring perseverance and celebrating progress at every skill level.",
    },
    {
      type: "image",
      src: image9,
       title: "Learning New Skills",
      description: "Step-by-step progressions helping gymnasts safely master advanced techniques.",
    },
    {
      type: "image",
      src: image10,
      title: "Strength & Control",
      description: "Building strength, balance, and confidence through expert rings training.",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-red-100/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-slate-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div className="max-w-3xl">

            <span className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-red-600">
              Gallery
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-slate-900">

              Moments From{" "}

              <span className="font-bold text-red-600">
                SSD Sports Academy
              </span>

            </h2>

            <p className="mt-5 max-w-2xl text-sm sm:text-base leading-8 text-slate-600 font-light">

              Every training session tells a story of dedication,
              confidence, teamwork and continuous progress. Take a
              glimpse into the inspiring journey of our young
              athletes as they learn, grow and achieve new
              milestones every day.

            </p>

          </div>

          {/* Navigation Buttons */}
          <div className="hidden sm:flex items-center gap-4">

            <button
              aria-label="Previous Slide"
              className="gallery-prev flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              aria-label="Next Slide"
              className="gallery-next flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

        {/* Gallery Slider */}
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            Keyboard,
          ]}
          navigation={{
            prevEl: ".gallery-prev",
            nextEl: ".gallery-next",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={900}
          grabCursor={true}
          watchOverflow={true}
          className="gallery-swiper !pb-16"
          breakpoints={{
            0: {
              slidesPerView: 1.05,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 1.2,
              spaceBetween: 18,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 22,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3.2,
              spaceBetween: 26,
            },
          }}
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>

              <article
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-100 hover:shadow-2xl"
              >

                {/* Media */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">

                  {item.type === "image" ? (

                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      draggable="false"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                  ) : (

                    <div className="relative h-full w-full group/video">

                      <video
                        controls
                        preload="metadata"
                        playsInline
                        controlsList="nodownload"
                        className="h-full w-full object-cover"
                      >
                        <source
                          src={item.src}
                          type="video/mp4"
                        />
                      </video>

                      {/* Play Overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition duration-300 group-hover/video:opacity-0"
                      >

                        <div
                          className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur-md shadow-xl"
                        >

                          <PlayCircle
                            size={36}
                            className="fill-white/20 text-white"
                          />

                        </div>

                      </div>

                    </div>

                  )}

                  {/* Gradient Overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                  />

                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">

                  <div>

                    <h3
                      className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-red-600"
                    >
                      {item.title}
                    </h3>

                  </div>

                  <div
                    className="mt-4 h-[1px] w-full bg-slate-100"
                  />

                  <p
                    className="mt-4 text-sm leading-7 text-slate-500"
                  >
                    {item.description}
                  </p>

                </div>

              </article>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Pagination Styling */}
      <style>{`
        .gallery-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .gallery-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.35s ease;
        }

        .gallery-swiper .swiper-pagination-bullet:hover {
          background: #94a3b8;
        }

        .gallery-swiper .swiper-pagination-bullet-active {
          width: 28px !important;
          border-radius: 999px;
          background: #dc2626 !important;
        }

        .gallery-swiper .swiper-slide {
          height: auto;
          display: flex;
        }

        .gallery-swiper .swiper-slide > * {
          width: 100%;
        }

        .gallery-swiper video::-webkit-media-controls-download-button {
          display: none;
        }

        .gallery-swiper video::-webkit-media-controls-fullscreen-button {
          display: none;
        }

        @media (max-width: 640px) {
          .gallery-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }

          .gallery-swiper .swiper-pagination-bullet-active {
            width: 22px !important;
          }
        }
      `}</style>
    </section>
  );
}