import { useState, useEffect, useMemo } from "react";
import {
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Mouse,
} from "lucide-react";

import hero1 from "../images/hero1.jpeg";
import hero2 from "../images/hero2.jpeg";
import hero3 from "../images/hero3.jpeg";
import hero4 from "../images/hero4.jpeg";

export default function Hero({ onEnroll }) {
  const slides = useMemo(() => [hero1, hero2, hero3, hero4], []);

  const heroMessages = useMemo(
    () => [
      {
        title: "Gymnastics classes in Dhanori, Pune.",
        subtitle:
          "Safe training for kids and teens to grow stronger and more confident.",
        animation: "animate-slideUp",
      },
      {
        title: "Fun coaching for young athletes.",
        subtitle:
          "Small batches and expert guidance in a friendly learning space.",
        animation: "animate-fadeScale",
      },
      {
        title: "Free trial classes for new learners.",
        subtitle:
          "A simple first step into gymnastics with proper care and support.",
        animation: "animate-slideLeft",
      },
      {
        title: "Trusted by parents across Dhanori and Pune.",
        subtitle:
          "A modern academy focused on skill, safety, and joyful progress.",
        animation: "animate-slideRight",
      },
    ],
    [],
  );

  const [current, setCurrent] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // WhatsApp URL
  const whatsapp =
    "https://wa.me/919325017557?text=Hello%20SSD%20Sports%20Academy!%20I%20am%20interested%20in%20joining%20your%20gymnastics%20classes.%20Could%20you%20please%20share%20more%20details%20about%20the%20batches,%20fees,%20and%20free%20trial%20session%3F";

  // -----------------------------------------
  // BACKGROUND SLIDER
  // -----------------------------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  // -----------------------------------------
  // HEADING SLIDER
  // -----------------------------------------
  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % heroMessages.length);
    }, 5000);

    return () => clearInterval(quoteTimer);
  }, [heroMessages.length]);

  // -----------------------------------------
  // NEXT SLIDE
  // -----------------------------------------
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // -----------------------------------------
  // PREVIOUS SLIDE
  // -----------------------------------------
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // -----------------------------------------
  // PRELOAD NEXT IMAGE
  // -----------------------------------------
  useEffect(() => {
    const nextImage = new Image();
    nextImage.src = slides[(current + 1) % slides.length];
  }, [current, slides]);

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        flex-col
        justify-center
        overflow-hidden
        pb-24
        pt-32
        sm:pt-36
        lg:pt-40
      "
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          transition-all
          duration-[1200ms]
          ease-linear
        "
        style={{
          backgroundImage: `url(${slides[current]})`,
        }}
        aria-hidden="true"
      />

      {/* =========================================
          DARK OVERLAY
      ========================================== */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60" />

      {/* =========================================
          GLOW EFFECTS
      ========================================== */}
      <div
        className="
          absolute
          -left-40
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/20
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[380px]
          w-[380px]
          rounded-full
          bg-red-600/20
          blur-[130px]
        "
      />

      {/* =========================================
          HERO CONTENT
      ========================================== */}
      <div
        className="
          relative
          z-20
          flex
          h-full
          -translate-y-8
          items-center
          justify-center
          px-6
        "
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* =====================================
              BADGE
          ====================================== */}
          <div
            className="
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2.5
              backdrop-blur-xl
              sm:gap-6
              sm:px-6
            "
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[1px]
                text-white
                sm:text-xs
              "
            >
              GYMNASTICS CLASSES • DHANORI, PUNE
            </span>
          </div>

          {/* =====================================
              ANIMATED HEADING
          ====================================== */}
          <div key={quoteIndex} className={heroMessages[quoteIndex].animation}>
            <h1
              className="
                mt-8
                uppercase
                leading-[0.95]
                tracking-[0.12em]
                drop-shadow-2xl
                sm:tracking-[0.18em]
              "
            >
              <span
                className="
                  block
                  text-3xl
                  font-light
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {heroMessages[quoteIndex].title}
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-sm
                font-medium
                leading-relaxed
                tracking-[0.05em]
                text-gray-200
                sm:text-base
                sm:tracking-[0.08em]
              "
            >
              <span
                className="
                  block
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-red-300
                  sm:text-[11px]
                  sm:tracking-[0.35em]
                "
              >
                Trusted local academy
              </span>

              <span className="mt-2 block">
                “{heroMessages[quoteIndex].subtitle}”
              </span>
            </p>
          </div>

          {/* =====================================
              ACTION BUTTONS
          ====================================== */}
          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:mt-12
              sm:flex-row
              sm:gap-5
            "
          >
            {/* ---------------------------------
                BOOK FREE TRIAL
            ---------------------------------- */}
            <button
              type="button"
              onClick={onEnroll}
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-full
                bg-red-600
                px-8
                py-4
                font-semibold
                text-white
                shadow-2xl
                transition-all
                duration-300
                hover:scale-105
                hover:bg-red-700
                active:scale-95
                sm:w-auto
                sm:px-9
              "
            >
              {/* Button shine */}
              <span
                className="
                  absolute
                  left-[-120%]
                  top-0
                  h-full
                  w-1/2
                  rotate-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/60
                  to-transparent
                  transition-all
                  duration-1000
                  group-hover:left-[180%]
                "
              />

              <span className="relative flex items-center justify-center gap-3">
                Book a Free Trial
                <ArrowRight size={18} />
              </span>
            </button>

            {/* ---------------------------------
                WHATSAPP
            ---------------------------------- */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                rounded-full
                border
                border-white/30
                bg-white/10
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
                hover:text-black
                active:scale-95
                sm:w-auto
                sm:px-9
              "
            >
              <span className="flex items-center justify-center gap-3">
                <MessageCircle size={18} />
                Call / WhatsApp
              </span>
            </a>
          </div>

          {/* =====================================
              STATS
          ====================================== */}
          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-3
              sm:mt-12
              sm:gap-4
              md:grid-cols-4
            "
          >
            {[
              {
                number: "NEW",
                label: "Admissions Open",
              },
              {
                number: "FREE",
                label: "Trial Class",
              },
              {
                number: "SAFE",
                label: "Training Environment",
              },
              {
                number: "PRO",
                label: "Expert Coaching",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/10
                  p-3
                  shadow-lg
                  shadow-black/20
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:border-red-500/40
                  hover:bg-white/15
                  hover:shadow-red-500/20
                  sm:p-4
                "
              >
                <h2
                  className="
                    text-xl
                    font-bold
                    tracking-wide
                    text-white
                    sm:text-2xl
                  "
                >
                  {item.number}
                </h2>

                <p
                  className="
                    mt-1
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[1.5px]
                    text-gray-300
                    sm:text-xs
                    sm:tracking-[2px]
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          PREVIOUS ARROW
      ========================================== */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="
          absolute
          left-6
          top-1/2
          z-30
          hidden
          -translate-y-1/2
          rounded-full
          border
          border-white/20
          bg-white/10
          p-4
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-110
          hover:bg-white
          hover:text-black
          md:flex
          lg:left-10
        "
      >
        <ChevronLeft size={28} />
      </button>

      {/* =========================================
          NEXT ARROW
      ========================================== */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="
          absolute
          right-6
          top-1/2
          z-30
          hidden
          -translate-y-1/2
          rounded-full
          border
          border-white/20
          bg-white/10
          p-4
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-110
          hover:bg-white
          hover:text-black
          md:flex
          lg:right-10
        "
      >
        <ChevronRight size={28} />
      </button>

      {/* =========================================
          SLIDER DOTS
      ========================================== */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-30
          flex
          -translate-x-1/2
          gap-3
        "
      >
        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 ${
              current === index
                ? "h-2 w-12 rounded-full bg-red-500"
                : "h-2 w-2 rounded-full bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}
      <div
        className="
          absolute
          bottom-6
          left-8
          z-30
          hidden
          items-center
          gap-4
          lg:flex
        "
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/40 p-1">
          <Mouse size={16} className="mt-1 animate-bounce text-white" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[5px] text-gray-300">
            Scroll
          </p>

          <p className="font-semibold text-white">Discover More</p>
        </div>
      </div>

      {/* =========================================
          BOTTOM GRADIENT
      ========================================== */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-40
          w-full
          bg-gradient-to-t
          from-black
          via-black/60
          to-transparent
        "
      />
    </section>
  );
}
