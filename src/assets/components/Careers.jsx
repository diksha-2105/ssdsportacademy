import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Dumbbell,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const opening = {
  title: "Gymnastics Coach",
  department: "Gymnastics Coaching",
  overview:
    "SSD Sport Academy is looking for a passionate and dedicated Gymnastics Coach to guide students in developing their gymnastics abilities, physical coordination, flexibility, strength, balance, and confidence.",
  responsibilities: [
    "Conduct gymnastics training sessions suitable for students' ages and abilities.",
    "Teach gymnastics fundamentals, body control, flexibility, balance, coordination, and appropriate techniques.",
    "Plan structured practice sessions and monitor student progress.",
    "Provide constructive feedback and encourage consistent improvement.",
    "Maintain a safe, disciplined, and supportive training environment.",
    "Follow appropriate safety procedures during gymnastics activities.",
    "Communicate professionally with students, parents, and the academy team where required.",
  ],
  qualifications: [
    "Relevant gymnastics knowledge or coaching experience.",
    "Understanding of gymnastics training methods and safety practices.",
    "Good communication and student-management skills.",
    "Relevant coaching certifications are an advantage where applicable.",
  ],
};

const reasons = [
  {
    title: "Develop Young Talent",
    description:
      "Help students improve their gymnastics skills and confidence.",
    icon: Award,
  },
  {
    title: "Build Strong Foundations",
    description:
      "Teach flexibility, balance, coordination, body control, and technique.",
    icon: Dumbbell,
  },
  {
    title: "Encourage Discipline",
    description:
      "Promote consistency, focus, dedication, and a positive attitude.",
    icon: ShieldCheck,
  },
  {
    title: "Make a Difference",
    description:
      "Support students in developing their potential through gymnastics.",
    icon: Heart,
  },
];

const faqs = [
  {
    question: "What qualifications are preferred for the Gymnastics Coach role?",
    answer:
      "Relevant gymnastics knowledge or coaching experience, an understanding of training methods and safety practices, and good communication and student-management skills are preferred. Relevant coaching certifications are an advantage where applicable.",
  },
  {
    question: "Can candidates with practical gymnastics experience apply?",
    answer:
      "Yes. Candidates with relevant practical gymnastics experience are welcome to share their background and coaching experience in the application.",
  },
  {
    question: "How can I submit my application?",
    answer:
      "Complete the application form and continue to WhatsApp. Review the prefilled message and tap Send in WhatsApp to submit your application.",
  },
  {
    question: "How will shortlisted candidates be contacted?",
    answer:
      "Shortlisted candidates will be contacted using the details they include in their application.",
  },
];

const initialValues = {
  fullName: "",
  mobile: "",
  email: "",
  city: "",
  experience: "",
  qualifications: "",
  introduction: "",
};

function getApplicationUrl(values) {
  const message = [
    "Hello SSD Sport Academy, I would like to apply for the Gymnastics Coach position.",
    "",
    `Full name: ${values.fullName}`,
    `Mobile number: ${values.mobile}`,
    `Email address: ${values.email}`,
    `Current city: ${values.city}`,
    `Position: ${opening.title}`,
    `Gymnastics coaching experience: ${values.experience}`,
    `Relevant qualifications or certifications: ${values.qualifications || "Not provided"}`,
    "",
    "Short introduction:",
    values.introduction,
  ].join("\n");

  return `https://wa.me/919325017557?text=${encodeURIComponent(message)}`;
}

