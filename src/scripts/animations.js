import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Wait for CLI loader to reveal #main-content ────────────────────────────
// Fallback timer (2600ms) ensures scroll triggers always register even if
// the MutationObserver somehow misses the style change.
function onMainVisible(cb) {
  const main = document.getElementById("main-content");
  if (!main) { setTimeout(cb, 100); return; }

  let fired = false;
  function fire() {
    if (fired) return;
    fired = true;
    setTimeout(() => { ScrollTrigger.refresh(); cb(); }, 80);
  }

  // Already visible
  if (main.style.display === "block") { fire(); return; }

  // Watch for display:block
  const obs = new MutationObserver(() => {
    if (main.style.display === "block") { obs.disconnect(); fire(); }
  });
  obs.observe(main, { attributes: true, attributeFilter: ["style"] });

  // Fallback: fire no matter what after loader max time
  setTimeout(() => { obs.disconnect(); fire(); }, 2600);
}

onMainVisible(() => {
  // ── Hero parallax: content drifts + fades as hero scrolls out ────────────
  gsap.to(".hero__content", {
    y: 120,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "80% top",
      scrub: 0.6,
    },
  });

  gsap.to(".hero__canvas", {
    y: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.4,
    },
  });

  // ── Section reveal: fade-up on scroll ────────────────────────────────────
  gsap.utils.toArray(".reveal-section").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });
  });

  // ── TechStack: stagger badges ─────────────────────────────────────────────
  const techItems = gsap.utils.toArray(".tech-item");
  if (techItems.length) {
    gsap.from(techItems, {
      opacity: 0,
      y: 18,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.04,
      scrollTrigger: {
        trigger: ".tech-grid",
        start: "top 82%",
        once: true,
      },
    });
  }

  // ── Project cards: stagger on scroll ─────────────────────────────────────
  const projectCards = gsap.utils.toArray(".project-card");
  if (projectCards.length) {
    gsap.from(projectCards, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%",
        once: true,
      },
    });
  }

  // ── Timeline items: slide in ──────────────────────────────────────────────
  gsap.utils.toArray(".timeline-item").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      x: -20,
      duration: 0.55,
      ease: "power2.out",
      delay: i * 0.07,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });
  });

  // ── Bento cards ───────────────────────────────────────────────────────────
  const bentoCards = gsap.utils.toArray(".bento-card");
  if (bentoCards.length) {
    gsap.from(bentoCards, {
      opacity: 0,
      scale: 0.97,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 85%",
        once: true,
      },
    });
  }
});
