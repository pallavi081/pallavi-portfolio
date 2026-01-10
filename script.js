
/* ================= PARTICLES ================= */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particlesArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = Math.random() * 0.3 - 0.15;
    this.speedY = Math.random() * 0.3 - 0.15;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.fillStyle = "#38bdf8";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  const numberOfParticles = Math.floor((canvas.width * canvas.height) / 8000); 
  // 👆 MORE PARTICLES (professional density)

  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();


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

