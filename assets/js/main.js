// ============================================================
//  Samson Ishola — Portfolio
//  Boot sequence + mobile menu
// ============================================================

document.getElementById('year').textContent = new Date().getFullYear();

// ── Boot console sequence ───────────────────────────────────
const bootLines = [
  { text: '> initializing profile...', delay: 0 },
  { text: '> identity: <span class="label">Samson Ishola</span>', delay: 380 },
  { text: '> role: <span class="label">Research & Development · Business Analytics</span>', delay: 380 },
  { text: '> systems_loaded: <span class="ok">SportSense</span>, <span class="ok">DIG Platform</span>', delay: 380 },
  { text: '> status: <span class="ok">online</span>', delay: 380 },
];

const consoleEl = document.getElementById('bootConsole');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  // Skip animation entirely — show final state immediately
  consoleEl.style.display = 'none';
  document.getElementById('heroContent').style.opacity = '1';
  document.getElementById('heroContent').style.animation = 'none';
} else {
  let cumulativeDelay = 0;
  bootLines.forEach((line, i) => {
    cumulativeDelay += line.delay;
    const div = document.createElement('div');
    div.className = 'boot-line';
    div.style.animationDelay = cumulativeDelay + 'ms';
    div.innerHTML = line.text + (i === bootLines.length - 1
      ? '<span class="boot-cursor"></span>' : '');
    consoleEl.appendChild(div);
  });
}

// ── Mobile menu toggle ───────────────────────────────────────
const navToggle  = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = navToggle.querySelector('i');
    const isOpen = mobileMenu.classList.contains('open');
    icon.className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
    icon.style.fontSize = isOpen ? '18px' : '20px';
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const icon = navToggle.querySelector('i');
      icon.className = 'bi bi-list';
      icon.style.fontSize = '20px';
    });
  });
}

// ── Scroll-reveal for sections (lightweight, no library) ─────
const revealEls = document.querySelectorAll('.project-card, .cap-cell, .panel-card');
if ('IntersectionObserver' in window && !reduceMotion) {
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}
