import { useEffect, useState } from "react";
import {
  Trophy,
  Medal,
  Award,
  Star,
  X,
  Camera,
  Sparkles,
  ChevronRight,
  CalendarDays,
} from "lucide-react";

import competitionPhoto1 from "../images/achievement-competition-2026-1.jpeg";
import competitionPhoto2 from "../images/achievement-competition-2026-2.jpeg";
import competitionPhoto3 from "../images/achievement-competition-2026-3.jpeg";

const competition = {
  title: "State Level Grade-wise Invitational Gymnastics Competition",
  year: "2026",
};

const champions = [
  {
    name: "Swaraj",
    number: "01",
    description: "Recognised for dedication, discipline and performance.",
  },
  {
    name: "Samyak",
    number: "02",
    description: "A proud achievement through consistent practice.",
  },
  {
    name: "Daksh",
    number: "03",
    description: "Celebrating talent, determination and hard work.",
  },
];

const galleryImages = [
  {
    id: 1,
    src: competitionPhoto2,
    title: "Competition Highlights",
    description: "A memorable moment from the 2026 gymnastics competition.",
  },
  {
    id: 2,
    src: competitionPhoto3,
    title: "Celebrating Our Champions",
    description: "Proud moments from our young gymnasts' achievement.",
  },
];

const confettiPieces = [
  { left: "5%", delay: "0s", color: "#ef4444", rotate: "35deg" },
  { left: "12%", delay: "0.2s", color: "#facc15", rotate: "75deg" },
  { left: "20%", delay: "0.4s", color: "#ef4444", rotate: "15deg" },
  { left: "29%", delay: "0.1s", color: "#facc15", rotate: "110deg" },
  { left: "38%", delay: "0.5s", color: "#ef4444", rotate: "45deg" },
  { left: "47%", delay: "0.3s", color: "#facc15", rotate: "90deg" },
  { left: "56%", delay: "0.15s", color: "#ef4444", rotate: "25deg" },
  { left: "65%", delay: "0.45s", color: "#facc15", rotate: "120deg" },
  { left: "74%", delay: "0.25s", color: "#ef4444", rotate: "65deg" },
  { left: "83%", delay: "0.55s", color: "#facc15", rotate: "140deg" },
  { left: "92%", delay: "0.35s", color: "#ef4444", rotate: "30deg" },
];

