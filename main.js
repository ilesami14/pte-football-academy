/* ============================================
   PTE FOOTBALL ACADEMY — main.js
   All site interactivity and behaviour
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── HAMBURGER MENU ── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  function openMenu() {
    mobileMenu.classList.add('active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger)  hamburger.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);

  // Close menu when any link inside it is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });


  /* ── NAVBAR SCROLL SHADOW ── */
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });


  /* ── SCROLL REVEAL ── */
  var revealElements = document.querySelectorAll('.reveal');

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, index) {
      if (entry.isIntersecting) {
        // Stagger siblings slightly when multiple appear together
        var delay = index * 80;
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });


  /* ── REGISTRATION FORM ── */
  var form       = document.getElementById('registrationForm');
  var successMsg = document.getElementById('successMsg');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = form.querySelector('.submit-btn');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate send — replace with actual backend call when ready
      setTimeout(function () {
        form.reset();
        submitBtn.textContent = 'Send Registration';
        submitBtn.disabled = false;

        if (successMsg) {
          successMsg.classList.add('show');
          // Auto-hide after 6 seconds
          setTimeout(function () {
            successMsg.classList.remove('show');
          }, 6000);
        }
      }, 1000);
    });
  }

});
