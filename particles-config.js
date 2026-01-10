particlesJS("particles", {
  particles: {
    number: {
      value: 140,   // 🔥 more particles
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#38bdf8"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.6,
      random: true
    },
    size: {
      value: 2.2,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#38bdf8",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2,   // smooth movement
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  },
  retina_detect: true
});
