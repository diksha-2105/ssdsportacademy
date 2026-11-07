import { useRef, useState } from "react";
import { CheckCircle2, X, User, Phone, Mail, CalendarDays } from "lucide-react";
import googleFormConfig from "../../googleFormConfig";

export default function EnrollForm({ onClose }) {
  const [values, setValues] = useState({
    fullName: "",
    age: "",
    parentName: "",
    phone: "",
    email: "",
    city: "",
    trialDate: "",
    experience: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const hiddenFormRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow numbers for age
    if (name === "age" && value !== "" && !/^\d+$/.test(value)) {
      return;
    }

    // Only allow numbers for phone
    if (name === "phone" && value !== "" && !/^\d+$/.test(value)) {
      return;
    }

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!googleFormConfig.formAction) {
      alert(
        "Google Form action URL not configured. Update src/googleFormConfig.js",
      );
      return;
    }

    if (
      !values.fullName ||
      !values.age ||
      !values.parentName ||
      !values.phone ||
      !values.email ||
      !values.city ||
      !values.trialDate ||
      !values.experience
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (Number(values.age) < 3 || Number(values.age) > 25) {
      setError("Student age should be between 3 and 25 years.");
      return;
    }

    if (!/^\d{10}$/.test(values.phone)) {
      setError("Please enter exactly 10 digits.");
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Submit to Google Forms
    if (hiddenFormRef.current) {
      hiddenFormRef.current.submit();
    }

    // Show success after submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setValues({
        fullName: "",
        age: "",
        parentName: "",
        phone: "",
        email: "",
        city: "",
        trialDate: "",
        experience: "",
        message: "",
      });
    }, 900);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose && onClose();
  };

  // -----------------------------------------
  // SUCCESS SCREEN
  // -----------------------------------------
  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
        <div className="w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
            <CheckCircle2 size={34} strokeWidth={2.5} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900">
            Trial Booked!
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Thank you for choosing SSD Sport Academy. We've received your
            request and our team will contact you shortly to confirm your trial
            session.
          </p>

          <button
            type="button"
            onClick={handleClose}
            className="mt-7 w-full rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 active:scale-[0.98]"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  // -----------------------------------------
  // MAIN FORM
  // -----------------------------------------
  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm">
      <div className="flex h-full items-end justify-center sm:items-center sm:p-4">
        <div
          className="
            relative flex h-[96dvh] w-full flex-col overflow-hidden
            rounded-t-[28px] bg-white shadow-2xl
            sm:h-auto sm:max-h-[92vh] sm:max-w-xl sm:rounded-3xl
          "
        >
          {/* =========================================
              HEADER
          ========================================== */}
          <div className="shrink-0 bg-gradient-to-r from-red-600 to-orange-500 px-5 pb-5 pt-5 text-white sm:px-7 sm:pt-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-100">
                  SSD Sport Academy
                </p>

                <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                  Book a Free Trial
                </h2>

                <p className="mt-1.5 text-sm text-orange-50/90">
                  Fill in the details and we'll contact you shortly.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close form"
                className="
                  flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-full bg-white/15 text-white
                  transition active:scale-90
                  hover:bg-white/25
                "
              >
                <X size={21} />
              </button>
            </div>

            {/* Progress / reassurance */}
            <div className="mt-4 flex items-center gap-2 text-xs text-orange-50">
              <CheckCircle2 size={15} />
              <span>Free trial • Professional coaching • Safe training</span>
            </div>
          </div>

          {/* =========================================
              FORM CONTENT
          ========================================== */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 pb-28 sm:px-7 sm:pb-7">
            {error && (
              <div
                role="alert"
                className="
                  mb-5 rounded-2xl border border-red-200
                  bg-red-50 px-4 py-3
                  text-sm font-medium text-red-700
                "
              >
                {error}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* =====================================
                  STUDENT DETAILS
              ====================================== */}
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Student Details
                </h3>

                <div className="mt-3 space-y-4">
                  {/* Student Name */}
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Student Name <span className="text-red-500">*</span>
                    </span>

                    <div className="relative">
                      <User
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Enter student's full name"
                        className="
                          h-12 w-full rounded-2xl border border-slate-200
                          bg-slate-50 pl-11 pr-4 text-base text-slate-900
                          outline-none transition
                          placeholder:text-slate-400
                          focus:border-red-500 focus:bg-white
                          focus:ring-4 focus:ring-red-100
                        "
                      />
                    </div>
                  </label>

                  {/* Age + Parent */}
                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                        Age <span className="text-red-500">*</span>
                      </span>

                      <input
                        type="number"
                        name="age"
                        min="3"
                        max="25"
                        inputMode="numeric"
                        value={values.age}
                        onChange={handleChange}
                        required
                        placeholder="Age"
                        className="
                          h-12 w-full rounded-2xl border border-slate-200
                          bg-slate-50 px-4 text-base text-slate-900
                          outline-none transition
                          placeholder:text-slate-400
                          focus:border-red-500 focus:bg-white
                          focus:ring-4 focus:ring-red-100
                        "
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                        Parent / Guardian{" "}
                        <span className="text-red-500">*</span>
                      </span>

                      <input
                        name="parentName"
                        value={values.parentName}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Parent name"
                        className="
                          h-12 w-full rounded-2xl border border-slate-200
                          bg-slate-50 px-4 text-base text-slate-900
                          outline-none transition
                          placeholder:text-slate-400
                          focus:border-red-500 focus:bg-white
                          focus:ring-4 focus:ring-red-100
                        "
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* =====================================
                  CONTACT DETAILS
              ====================================== */}
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Contact Details
                </h3>

                <div className="mt-3 space-y-4">
                  {/* Phone */}
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Mobile Number <span className="text-red-500">*</span>
                    </span>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        maxLength={10}
                        inputMode="numeric"
                        autoComplete="tel"
                        required
                        placeholder="Enter 10-digit mobile number"
                        className="
    h-12 w-full rounded-2xl border border-slate-200
    bg-slate-50 pl-11 pr-4 text-base text-slate-900
    outline-none transition
    placeholder:text-slate-400
    focus:border-red-500 focus:bg-white
    focus:ring-4 focus:ring-red-100
  "
                      />
                    </div>
                  </label>

                  {/* Email */}
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Email Address <span className="text-red-500">*</span>
                    </span>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        inputMode="email"
                        placeholder="your@email.com"
                        className="
                          h-12 w-full rounded-2xl border border-slate-200
                          bg-slate-50 pl-11 pr-4 text-base text-slate-900
                          outline-none transition
                          placeholder:text-slate-400
                          focus:border-red-500 focus:bg-white
                          focus:ring-4 focus:ring-red-100
                        "
                      />
                    </div>
                  </label>

                  {/* City */}
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                      City / Area <span className="text-red-500">*</span>
                    </span>

                    <input
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      required
                      autoComplete="address-level2"
                      placeholder="e.g. Dhanori, Pune"
                      className="
                        h-12 w-full rounded-2xl border border-slate-200
                        bg-slate-50 px-4 text-base text-slate-900
                        outline-none transition
                        placeholder:text-slate-400
                        focus:border-red-500 focus:bg-white
                        focus:ring-4 focus:ring-red-100
                      "
                    />
                  </label>
                </div>
              </div>

              {/* =====================================
                  TRIAL DETAILS
              ====================================== */}
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Trial Details
                </h3>

                <div className="mt-3 space-y-4">
                  {/* Date */}
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Preferred Trial Date{" "}
                      <span className="text-red-500">*</span>
                    </span>

                    <div className="relative">
                      <CalendarDays
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="date"
                        name="trialDate"
                        value={values.trialDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="
                          h-12 w-full rounded-2xl border border-slate-200
                          bg-slate-50 pl-11 pr-4 text-base text-slate-900
                          outline-none transition
                          focus:border-red-500 focus:bg-white
                          focus:ring-4 focus:ring-red-100
                        "
                      />
                    </div>
                  </label>

                  {/* Experience */}
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Previous Sports Experience{" "}
                      <span className="text-red-500">*</span>
                    </span>

                    <select
                      name="experience"
                      value={values.experience}
                      onChange={handleChange}
                      required
                      className="
                        h-12 w-full rounded-2xl border border-slate-200
                        bg-slate-50 px-4 text-base text-slate-900
                        outline-none transition
                        focus:border-red-500 focus:bg-white
                        focus:ring-4 focus:ring-red-100
                      "
                    >
                      <option value="">Select experience</option>
                      <option value="No Experience">No Experience</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Some Experience">Some Experience</option>
                      <option value="Advanced Player">Advanced Player</option>
                    </select>
                  </label>

                  {/* Message */}
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Additional Message{" "}
                      <span className="font-normal text-slate-400">
                        (Optional)
                      </span>
                    </span>

                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Anything you'd like us to know?"
                      className="
                        w-full resize-none rounded-2xl border border-slate-200
                        bg-slate-50 px-4 py-3 text-base text-slate-900
                        outline-none transition
                        placeholder:text-slate-400
                        focus:border-red-500 focus:bg-white
                        focus:ring-4 focus:ring-red-100
                      "
                    />
                  </label>
                </div>
              </div>

              {/* Desktop submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  hidden w-full items-center justify-center
                  rounded-2xl bg-gradient-to-r from-red-600 to-orange-500
                  px-6 py-3.5 text-sm font-bold text-white
                  shadow-lg shadow-red-500/20
                  transition hover:brightness-110
                  active:scale-[0.99]
                  disabled:cursor-not-allowed disabled:opacity-60
                  sm:flex
                "
              >
                {isSubmitting ? "Booking Trial..." : "Book Free Trial"}
              </button>

              <p className="pb-2 text-center text-xs leading-5 text-slate-400">
                Your details are safe with us. Our team will contact you to
                confirm the trial.
              </p>
            </form>
          </div>

          {/* =========================================
              MOBILE STICKY BUTTON
          ========================================== */}
          <div
            className="
              absolute bottom-0 left-0 right-0 z-20
              border-t border-slate-200 bg-white/95
              px-4 pb-[calc(12px+env(safe-area-inset-bottom))]
              pt-3 backdrop-blur-md
              sm:hidden
            "
          >
            <button
              type="button"
              onClick={() => formRef.current && formRef.current.requestSubmit()}
              disabled={isSubmitting}
              className="
                flex h-12 w-full items-center justify-center
                rounded-2xl bg-gradient-to-r from-red-600 to-orange-500
                text-sm font-bold text-white
                shadow-lg shadow-red-500/20
                transition active:scale-[0.98]
                disabled:cursor-not-allowed disabled:opacity-60
              "
            >
              {isSubmitting ? "Booking Trial..." : "Book Free Trial"}
            </button>
          </div>

          {/* =========================================
              HIDDEN GOOGLE FORM
          ========================================== */}
          <form
            ref={hiddenFormRef}
            action={googleFormConfig.formAction}
            method="POST"
            target="googleFormIframe"
            style={{ display: "none" }}
          >
            {Object.entries(googleFormConfig.fieldMap || {}).map(
              ([key, entryName]) => (
                <input
                  key={entryName}
                  type="hidden"
                  name={entryName}
                  value={values[key] || ""}
                />
              ),
            )}
          </form>

          <iframe
            name="googleFormIframe"
            title="google-form-target"
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
}
