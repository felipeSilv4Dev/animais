export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function activetab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("Ativo");
    });
    tabContent[index].classList.add("Ativo", tabContent[index].dataset.anime);
  }
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("Ativo");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => activetab(index));
    });
  }
}
