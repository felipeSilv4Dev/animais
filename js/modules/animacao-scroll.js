export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.6;

  function animascroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVivible = sectionTop - windowMetade < 0;

      if (isSectionVivible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  if (sections) {
    animascroll();
    window.addEventListener("scroll", animascroll);
  }
}
