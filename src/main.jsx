import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";
import App from "./App.jsx";
import { installClientDeterrents } from "./utils/security";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
);

// Install client-side deterrents (non-security, just deterrent)
if (typeof window !== "undefined") {
  try {
    installClientDeterrents();
  } catch (e) {
    // ignore
  }
}
