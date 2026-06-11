/* ── TNF GROUP — MAIN JS ─────────────────────────────────────────────────── */
'use strict';

/* ── 1. YEAR ─────────────────────────────────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── 2. NAVBAR SCROLL ────────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── 3. MOBILE MENU ──────────────────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});

window.closeMenu = function () {
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
};

/* ── 4. LANGUAGE SWITCH ──────────────────────────────────────────────────── */
let currentLang = 'vi';
const langBtn = document.getElementById('langBtn');

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'vi' ? 'en' : 'vi';
  langBtn.textContent = currentLang === 'vi' ? 'EN' : 'VI';
  applyLang(currentLang);
});

function applyLang(lang) {
  /* text nodes */
  document.querySelectorAll('[data-vi]').forEach(el => {
    const val = lang === 'vi' ? el.dataset.vi : el.dataset.en;
    if (val === undefined) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      /* skip — handled separately */
    } else {
      el.textContent = val;
    }
  });

  /* placeholders */
  document.querySelectorAll('[data-ph-vi]').forEach(el => {
    el.placeholder = lang === 'vi' ? el.dataset.phVi : el.dataset.phEn;
  });
}

/* ── 5. SCROLL REVEAL ────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.11 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── 6. DISCLOSURE ACCORDION ─────────────────────────────────────────────── */
window.toggleDisc = function (btn) {
  const panel  = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  /* close all siblings in same column */
  btn.closest('.disc-col').querySelectorAll('.disc-row-btn').forEach(b => {
    b.classList.remove('open');
    if (b.nextElementSibling) b.nextElementSibling.style.display = 'none';
  });

  if (!isOpen) {
    btn.classList.add('open');
    panel.style.display = 'block';
  }
};

/* ── 7. CONTACT FORM ─────────────────────────────────────────────────────── */
window.submitForm = function () {
  const name  = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg   = document.getElementById('f-msg').value.trim();

  if (!name || !phone || !email || !msg) {
    const notice = currentLang === 'vi'
      ? 'Vui lòng điền đầy đủ các trường bắt buộc (*).'
      : 'Please fill in all required fields (*).';
    alert(notice);
    return;
  }

  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').classList.add('show');
};
