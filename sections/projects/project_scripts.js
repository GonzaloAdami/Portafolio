const sections = document.querySelectorAll(".section");
let currentSectionIndex = 0;

function animateSections() {
  sections.forEach((section, index) => {
    if (index === currentSectionIndex) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

function scrollToNextSection() {
  currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  const nextSection = sections[currentSectionIndex];
  nextSection.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("scroll", animateSections);
animateSections();

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    scrollToNextSection();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  const pages = document.querySelectorAll(".page");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetHref = link.getAttribute("href");

      // Oculta la página actual
      const currentPage = document.querySelector(".page.active");
      currentPage.classList.add("fade-out");
      currentPage.classList.remove("active");

      // Muestra la nueva página después de la animación
      setTimeout(() => {
        window.location.href = targetHref;
      }, 1000); // Ajusta el tiempo de espera según la duración de la animación (en este caso, 1000 ms = 1 segundo)
    });
  });
});
