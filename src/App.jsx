
import { useCallback, useEffect, useState } from "react";
import ErrorBoundary from "./assets/components/ErrorBoundary";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Programs from "./assets/components/Programs";
import Coaches from "./assets/components/Coaches";
import Gallery from "./assets/components/Gallery";
import WhyChooseUs from "./assets/components/WhyChooseUs";
import Testimonials from "./assets/components/Testimonials";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import EnrollForm from "./assets/components/EnrollForm";
import PopupEnroll from "./assets/components/PopupEnroll";
import Careers from "./assets/components/Careers";
import BlogSection from "./assets/components/Blog/BlogSection";
import Achievements from "./assets/components/Achievements";

function App() {
  const [showEnroll, setShowEnroll] = useState(false);

  const [pathname, setPathname] = useState(
    window.location.pathname.replace(/\/+$/, "") || "/"
  );

  const [hash, setHash] = useState(window.location.hash);

  const openEnroll = () => setShowEnroll(true);
  const closeEnroll = () => setShowEnroll(false);

  const navigate = useCallback((href) => {
    const destination = new URL(href, window.location.origin);

    if (destination.origin !== window.location.origin) return;

    window.history.pushState({}, "", destination);

    setPathname(destination.pathname.replace(/\/+$/, "") || "/");
    setHash(destination.hash);
  }, []);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (hash) {
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }, [pathname, hash]);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(
        window.location.pathname.replace(/\/+$/, "") || "/"
      );
      setHash(window.location.hash);
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const isCareersPage = pathname === "/careers";
  const isContactPage = pathname === "/contact";
  const isAchievementsPage = pathname === "/achievements";

  const isHomePage =
    !isCareersPage &&
    !isContactPage &&
    !isAchievementsPage;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-red-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <ErrorBoundary componentName="Navigation">
        <Navbar
          onEnroll={openEnroll}
          onNavigate={navigate}
          isCareersPage={isCareersPage}
          isContactPage={isContactPage}
          isAchievementsPage={isAchievementsPage}
        />
      </ErrorBoundary>

      <main id="main-content">
        {isCareersPage ? (
          <ErrorBoundary componentName="Careers page">
            <Careers />
          </ErrorBoundary>
        ) : isContactPage ? (
          <ErrorBoundary componentName="Contact page">
            <Contact />
          </ErrorBoundary>
        ) : isAchievementsPage ? (
          <ErrorBoundary componentName="Achievements page">
            <Achievements onNavigate={navigate} />
          </ErrorBoundary>
        ) : (
          <>
            <ErrorBoundary componentName="Hero section">
              <Hero onEnroll={openEnroll} />
            </ErrorBoundary>

            <ErrorBoundary componentName="About section">
              <About />
            </ErrorBoundary>

            <ErrorBoundary componentName="Coaches section">
              <Coaches />
            </ErrorBoundary>

            <ErrorBoundary componentName="Programs section">
              <Programs />
            </ErrorBoundary>

            <ErrorBoundary componentName="Gallery section">
              <Gallery />
            </ErrorBoundary>

            <ErrorBoundary componentName="Why Choose Us section">
              <WhyChooseUs />
            </ErrorBoundary>

            <ErrorBoundary componentName="Testimonials section">
              <Testimonials />
            </ErrorBoundary>

            {/* ACHIEVEMENTS HOMEPAGE PREVIEW */}
            <ErrorBoundary componentName="Achievements section">
              <Achievements preview onNavigate={navigate} />
            </ErrorBoundary>

            {/* EXISTING BLOG SECTION */}
            <ErrorBoundary componentName="Blog section">
              <BlogSection />
            </ErrorBoundary>

            <ErrorBoundary componentName="Contact section">
              <Contact />
            </ErrorBoundary>
          </>
        )}
      </main>

      {showEnroll && (
        <ErrorBoundary componentName="Enrollment form">
          <EnrollForm onClose={closeEnroll} />
        </ErrorBoundary>
      )}

      {isHomePage && <PopupEnroll />}

      <ErrorBoundary componentName="Footer">
        <Footer
          isCareersPage={isCareersPage}
          isContactPage={isContactPage}
          isAchievementsPage={isAchievementsPage}
          onNavigate={navigate}
        />
      </ErrorBoundary>
    </>
  );
}

export default App;
