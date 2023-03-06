export default function initAccoridion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const ativoclass = "ativo";

  function activeAccordion() {
    this.classList.toggle(ativoclass);
    this.nextElementSibling.classList.toggle(ativoclass);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(ativoclass);
    accordionList[0].nextElementSibling.classList.add(ativoclass);
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
