// Apple Dream Studio 5.0 - Interactions
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => observer.observe(el));
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<img src="" alt="Zoom">';
  document.body.appendChild(lightbox);
  document.querySelectorAll('.img-box img, .gallery-item img, .product-card img').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      lightbox.querySelector('img').src = img.src;
      lightbox.classList.add('active');
    });
  });
  lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });
});
