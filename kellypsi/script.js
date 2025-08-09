const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Animação ao rolar
const animatedElements = document.querySelectorAll(".animate, .card");

function checkAnimation() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", checkAnimation);
window.addEventListener("load", checkAnimation);
