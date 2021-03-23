import { onScroll } from "./main.js";
(() => {
  let slideElems = document.getElementsByClassName("mySlides");
  let slideIndex = 0;
  const galleryFilter = document.querySelector(".gallery-filter"),
    galleryItems = document.querySelectorAll(".gallery-item");

  function showSlides() {
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slideElems.length; i++) {
      slideElems[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slideElems.length) {
      slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" actives", "");
    }
    slideElems[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " actives";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  function scrollReveal() {
    const sectionElem = Array.from(document.querySelectorAll("section"));

    sectionElem.forEach(() => {
      const recordElem = document.querySelector(".record");
      const wrapperElem = document.querySelector(".wrapper");
      const boxMenuElem = document.querySelector(".box-menu");
      const galleryElem = document.querySelector(".gallery");
      const serviceElem = document.querySelector(".service");

      const scrollPosition = window.pageYOffset;
      // console.log(scrollPosition);

      if (scrollPosition >= 100) {
        recordElem.classList.add("reveal");
      }
      if (scrollPosition >= 300) {
        wrapperElem.classList.add("reveal");
      }
      if (scrollPosition >= 700) {
        boxMenuElem.classList.add("reveal");
      }
      if (scrollPosition >= 1550) {
        galleryElem.classList.add("reveal");
      }
      if (scrollPosition >= 3000) {
        serviceElem.classList.add("reveal");
      }
    });
  }

  function filterGallery() {
    galleryFilter.addEventListener("click", (event) => {
      if (event.target.classList.contains("filter-item")) {
        // deactivate existing active 'filter-item'
        galleryFilter.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
          if (item.classList.contains(filterValue) || filterValue === "all") {
            item.classList.remove("hide");
            item.classList.add("show");
          } else {
            item.classList.remove("show");
            item.classList.add("hide");
          }
        });
      }
    });
  }

  function run() {
    showSlides();
    onScroll();
    document.addEventListener("scroll", scrollReveal);
    filterGallery();
  }

  run();
})();