export default function Careers() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handoff, setHandoff] = useState(null);
  const [applicationUrl, setApplicationUrl] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    const originalTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const openGraphTitle = document.querySelector('meta[property="og:title"]');
    const openGraphDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    const openGraphUrl = document.querySelector('meta[property="og:url"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    const originalValues = {
      description: description?.getAttribute("content"),
      canonical: canonical?.getAttribute("href"),
      openGraphTitle: openGraphTitle?.getAttribute("content"),
      openGraphDescription: openGraphDescription?.getAttribute("content"),
      openGraphUrl: openGraphUrl?.getAttribute("content"),
      twitterTitle: twitterTitle?.getAttribute("content"),
      twitterDescription: twitterDescription?.getAttribute("content"),
    };
    const pageTitle =
      "Careers | Gymnastics Coach Jobs in Pune | SSD Sport Academy";
    const pageDescription =
      "Join SSD Sport Academy in Pune as a Gymnastics Coach. Explore the opportunity and apply to help young athletes develop their gymnastics skills and confidence.";

    document.title = pageTitle;
    description?.setAttribute("content", pageDescription);
    canonical?.setAttribute("href", "https://ssdsportacademy.com/careers");
    openGraphTitle?.setAttribute("content", pageTitle);
    openGraphDescription?.setAttribute("content", pageDescription);
    openGraphUrl?.setAttribute("content", "https://ssdsportacademy.com/careers");
    twitterTitle?.setAttribute("content", pageTitle);
    twitterDescription?.setAttribute("content", pageDescription);

    return () => {
      document.title = originalTitle;
      if (originalValues.description !== null) {
        description?.setAttribute("content", originalValues.description);
      }
      if (originalValues.canonical !== null) {
        canonical?.setAttribute("href", originalValues.canonical);
      }
      if (originalValues.openGraphTitle !== null) {
        openGraphTitle?.setAttribute("content", originalValues.openGraphTitle);
      }
      if (originalValues.openGraphDescription !== null) {
        openGraphDescription?.setAttribute(
          "content",
          originalValues.openGraphDescription,
        );
      }
      if (originalValues.openGraphUrl !== null) {
        openGraphUrl?.setAttribute("content", originalValues.openGraphUrl);
      }
      if (originalValues.twitterTitle !== null) {
        twitterTitle?.setAttribute("content", originalValues.twitterTitle);
      }
      if (originalValues.twitterDescription !== null) {
        twitterDescription?.setAttribute(
          "content",
          originalValues.twitterDescription,
        );
      }
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setHandoff(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    Object.entries(values).forEach(([name, value]) => {
      if (name !== "qualifications" && !value.trim()) {
        nextErrors[name] = "This field is required.";
      }
    });

    const mobileDigits = values.mobile.replace(/\D/g, "").length;
    if (
      values.mobile &&
      (!/^\+?[0-9\s()-]+$/.test(values.mobile.trim()) ||
        mobileDigits < 7 ||
        mobileDigits > 15)
    ) {
      nextErrors.mobile = "Enter a valid number with 7 to 15 digits.";
    }

    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    setHandoff(null);

    if (Object.keys(nextErrors).length > 0) {
      window.requestAnimationFrame(() => {
        formRef.current?.querySelector('[aria-invalid="true"]')?.focus();
      });
      return;
    }

    const url = getApplicationUrl(values);
    setApplicationUrl(url);
    setIsSubmitting(true);

    try {
      const whatsappWindow = window.open(url, "_blank");
      if (!whatsappWindow) {
        setHandoff({
          type: "error",
          message:
            "Your browser blocked the WhatsApp window. Use the link below to continue, or allow pop-ups and try again.",
        });
        setIsSubmitting(false);
        return;
      }

      whatsappWindow.opener = null;
      setHandoff({
        type: "pending",
        message: "Opening WhatsApp with your application details…",
      });
      window.setTimeout(() => {
        setHandoff({
          type: "ready",
          message:
            "WhatsApp is ready with your application details. Review the message and tap Send in WhatsApp to submit your application.",
        });
        setIsSubmitting(false);
      }, 0);
    } catch (error) {
      console.error("Could not open the WhatsApp application.", error);
      setHandoff({
        type: "error",
        message:
          "We could not open WhatsApp. Please use the link below to continue your application.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-50 px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44">
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-red-100/70 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-5 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            Careers at SSD Sport Academy
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
            We&apos;re Hiring Gymnastics Coaches!
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Passionate about gymnastics? Join SSD Sport Academy and help young
            athletes develop flexibility, balance, coordination, strength,
            confidence, and essential gymnastics skills in a supportive
            training environment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#application"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Apply for a Coaching Position <ArrowRight size={18} />
            </a>
            <a
              href="#opening"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-red-400 hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Explore the Opportunity <ArrowDown size={18} />
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="why-join-heading"
        className="px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
              Coach with purpose
            </p>
            <h2
              id="why-join-heading"
              className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Why Join SSD Sport Academy?
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-red-300"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/15 text-red-400">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="opening"
        aria-labelledby="opening-heading"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
              Current opening
            </p>
            <h2
              id="opening-heading"
              className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Join Our Gymnastics Coaching Team
            </h2>
          </div>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-400">
                  <Sparkles size={23} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {opening.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Department: {opening.department}
                  </p>
                </div>
              </div>
              <a
                href="#application"
                className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 sm:self-auto"
              >
                Apply Now <ArrowRight size={17} />
              </a>
            </div>
            <div className="grid gap-8 pt-6 lg:grid-cols-2">
              <div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Role Overview
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {opening.overview}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Key Responsibilities
                </h4>
                <ul className="mt-3 space-y-3">
                  {opening.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"
                      />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-lg font-semibold text-slate-900">
                  Preferred Qualifications
                </h4>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {opening.qualifications.map((qualification) => (
                    <li
                      key={qualification}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"
                      />
                      {qualification}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        id="application"
        aria-labelledby="application-heading"
        className="scroll-mt-20 border-y border-white/10 bg-slate-50 px-5 py-16 text-slate-900 sm:px-8 sm:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
              Take the next step
            </p>
            <h2
              id="application-heading"
              className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl"
            >
              Apply for the Gymnastics Coach Role
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Complete the form to prepare your application in WhatsApp. Your
              application is sent only when you review and send the message
              there.
            </p>
          </div>

          <form
            ref={formRef}
            noValidate
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2 sm:p-8"
          >
            {Object.keys(errors).length > 0 && (
              <p
                role="alert"
                className="sm:col-span-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                Please correct the highlighted fields before continuing.
              </p>
            )}

            <FormField
              label="Full Name"
              name="fullName"
              value={values.fullName}
              error={errors.fullName}
              onChange={handleChange}
              autoComplete="name"
            />
            <FormField
              label="Mobile Number"
              name="mobile"
              type="tel"
              value={values.mobile}
              error={errors.mobile}
              onChange={handleChange}
              autoComplete="tel"
              inputMode="tel"
            />
            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={values.email}
              error={errors.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <FormField
              label="Current City"
              name="city"
              value={values.city}
              error={errors.city}
              onChange={handleChange}
              autoComplete="address-level2"
            />
            <FormField
              label="Position"
              name="position"
              value={opening.title}
              readOnly
            />
            <FormField
              label="Gymnastics Coaching Experience"
              name="experience"
              value={values.experience}
              error={errors.experience}
              onChange={handleChange}
              as="textarea"
              placeholder="Describe your gymnastics coaching or practical experience."
              rows={3}
            />
            <FormField
              label="Relevant Qualifications or Certifications (optional)"
              name="qualifications"
              value={values.qualifications}
              onChange={handleChange}
              as="textarea"
              rows={3}
              required={false}
            />
            <FormField
              label="Short Introduction"
              name="introduction"
              value={values.introduction}
              error={errors.introduction}
              onChange={handleChange}
              as="textarea"
              placeholder="Tell us about yourself and why you would like to coach with us."
              rows={4}
              className="sm:col-span-2"
            />

            <div className="sm:col-span-2">
              {handoff && (
                <div
                  role={handoff.type === "error" ? "alert" : "status"}
                  className={`mb-4 rounded-lg border px-4 py-3 text-sm leading-6 ${
                    handoff.type === "error"
                      ? "border-red-200 bg-red-50 text-red-800"
                      : handoff.type === "ready"
                        ? "border-green-200 bg-green-50 text-green-800"
                        : "border-blue-200 bg-blue-50 text-blue-800"
                  }`}
                >
                  <p>{handoff.message}</p>
                  {handoff.type === "error" && (
                    <a
                      href={applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex font-semibold underline underline-offset-2"
                    >
                      Open WhatsApp application
                    </a>
                  )}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? "Opening WhatsApp…" : "Submit Application"}
                {!isSubmitting && <ArrowRight size={17} />}
              </button>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                WhatsApp opens with a message draft. Your application is not
                submitted until you tap Send there.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
            Good to know
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-center text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 [&::-webkit-details-marker]:hidden">
                  {question}
                  <span
                    aria-hidden="true"
                    className="text-xl text-red-400 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-8 text-sm leading-6 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-16 text-center sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Ready to Inspire the Next Generation of Gymnasts?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Bring your passion for gymnastics and your dedication to student
            development to SSD Sport Academy. Apply to become part of our
            coaching team.
          </p>
          <a
            href="#application"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Apply Now <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

function FormField({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  as = "input",
  className = "",
  required = true,
  ...props
}) {
  const Field = as;
  const errorId = `${name}-error`;

  return (
    <label
      className={`grid gap-2 text-sm font-medium text-slate-800 ${className}`}
    >
      {label}
      <Field
        name={name}
        type={as === "input" ? type : undefined}
        value={value}
        onChange={onChange}
        readOnly={name === "position"}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`min-h-12 rounded-lg border bg-white px-3 py-2 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-100 ${
          error ? "border-red-500" : "border-slate-300"
        } ${as === "textarea" ? "resize-y" : ""} ${
          name === "position" ? "cursor-not-allowed bg-slate-100" : ""
        }`}
        {...props}
      />
      {error && (
        <span id={errorId} className="text-sm text-red-700">
          {error}
        </span>
      )}
    </label>
  );
}
