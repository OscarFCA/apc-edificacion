/* APC Edificación — interacciones ligeras (vanilla JS) */
(function () {
  'use strict';

  // Header: sombra al hacer scroll
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 10); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Reveal al hacer scroll (con failsafe: nada queda invisible permanentemente)
  var reveals = document.querySelectorAll('.reveal');
  var revealAll = function () { reveals.forEach(function (el) { el.classList.add('in'); }); };
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
    // failsafe: si algo no se reveló (scroll raro, JS lento), mostrarlo igual
    window.addEventListener('load', function () { setTimeout(revealAll, 1500); });
  } else {
    revealAll();
  }

  // Lightbox de galería
  var gallery = document.querySelector('.gallery');
  if (gallery) {
    var links = Array.prototype.slice.call(gallery.querySelectorAll('a'));
    var items = links.map(function (a) { return a.getAttribute('href'); });
    var idx = 0;
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML =
      '<button class="lightbox__close" aria-label="Cerrar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
      '<button class="lightbox__nav prev" aria-label="Anterior">&#8249;</button>' +
      '<img alt="">' +
      '<button class="lightbox__nav next" aria-label="Siguiente">&#8250;</button>';
    document.body.appendChild(box);
    var imgEl = box.querySelector('img');
    var show = function (i) { idx = (i + items.length) % items.length; imgEl.src = items[idx]; };
    var open = function (i) { show(i); box.classList.add('open'); document.body.style.overflow = 'hidden'; };
    var close = function () { box.classList.remove('open'); document.body.style.overflow = ''; };
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) { e.preventDefault(); open(i); });
    });
    box.querySelector('.lightbox__close').addEventListener('click', close);
    box.querySelector('.prev').addEventListener('click', function () { show(idx - 1); });
    box.querySelector('.next').addEventListener('click', function () { show(idx + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  // Año en el footer
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
