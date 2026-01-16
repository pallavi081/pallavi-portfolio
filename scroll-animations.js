ScrollReveal({
  distance: "50px",
  duration: 1200,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)", // very smooth
  reset: false,
  opacity: 0
});

/* HERO */
ScrollReveal().reveal(".hero-left", {
  origin: "left",
  delay: 200
});

ScrollReveal().reveal(".hero-right", {
  origin: "right",
  delay: 300
});

/* SECTIONS */
ScrollReveal().reveal("section h2", {
  origin: "top",
  delay: 150
});

ScrollReveal().reveal(
  ".skills-grid div, .experience-card, .project-card, .website-card",
  {
    interval: 120,
    origin: "bottom"
  }
);



