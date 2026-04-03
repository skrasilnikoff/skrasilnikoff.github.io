document.addEventListener('DOMContentLoaded', () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  [
    document.querySelectorAll('.summary'),
    document.querySelectorAll('section h2'),
    document.querySelectorAll('.skill-group'),
    document.querySelectorAll('.job'),
  ].forEach(group => {
    group.forEach((el, i) => {
      el.style.transitionDelay = i * 0.09 + 's';
      io.observe(el);
    });
  });
});
