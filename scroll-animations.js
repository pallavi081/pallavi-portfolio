ScrollReveal({
  distance: "50px",
  duration: 900,
  easing: "ease-out",
  reset: false
});

/* Hero */
ScrollReveal().reveal(".hero-text", { origin: "left", delay: 200 });
ScrollReveal().reveal(".hero-right", { origin: "right", delay: 300 });

/* Sections */
ScrollReveal().reveal("section h2", { origin: "top", delay: 150 });
ScrollReveal().reveal(".skills-grid div", {
  interval: 120,
  origin: "bottom"
});
ScrollReveal().reveal(".project-card", {
  interval: 150,
  origin: "bottom"
});
ScrollReveal().reveal(".experience-card", {
  interval: 150,
  origin: "bottom"
});
