
// Simple animation on scroll
window.addEventListener("scroll", function() {
  const elements = document.querySelectorAll("section, .project-card, .skill");
  const screenPosition = window.innerHeight / 1.2;

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < screenPosition) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease-out";
    }
  });
});
