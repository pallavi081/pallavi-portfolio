ScrollReveal({
  distance: "40px",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.8, 0.25, 1)",
  reset: false,
  opacity: 0
});

/* HERO */
ScrollReveal().reveal(".hero-left", {
  origin: "left",
  delay: 200,
  scale: 0.95
});

ScrollReveal().reveal(".hero-right", {
  origin: "right",
  delay: 300,
  scale: 0.9
});

/* SECTION HEADINGS */
ScrollReveal().reveal("section h2", {
  origin: "top",
  delay: 150,
  scale: 0.98
});

/* SKILLS */
ScrollReveal().reveal(".skills-grid div", {
  interval: 120,
  origin: "bottom",
  scale: 0.9
});

/* PROJECTS */
ScrollReveal().reveal(".project-card, .website-card", {
  interval: 150,
  origin: "bottom",
  scale: 0.92
});

/* EXPERIENCE */
ScrollReveal().reveal(".experience-card", {
  interval: 150,
  origin: "bottom",
  scale: 0.94
});

/* CONTACT */
ScrollReveal().reveal("#contact p, #contact a", {
  interval: 100,
  origin: "bottom",
  scale: 0.95
});
