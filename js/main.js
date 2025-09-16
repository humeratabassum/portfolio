document.addEventListener("DOMContentLoaded", () => {
  const animatedElems = document.querySelectorAll('.card, .project, .animate-slide-up, .animate-pop');
  function revealOnScroll() {
    animatedElems.forEach(elem => {
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        elem.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener("click", function(e) {
      if (this.hash) {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
