export function onScroll() {
    window.addEventListener("scroll", () => {
      const headerElem = document.querySelector("header");
      headerElem.classList.toggle("sticky", window.scrollY > 0);
    });
  }