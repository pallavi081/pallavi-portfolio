


document.addEventListener("DOMContentLoaded", () => {
  const heroLine = document.querySelector(".hero-line");

  const text = "CSE | Frontend Developer | Learning Backend & AI";
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting && index <= text.length) {
      heroLine.textContent = text.slice(0, index++);
    } 
    else if (isDeleting && index >= 0) {
      heroLine.textContent = text.slice(0, index--);
    }

    if (index === text.length + 2) isDeleting = true;
    if (index === 0) isDeleting = false;

    setTimeout(typeEffect, isDeleting ? 50 : 90);
  }

  typeEffect();
});


document.addEventListener("DOMContentLoaded", () => {
  const dot = document.createElement("div");
  const ring = document.createElement("div");

  dot.className = "cursor-dot";
  ring.className = "cursor-ring";

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });
});
particlesJS("particles", {
  particles: {
    number: {
      value: 160,
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
      value: 0.35,
      random: true
    },
    size: {
      value: 1.8,
      random: true
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      }
    }
  },
  retina_detect: true
});

// ===== Scroll Reveal Animation =====
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== View More Toggle =====
document.querySelectorAll(".view-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    card.classList.toggle("expanded");
    btn.textContent = card.classList.contains("expanded") ? "View Less" : "View More";
  });
});
ScrollReveal().reveal(".timeline-item", {
  distance: "80px",
  origin: "bottom",
  duration: 1000,
  interval: 200,
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  reset: false
});

ScrollReveal().reveal(".contact-card", {
  distance: "80px",
  origin: "bottom",
  duration: 1000,
  interval: 200,
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  reset: false
});
