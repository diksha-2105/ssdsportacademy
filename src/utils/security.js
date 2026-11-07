// Lightweight client-side deterrents. These only deter casual users.
// Never rely on client-side protections for real security.

export function installClientDeterrents() {
  // Disable right-click context menu
  try {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  } catch (e) {
    // no-op
  }

  // Block common devtools key combos (F12, Ctrl+Shift+I/C/J, Ctrl+U)
  try {
    window.addEventListener("keydown", (e) => {
      const key = e.key || e.keyCode;
      const ctrl = e.ctrlKey || e.metaKey;

      if (
        key === "F12" ||
        (ctrl && e.shiftKey && (key === "I" || key === "i" || key === "J" || key === "j")) ||
        (ctrl && (key === "U" || key === "u"))
      ) {
        e.preventDefault();
        e.stopPropagation();
        // small visual deterrent
        flashWarning();
      }
    });
  } catch (e) {}

  function flashWarning() {
    const id = "__inspect_warning";
    if (document.getElementById(id)) return;
    const el = document.createElement("div");
    el.id = id;
    el.textContent = "Developer tools are disabled on this site.";
    Object.assign(el.style, {
      position: "fixed",
      bottom: "18%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "white",
      padding: "8px 14px",
      borderRadius: "999px",
      zIndex: 99999,
      fontSize: "13px",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 260ms ease-in-out",
    });
    document.body.appendChild(el);
    requestAnimationFrame(() => (el.style.opacity = "1"));
    setTimeout(() => {
      el.style.opacity = "0";
      setTimeout(() => el.remove(), 300);
    }, 1400);
  }
}
