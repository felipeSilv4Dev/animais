export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animascroll = this.animascroll.bind(this);
  }

  animascroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVivible = sectionTop - this.windowMetade < 0;

      if (isSectionVivible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animascroll();
    window.addEventListener("scroll", this.animascroll);
  }
}
