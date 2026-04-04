/* ==========================================================================
   Premium Portfolio Interactions (Optimized for performance)
========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // Preloader Logic (Removed for absolute speed, assuming fast load)
  // If user wants absolute speed, dropping preloader removes the 1.5s delay.
  // We deleted the preloader in HTML, so no JS code needed here for it.
  // ==========================================


  // ==========================================
  // Premium Particles.js Initialization
  // ==========================================
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 75, density: { enable: true, value_area: 800 } },
        color: { value: '#ebd07d' }, /* Perfect Lux Gold */
        shape: { type: 'circle' },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 0.5, opacity_min: 0.2, sync: false }
        },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 120, color: '#ebd07d', opacity: 0.25, width: 1 },
        move: { enable: true, speed: 0.8, direction: 'none', random: true, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'bubble' }, onclick: { enable: false }, resize: true },
        modes: { bubble: { distance: 150, size: 5, duration: 2, opacity: 0.8, speed: 3 } }
      },
      retina_detect: true
    });
  }

  // ==========================================
  // Custom Cursor (Optimized)
  // ==========================================
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  // Check if device is touch or has no fine pointer
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  
  if (!isTouchDevice) {
    // using requestAnimationFrame for butter smooth 60fps cursor
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Exact position for dot instantly
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    const animateCursor = () => {
      // trailing math
      let distX = mouseX - outlineX;
      let distY = mouseY - outlineY;
      
      outlineX = outlineX + (distX * 0.15); // speed 
      outlineY = outlineY + (distY * 0.15);

      if (cursorOutline) {
         cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Add Hover Effect class for specific elements
    const hoverElements = document.querySelectorAll('a, button, .project-card, .info-card, .skill-modern-card');
    
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  } else {
    // Hide cursors on mobile completely
    if(cursorDot) cursorDot.style.display = 'none';
    if(cursorOutline) cursorOutline.style.display = 'none';
    document.body.style.cursor = 'auto';
  }

  // ==========================================
  // Navbar Scrolling & Mobile Menu
  // ==========================================
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true }); // Passive true for performance

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // ==========================================
  // Typed.js Initialization
  // ==========================================
  if (typeof Typed !== 'undefined') {
    new Typed('.typed-text', {
      strings: [
        'Frontend Developer', 
        'Problem Solver', 
        'Tech Enthusiast'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: false 
    });
  }

  // ==========================================
  // Scroll Reveal Animations (High Performance Intersection Observer)
  // ==========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // trigger slightly before bottom
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, ob) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Stop observing once animated
        ob.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section-reveal, .stagger-container').forEach(section => {
    observer.observe(section);
  });

});