function CelebrationEffect() {
  return (
    <>
      <style>{`
        @keyframes achievement-confetti {
          0% {
            transform: translateY(-15px) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(105px) rotate(260deg) scale(1);
            opacity: 0;
          }
        }

        .achievement-confetti-piece {
          position: absolute;
          top: 0;
          width: 7px;
          height: 13px;
          border-radius: 2px;
          pointer-events: none;
          animation: achievement-confetti 1.8s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .achievement-confetti-piece {
            animation: none;
            display: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 overflow-hidden"
      >
        {confettiPieces.map((piece, index) => (
          <span
            key={index}
            className="achievement-confetti-piece"
            style={{
              left: piece.left,
              backgroundColor: piece.color,
              animationDelay: piece.delay,
              transform: `rotate(${piece.rotate})`,
            }}
          />
        ))}
      </div>
    </>
  );
}

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={image.title}
        className="relative flex w-fit max-w-[95vw] max-h-[94dvh] flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
      >
        {/* Lightbox Header */}
        <div className="flex w-full shrink-0 items-center justify-between gap-4 border-b border-gray-100 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-wider text-red-600">
              SSD SPORT ACADEMY
            </p>
            <h3 className="mt-1 text-sm font-bold text-gray-900 sm:text-base">
              {image.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <X size={21} />
          </button>
        </div>

        {/* Full Image - Natural Aspect Ratio */}
        <div className="flex w-full min-h-0 items-center justify-center overflow-hidden bg-white">
          <img
            src={image.src}
            alt={image.title}
            className="block h-auto w-auto max-h-[calc(94dvh-130px)] max-w-[95vw] object-contain"
          />
        </div>

        {/* Lightbox Description */}
        <p className="w-full shrink-0 border-t border-gray-100 px-4 py-2.5 text-center text-xs text-gray-600 sm:text-sm">
          {image.description}
        </p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 text-center">
      <span className="text-xs font-bold tracking-[2px] text-red-600">
        {eyebrow}
      </span>

      <h2 className="mt-3 text-3xl font-extrabold text-[#101b32] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function Champions({ compact = false }) {
  return (
    <div
      className={`grid gap-4 ${
        compact ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {champions.map((champion) => (
        <div
          key={champion.name}
          className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] text-center transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-white/10 ${
            compact ? "p-5" : "p-7"
          }`}
        >
          <span className="absolute right-4 top-2 text-5xl font-black text-white/[0.05]">
            {champion.number}
          </span>

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600/15 text-red-400 transition group-hover:bg-red-600 group-hover:text-white">
            <Trophy size={24} />
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-3 py-1.5 text-xs font-bold text-yellow-400">
            <Star size={13} />
            Champion
          </div>

          <h3 className="mt-3 text-xl font-extrabold text-white">
            {champion.name}
          </h3>

          {!compact && (
            <p className="mt-2 text-sm leading-6 text-gray-400">
              {champion.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Achievements({ preview = false, onNavigate }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openAchievementsPage = (event) => {
    if (onNavigate) {
      event.preventDefault();
      onNavigate("/achievements");
    }
  };

  // HOMEPAGE PREVIEW - WHITE BACKGROUND
  if (preview) {
    return (
      <section
        id="achievements"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-16"
      >
        <CelebrationEffect />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[2px] text-red-600">
                OUR PROUD MOMENTS
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-[#101b32] sm:text-4xl">
                Celebrating Our Achievements
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Every achievement reflects dedication, discipline and
                the hard work of our young gymnasts.
              </p>
            </div>

            <a
              href="/achievements"
              onClick={openAchievementsPage}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-red-700 sm:self-auto"
            >
              View All Achievements
              <ChevronRight size={18} />
            </a>
          </div>

         
{/* IMAGE LEFT - COMPETITION DETAILS AND CHAMPIONS RIGHT */}
<div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
  {/* Competition Image */}
  <div>
    <button
      type="button"
      onClick={() =>
        setSelectedImage({
          src: competitionPhoto1,
          title: "Our Proud Competition Moment",
          description: competition.title,
        })
      }
      className="group block w-full overflow-hidden rounded-2xl p-0 text-left shadow-lg transition hover:shadow-xl"
      aria-label="View competition cover photo"
    >
      <img
        src={competitionPhoto1}
        alt="SSD Sport Academy competition achievement"
        loading="lazy"
        className="block h-auto w-full rounded-2xl"
      />
    </button>

    <div className="mt-4 text-center sm:text-left">
      <p className="text-xs font-bold tracking-widest text-red-600">
        GYMNASTICS • 2026
      </p>

      <h3 className="mt-1 text-xl font-extrabold text-[#101b32] sm:text-2xl">
        Three Young Champions
      </h3>
    </div>
  </div>


            {/* Competition Details and Meet Our Champions */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Trophy size={25} />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-widest text-red-600">
                    STATE LEVEL COMPETITION
                  </p>
                  <p className="text-sm font-semibold text-gray-500">
                    {competition.year}
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold leading-snug text-[#101b32] sm:text-3xl">
                {competition.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Our young gymnasts proudly represented SSD Sport Academy
                and celebrated a memorable achievement through their
                dedication and commitment.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { value: "03", label: "Champions" },
                  { value: "2026", label: "Year" },
                  { value: "01", label: "Competition" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-gray-200 bg-gray-50 px-2 py-3 text-center transition hover:border-red-200 hover:shadow-sm sm:py-4"
                  >
                    <p className="text-xl font-extrabold text-[#101b32] sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Meet Our Champions - Beside the Image */}
              <div className="mt-7">
                <div className="mb-4 flex items-center gap-2">
                  <Medal className="text-red-600" size={21} />
                  <h3 className="text-lg font-bold text-[#101b32]">
                    Meet Our Champions
                  </h3>
                </div>

                <div className="grid gap-3">
                  {champions.map((champion) => (
                    <div
                      key={champion.name}
                      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md sm:p-4"
                    >
                      <span className="absolute right-3 top-1 text-4xl font-black text-gray-100">
                        {champion.number}
                      </span>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                        <Trophy size={21} />
                      </div>

                      <div className="relative min-w-0">
                        <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-[10px] font-bold text-yellow-700">
                          <Star size={11} />
                          Champion
                        </div>

                        <h4 className="mt-1 text-base font-extrabold text-[#101b32]">
                          {champion.name}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          {champion.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/achievements"
              onClick={openAchievementsPage}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg"
            >
              Explore All Competition Photos & Achievements
              <ChevronRight size={19} />
            </a>
          </div>
        </div>

        <ImageLightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </section>
    );
  }

  // FULL ACHIEVEMENTS PAGE
  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-900">
      {/* HERO */}
      <section className="relative flex items-center overflow-hidden bg-[#101b32] px-5 pb-14 pt-32 sm:px-10 sm:pb-20 lg:px-16">
        <CelebrationEffect />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[2px] text-red-300 sm:text-sm">
              <Trophy size={16} />
              OUR PROUD MOMENTS
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Celebrating
              <span className="block text-red-500">Excellence &</span>
              <span className="block">Achievements</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
              Every achievement tells a story of dedication, discipline
              and determination. We are proud of our young champions
              and their journey.
            </p>

            <a
              href="#competition"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-red-700"
            >
              Explore Achievements
              <ChevronRight size={19} />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-red-600/30 blur-xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl">
              <img
                src={competitionPhoto1}
                alt="SSD Sport Academy champions at the 2026 gymnastics competition"
                className="h-64 w-full rounded-xl bg-white object-contain sm:h-80"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-[#101b32]/90 p-4 text-white backdrop-blur-md">
                <p className="text-xs font-semibold tracking-widest text-red-400">
                  STATE LEVEL COMPETITION 2026
                </p>
                <p className="mt-1 text-xl font-extrabold sm:text-2xl">
                  Celebrating Our Champions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="relative z-10 mx-auto -mt-7 grid max-w-4xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-5">
        {[
          { value: "03", label: "Champions", icon: Trophy },
          { value: "2026", label: "Competition Year", icon: CalendarDays },
          { value: "01", label: "Competition", icon: Award },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-xl border border-gray-100 bg-white px-3 py-5 text-center shadow-lg sm:rounded-2xl sm:p-6"
            >
              <Icon className="mx-auto mb-2 text-red-600" size={25} />
              <h2 className="text-2xl font-extrabold text-[#101b32] sm:text-3xl">
                {item.value}
              </h2>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                {item.label}
              </p>
            </div>
          );
        })}
      </section>

      {/* COMPETITION DETAILS */}
      <section
        id="competition"
        className="scroll-mt-28 px-5 py-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg sm:flex">
            <div className="flex items-center justify-center bg-red-600 p-6 text-white sm:w-32 sm:shrink-0">
              <div className="text-center">
                <Trophy className="mx-auto" size={36} />
                <p className="mt-3 text-xs font-bold tracking-widest">
                  2026
                </p>
              </div>
            </div>

            <div className="flex-1 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-red-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Gymnastics
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  State Level Competition
                </span>
              </div>

              <h2 className="mt-3 text-xl font-extrabold leading-snug text-[#101b32] sm:text-2xl">
                {competition.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Our talented gymnasts proudly represented SSD Sport
                Academy. This achievement celebrates their dedication,
                commitment and hard work.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-gray-600">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={17} className="text-red-600" />
                  Year: {competition.year}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Medal size={17} className="text-red-600" />
                  Three Young Champions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMPIONS */}
      <section className="bg-[#101b32] px-5 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="OUR YOUNG ACHIEVERS"
            title="Meet Our Champions"
            description="Three young talents. One proud academy. Countless dreams."
          />

          <Champions />

          <div className="mt-10 text-center">
            <p className="text-lg font-bold italic text-white sm:text-xl">
              "Hard Work • Discipline • Dedication"
            </p>
            <p className="mt-2 text-xs font-semibold tracking-[3px] text-red-400">
              THE SSD SPIRIT
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-5 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="CAPTURING THE MOMENTS"
            title="Achievement Gallery"
            description="Every picture holds a story of success."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(image)}
                aria-label={`View ${image.title}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-gray-50 sm:h-80 lg:h-[390px]">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                    <span className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-gray-900 opacity-0 shadow-lg transition group-hover:opacity-100">
                      View Photo
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 px-3 py-4">
                  <div>
                    <h3 className="font-bold text-[#101b32]">
                      {image.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {image.description}
                    </p>
                  </div>
                  <ChevronRight className="shrink-0 text-red-600" size={21} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-5 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-red-700 to-red-600 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-14">
          <Sparkles className="mx-auto mb-4 text-yellow-300" size={34} />

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Every Champion Has a Story
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-red-50 sm:text-base">
            At SSD Sport Academy, we believe every achievement begins
            with a dream, grows through discipline and shines through
            dedication. Here's to many more milestones!
          </p>

          <a
            href="/#programs"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-red-600 shadow-lg transition hover:-translate-y-1 hover:bg-gray-100"
          >
            Explore Our Programs
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <ImageLightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}