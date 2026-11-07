import { useCallback, useEffect, useRef, useState } from "react";
import {
  X,
  Phone,
  User,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import googleFormConfig from "../../googleFormConfig";

const INITIAL_VALUES = {
  parentName: "",
  phone: "",
  age: "",
};

const SHOW_DELAY = 5000;
const AUTO_CLOSE_DELAY = 5000;
const CLOSE_ANIM_DURATION = 220;
const SUBMIT_TIMEOUT = 10000;
const SUCCESS_DISPLAY_DURATION = 2500;

const inputBaseClasses =
  "w-full rounded-xl border bg-slate-50 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 touch-manipulation";

const fieldClasses = (hasError) =>
  `${inputBaseClasses} ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-slate-200 focus:border-red-500 focus:ring-red-100"
  }`;

export default function PopupEnroll() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const showTimer = useRef(null);
  const autoCloseTimer = useRef(null);
  const closeTimer = useRef(null);
  const successTimer = useRef(null);
  const successCloseTimer = useRef(null);
  const submitTimeout = useRef(null);
  const submissionPending = useRef(false);
  const hiddenFormRef = useRef(null);

  /* ----------------------------------------
     CLEAR ALL TIMERS
  ----------------------------------------- */
  const clearAllTimers = useCallback(() => {
    clearTimeout(showTimer.current);
    clearTimeout(autoCloseTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(successTimer.current);
    clearTimeout(successCloseTimer.current);
    clearTimeout(submitTimeout.current);
  }, []);

  /* ----------------------------------------
     CLOSE POPUP
  ----------------------------------------- */
  const closePopup = useCallback(() => {
    clearTimeout(autoCloseTimer.current);
    clearTimeout(successCloseTimer.current);

    setMounted(false);

    closeTimer.current = setTimeout(() => {
      setVisible(false);
      setInteracted(false);
      setIsSuccess(false);
      setIsSubmitting(false);
      submissionPending.current = false;
      setValues(INITIAL_VALUES);
      setErrors({});
    }, CLOSE_ANIM_DURATION);
  }, []);

  /* ----------------------------------------
     SHOW POPUP AFTER 5 SECONDS
  ----------------------------------------- */
  useEffect(() => {
    showTimer.current = setTimeout(() => {
      setVisible(true);

      requestAnimationFrame(() => {
        setMounted(true);
      });
    }, SHOW_DELAY);

    return clearAllTimers;
  }, [clearAllTimers]);

  /* ----------------------------------------
     LOCK BACKGROUND SCROLL
  ----------------------------------------- */
  useEffect(() => {
    if (!visible) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [visible]);

  /* ----------------------------------------
     AUTO CLOSE AFTER 5 SECONDS
     ONLY IF USER HAS NOT INTERACTED
  ----------------------------------------- */
  useEffect(() => {
    if (!visible || interacted || isSuccess) return;

    autoCloseTimer.current = setTimeout(() => {
      closePopup();
    }, AUTO_CLOSE_DELAY);

    return () => {
      clearTimeout(autoCloseTimer.current);
    };
  }, [visible, interacted, isSuccess, closePopup]);

  /* ----------------------------------------
     USER INTERACTION
     CANCEL AUTO CLOSE TIMER
  ----------------------------------------- */
  const handleInteraction = useCallback(() => {
    setInteracted((previous) => {
      if (!previous) {
        clearTimeout(autoCloseTimer.current);
      }

      return true;
    });
  }, []);

  /* ----------------------------------------
     INPUT CHANGE
  ----------------------------------------- */
  const handleChange = useCallback(
    (e) => {
      handleInteraction();

      const { name, value } = e.target;

      // Phone and age: numbers only
      if (
        (name === "phone" || name === "age") &&
        !/^\d*$/.test(value)
      ) {
        return;
      }

      // Phone maximum 10 digits
      if (name === "phone" && value.length > 10) {
        return;
      }

      // Age maximum 2 digits
      if (name === "age" && value.length > 2) {
        return;
      }

      setValues((previous) => ({
        ...previous,
        [name]: value,
      }));

      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    },
    [handleInteraction]
  );

  /* ----------------------------------------
     VALIDATION
  ----------------------------------------- */
  const validateForm = useCallback(() => {
    const newErrors = {};

    const parentName = values.parentName.trim();
    const phone = values.phone.trim();
    const age = Number(values.age);

    if (!parentName) {
      newErrors.parentName = "Please enter your name";
    }

    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!values.age || age < 3 || age > 25) {
      newErrors.age = "Enter a valid student age";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }, [values]);

  /* ----------------------------------------
     SUBMIT FORM
  ----------------------------------------- */
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      handleInteraction();

      if (!validateForm()) {
        return;
      }

      const { popupFormAction, popupFieldMap } = googleFormConfig;
      if (
        !popupFormAction ||
        !popupFieldMap?.parentName ||
        !popupFieldMap?.phone ||
        !popupFieldMap?.age
      ) {
        setErrors({ form: "Form connection is not configured correctly." });
        return;
      }

      setIsSubmitting(true);
      submissionPending.current = true;

      try {
        // Submit data to Google Form
        if (!hiddenFormRef.current) {
          throw new Error("Google Form submission form is unavailable");
        }

        hiddenFormRef.current.submit();

        submitTimeout.current = setTimeout(() => {
          submissionPending.current = false;
          setIsSubmitting(false);
          setErrors({
            form: "We could not confirm the submission. Please try again.",
          });
        }, SUBMIT_TIMEOUT);
      } catch (error) {
        console.error("Google Form submission failed:", error);

        submissionPending.current = false;
        setIsSubmitting(false);

        setErrors({
          form: "Something went wrong. Please try again.",
        });
      }
    },
    [handleInteraction, validateForm]
  );

  const handleGoogleFormLoad = useCallback(() => {
    if (!submissionPending.current) return;

    submissionPending.current = false;
    clearTimeout(submitTimeout.current);
    setIsSubmitting(false);
    setIsSuccess(true);
    setValues(INITIAL_VALUES);

    successCloseTimer.current = setTimeout(() => {
      closePopup();
    }, SUCCESS_DISPLAY_DURATION);
  }, [closePopup]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto px-4 py-6"
      style={{
        paddingTop: "max(1.5rem, env(safe-area-inset-top))",
        paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
      }}
      onMouseDown={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-[3px] transition-opacity duration-300 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* MODAL */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className={`relative z-[91] my-auto w-full max-w-[420px] transform overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition-all duration-300 ${
          mounted
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-6 scale-95 opacity-0"
        }`}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        {/* --------------------------------
            HEADER
        --------------------------------- */}
        <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-600 to-orange-500 px-6 pb-6 pt-6 text-white">
          {/* Decorative background */}
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />

          <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-black/10" />

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 active:bg-white/30 touch-manipulation"
          >
            <X size={19} />
          </button>

          {!isSuccess && (
            <>
              {/* BRAND */}
              <div className="mb-3">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/85">
                  SSD Sport Academy
                </span>
              </div>

              {/* HEADING */}
              <h2
                id="enquiry-title"
                className="pr-8 text-2xl font-bold leading-tight"
              >
                Quick Enquiry
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-1.5 max-w-[320px] text-sm leading-relaxed text-white/90">
                Share your details and we'll get in touch with you shortly.
              </p>
            </>
          )}
        </div>

        {/* --------------------------------
            FORM BODY
        --------------------------------- */}
        <div className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
          {isSuccess ? (
            /* SUCCESS */
            <div className="flex flex-col items-center py-6 text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                <CheckCircle2
                  size={42}
                  className="text-green-600"
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Thank You!
              </h3>

              <p className="mt-2 max-w-[280px] text-sm leading-relaxed text-slate-500">
                Thank you! Your free trial request has been received. Our team
                will contact you shortly.
              </p>
            </div>
          ) : (
            /* FORM */
            <form
              onSubmit={handleSubmit}
              className="space-y-3.5"
              onFocus={handleInteraction}
              noValidate
            >
              {/* PARENT NAME */}
              <div>
                <label
                  htmlFor="parentName"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Parent Name
                </label>

                <div className="relative">
                  <User
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    value={values.parentName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    autoCapitalize="words"
                    className={`${fieldClasses(
                      !!errors.parentName
                    )} pl-10 pr-3`}
                  />
                </div>

                {errors.parentName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.parentName}
                  </p>
                )}
              </div>

              {/* MOBILE NUMBER */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Mobile Number
                </label>

                <div className="relative">
                  <Phone
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <span className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                    +91
                  </span>

                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoComplete="tel"
                    maxLength={10}
                    className={`${fieldClasses(
                      !!errors.phone
                    )} pl-[68px] pr-3`}
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* STUDENT AGE */}
              <div>
                <label
                  htmlFor="age"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Student Age
                </label>

                <div className="relative">
                  <GraduationCap
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="age"
                    name="age"
                    type="text"
                    value={values.age}
                    onChange={handleChange}
                    placeholder="Student age"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={2}
                    className={`${fieldClasses(
                      !!errors.age
                    )} pl-10 pr-3`}
                  />
                </div>

                {errors.age && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.age}
                  </p>
                )}
              </div>

              {/* FORM ERROR */}
              {errors.form && (
                <div className="rounded-xl bg-red-50 px-3 py-2 text-center text-xs text-red-600">
                  {errors.form}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 touch-manipulation"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Book a Free Trial
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              {/* PRIVACY TEXT */}
              <p className="text-center text-[11px] leading-relaxed text-slate-400">
                Quick enquiry • No spam • We'll contact you shortly
              </p>
            </form>
          )}

          {/* --------------------------------
              HIDDEN GOOGLE FORM
          --------------------------------- */}
          <form
            ref={hiddenFormRef}
            action={googleFormConfig.popupFormAction}
            method="POST"
            target="googlePopupIframe"
            style={{ display: "none" }}
          >
            <input
              type="hidden"
              name={googleFormConfig.popupFieldMap.parentName}
              value={values.parentName}
            />

            <input
              type="hidden"
              name={googleFormConfig.popupFieldMap.phone}
              value={values.phone}
            />

            <input
              type="hidden"
              name={googleFormConfig.popupFieldMap.age}
              value={values.age}
            />
          </form>

          <iframe
            name="googlePopupIframe"
            title="Google Form Submission"
            onLoad={handleGoogleFormLoad}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
}