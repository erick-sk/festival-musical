document.addEventListener("DOMContentLoaded", function () {
  scrollNav();

  fixNav();
});

function fixNav() {
  const barr = document.querySelector(".header");

  // Register intersection observer
  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      barr.classList.remove("fix");
    } else {
      barr.classList.add("fix");
    }
  });
  // Element to see
  observer.observe(document.querySelector(".about-festival"));
}

function scrollNav() {
  const links = document.querySelectorAll(".main-nav a");

  links.forEach(function (links) {
    links.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(e.target.attributes.href.value);

      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
